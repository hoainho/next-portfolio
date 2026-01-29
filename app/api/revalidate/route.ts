import { NextRequest, NextResponse } from "next/server";

const getTimestamp = () => new Date().toISOString();

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const secret = searchParams.get("secret");
    const paths =
      searchParams
        .get("paths")
        ?.split(",")
        .map((p) => p.trim()) || [];

    console.log(`[${getTimestamp()}] Cache purge request received`);

    if (secret !== process.env.NEXT_PUBLIC_REVALIDATION_SECRET) {
      console.error(`[${getTimestamp()}] Invalid secret token`);
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    if (!paths.length) {
      return NextResponse.json(
        { message: "No paths provided" },
        { status: 400 },
      );
    }

    const cfZoneId = process.env.CF_ZONE_ID;
    const cfApiToken = process.env.CF_API_TOKEN;

    if (!cfZoneId || !cfApiToken) {
      console.error(`[${getTimestamp()}] Missing CF credentials`);
      return NextResponse.json(
        { message: "Server misconfiguration" },
        { status: 500 },
      );
    }

    const urlsToPurge = paths.map((p) => `https://hoainho.info${p}`);

    const cfResponse = await fetch(
      `https://api.cloudflare.com/client/v4/zones/${cfZoneId}/purge_cache`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${cfApiToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ files: urlsToPurge }),
      },
    );

    if (!cfResponse.ok) {
      const error = await cfResponse.json();
      console.error(`[${getTimestamp()}] CF API error:`, error);
      return NextResponse.json(
        { message: "Cache purge failed" },
        { status: 500 },
      );
    }

    console.log(
      `[${getTimestamp()}] Purged ${urlsToPurge.length} URLs from cache`,
    );

    return NextResponse.json({
      success: true,
      message: "Cache purged successfully",
      purged: urlsToPurge,
      timestamp: getTimestamp(),
    });
  } catch (error) {
    const timestamp = getTimestamp();
    console.error(`[${timestamp}] Error:`, error);
    return NextResponse.json(
      {
        message: "Error",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
