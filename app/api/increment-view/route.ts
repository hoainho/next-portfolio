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

export async function POST(request: NextRequest) {
  try {
    const { postId } = await request.json();

    if (!postId) {
      return NextResponse.json(
        { error: "postId is required" },
        { status: 400 },
      );
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
