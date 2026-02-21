import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

const INCREMENT_POST_VIEWS_MUTATION = `
  mutation IncrementPostViews($postId: ID!) {
    incrementPostViews(input: { postId: $postId }) {
      postId
      postViews {
        total
      }
    }
  }
`;

const ALLOWED_ORIGINS = [
  'https://hoainho.info',
  'https://www.hoainho.info',
  process.env.NEXT_PUBLIC_SITE_URL,
].filter(Boolean);

const viewedPosts = new Map<string, number>();
const VIEW_COOLDOWN_MS = 30 * 60 * 1000;

function hasRecentlyViewed(clientId: string, postId: string | number): boolean {
  const key = `${clientId}:${postId}`;
  const lastViewed = viewedPosts.get(key);
  
  if (!lastViewed) return false;
  
  const isWithinCooldown = Date.now() - lastViewed < VIEW_COOLDOWN_MS;
  if (!isWithinCooldown) {
    viewedPosts.delete(key);
  }
  return isWithinCooldown;
}

function recordView(clientId: string, postId: string | number): void {
  const key = `${clientId}:${postId}`;
  
  if (viewedPosts.size > 10000) {
    const oldestKey = viewedPosts.keys().next().value;
    if (oldestKey) viewedPosts.delete(oldestKey);
  }
  
  viewedPosts.set(key, Date.now());
}

function getClientId(request: NextRequest): string {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
             request.headers.get("x-real-ip") ||
             "unknown";
  const ua = request.headers.get("user-agent") || "";
  return `${ip}:${ua.slice(0, 50)}`;
}

export async function POST(request: NextRequest) {
  try {
    const origin = request.headers.get('origin');
    const referer = request.headers.get('referer');
    
    const isValidRequest = ALLOWED_ORIGINS.some(allowed => 
      origin === allowed || (referer && referer.startsWith(allowed || ''))
    ) || (origin?.endsWith('.vercel.app') || referer?.includes('.vercel.app'));

    if (!isValidRequest && process.env.NODE_ENV === 'production') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { postId } = await request.json();

    if (!postId) {
      return NextResponse.json(
        { error: "postId is required" },
        { status: 400 },
      );
    }

    const clientId = getClientId(request);
    
    if (hasRecentlyViewed(clientId, postId)) {
      return NextResponse.json({ 
        success: true, 
        views: 0,
        cached: true 
      });
    }

    const response = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_WORDPRESS_AUTH_REFRESH_TOKEN}`,
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        Origin: "https://dev01.thnkandgrow.com",
        Referer: "https://dev01.thnkandgrow.com",
      },
      body: JSON.stringify({
        query: INCREMENT_POST_VIEWS_MUTATION,
        variables: { postId },
      }),
    });

    const data = await response.json();

    if (data.errors) {
      return NextResponse.json(
        { error: "GraphQL error", details: data.errors },
        { status: 500 },
      );
    }

    recordView(clientId, postId);

    const total = data?.data?.incrementPostViews?.postViews?.total ?? 0;

    return NextResponse.json({ success: true, views: total });
  } catch (error) {
    console.error("Increment view error:", error);
    return NextResponse.json(
      { error: "Failed to increment view" },
      { status: 500 },
    );
  }
}
