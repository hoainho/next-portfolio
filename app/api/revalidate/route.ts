import { NextRequest, NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";

// Explicitly declare the route as dynamic
export const dynamic = "force-dynamic";

// Helper function to get current timestamp in a readable format
const getTimestamp = () => new Date().toISOString();

// Helper function to log revalidation events
const logRevalidation = (type: "tag" | "path", item: string) => {
  console.log(`[${getTimestamp()}] Revalidating ${type}: ${item}`);
};

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const secret = searchParams.get("secret");
    const tag = searchParams.get("tag");
    const path = searchParams.get("path");

    console.log(`[${getTimestamp()}] Revalidation request received:`, {
      hasSecret: !!secret,
      tag,
      path,
    });

    // Validate the secret token
    if (secret !== process.env.NEXT_PUBLIC_REVALIDATION_SECRET) {
      console.error(`[${getTimestamp()}] Invalid secret token provided`);
      return NextResponse.json(
        { message: "Invalid secret token" },
        { status: 401 },
      );
    }

    // Validate that at least one parameter is provided
    if (!tag && !path) {
      console.error(`[${getTimestamp()}] No tag or path provided`);
      return NextResponse.json(
        { message: "Either tag or path query parameter is required" },
        { status: 400 },
      );
    }

    const revalidated = {
      tags: [] as string[],
      paths: [] as string[],
      timestamp: getTimestamp(),
    };

    // Handle tag-based revalidation
    if (tag) {
      const tags = tag.split(",").map((t) => t.trim());
      console.log(
        `[${getTimestamp()}] Processing ${tags.length} tags for revalidation`,
      );

      for (const t of tags) {
        try {
          logRevalidation("tag", t);
          revalidateTag(t);
          revalidated.tags.push(t);
        } catch (e) {
          console.error(
            `[${getTimestamp()}] Failed to revalidate tag: ${t}`,
            e,
          );
        }
      }
    }

    // Handle path-based revalidation
    if (path) {
      const paths = path.split(",").map((p) => p.trim());
      console.log(
        `[${getTimestamp()}] Processing ${paths.length} paths for revalidation`,
      );

      for (const p of paths) {
        try {
          logRevalidation("path", p);
          revalidatePath(p);
          revalidated.paths.push(p);
        } catch (e) {
          console.error(
            `[${getTimestamp()}] Failed to revalidate path: ${p}`,
            e,
          );
        }
      }
    }

    console.log(`[${getTimestamp()}] Revalidation completed:`, {
      tags: revalidated.tags,
      paths: revalidated.paths,
    });

    return NextResponse.json(
      {
        revalidated: true,
        now: Date.now(),
        message: "Revalidation successful",
        details: {
          tags: revalidated.tags.length ? revalidated.tags : undefined,
          paths: revalidated.paths.length ? revalidated.paths : undefined,
          timestamp: revalidated.timestamp,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    const timestamp = getTimestamp();
    console.error(`[${timestamp}] Revalidation error:`, error);
    return NextResponse.json(
      {
        message: "Revalidation failed",
        error: (error as Error).message,
        timestamp,
      },
      { status: 500 },
    );
  }
}
