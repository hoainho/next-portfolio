import { NextResponse, NextRequest } from "next/server";

// =============================================================================
// CONFIGURATION
// =============================================================================

const RATE_LIMIT_CONFIG = {
  // API endpoints - stricter limits
  api: {
    windowMs: 60 * 1000, // 1 minute window
    maxRequests: 30, // 30 requests per minute
  },
  // General pages - more lenient
  general: {
    windowMs: 60 * 1000,
    maxRequests: 100,
  },
  // GraphQL endpoint - moderate
  graphql: {
    windowMs: 60 * 1000,
    maxRequests: 20,
  },
};

// Bad bots and scrapers to block
const BAD_BOT_PATTERNS = [
  /curl/i,
  /wget/i,
  /python-requests/i,
  /python-urllib/i,
  /scrapy/i,
  /httpclient/i,
  /java\//i,
  /libwww/i,
  /lwp-/i,
  /go-http-client/i,
  /php\//i,
  /ruby/i,
  /perl/i,
  /mechanize/i,
  /phantom/i,
  /headless/i,
  /selenium/i,
  /puppeteer/i,
  /playwright/i,
  /crawl/i,
  /spider/i,
  /bot(?!.*(?:google|bing|yandex|baidu|duckduck|facebook|twitter|linkedin|slack|discord|telegram|whatsapp))/i,
  /scraper/i,
  /fetch/i,
  /axios/i,
  /node-fetch/i,
  /undici/i,
];

// Known good bots (allow these)
const GOOD_BOT_PATTERNS = [
  /googlebot/i,
  /bingbot/i,
  /yandexbot/i,
  /baiduspider/i,
  /duckduckbot/i,
  /facebookexternalhit/i,
  /twitterbot/i,
  /linkedinbot/i,
  /slackbot/i,
  /discordbot/i,
  /telegrambot/i,
  /whatsapp/i,
  /applebot/i,
];

// Suspicious paths that bots often probe
const SUSPICIOUS_PATHS = [
  /\.php$/i,
  /\.asp$/i,
  /\.aspx$/i,
  /wp-admin/i,
  /wp-login/i,
  /wp-content/i,
  /wp-includes/i,
  /\.env/i,
  /\.git/i,
  /\.sql/i,
  /phpmyadmin/i,
  /admin/i,
  /administrator/i,
  /xmlrpc/i,
  /config\./i,
  /backup/i,
  /\.bak$/i,
  /\.old$/i,
  /\.orig$/i,
  /\.swp$/i,
];

// =============================================================================
// IN-MEMORY RATE LIMITING (Edge-compatible)
// Note: This resets on cold starts. For production, consider Vercel KV or Upstash
// =============================================================================

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

// Using Map for Edge runtime compatibility
const rateLimitStore = new Map<string, RateLimitEntry>();

// Cleanup old entries periodically (memory management)
const CLEANUP_INTERVAL = 5 * 60 * 1000; // 5 minutes
let lastCleanup = Date.now();

function cleanupExpiredEntries() {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL) return;

  lastCleanup = now;
  rateLimitStore.forEach((entry, key) => {
    if (entry.resetTime < now) {
      rateLimitStore.delete(key);
    }
  });
}

function checkRateLimit(
  key: string,
  config: { windowMs: number; maxRequests: number }
): { allowed: boolean; remaining: number; resetTime: number } {
  cleanupExpiredEntries();

  const now = Date.now();
  const entry = rateLimitStore.get(key);

  if (!entry || entry.resetTime < now) {
    // New window
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + config.windowMs,
    });
    return {
      allowed: true,
      remaining: config.maxRequests - 1,
      resetTime: now + config.windowMs,
    };
  }

  // Existing window
  entry.count++;
  const remaining = Math.max(0, config.maxRequests - entry.count);

  return {
    allowed: entry.count <= config.maxRequests,
    remaining,
    resetTime: entry.resetTime,
  };
}

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

function getClientIP(request: NextRequest): string {
  // Vercel provides the real IP in these headers
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    // x-forwarded-for can contain multiple IPs, take the first one
    return forwardedFor.split(",")[0].trim();
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp;

  // Vercel-specific header
  const vercelIp = request.headers.get("x-vercel-forwarded-for");
  if (vercelIp) return vercelIp.split(",")[0].trim();

  return "unknown";
}

function isBadBot(userAgent: string | null): boolean {
  if (!userAgent) return true; // No user agent = suspicious

  // Check if it's a known good bot first
  for (const pattern of GOOD_BOT_PATTERNS) {
    if (pattern.test(userAgent)) return false;
  }

  // Check if it's a known bad bot
  for (const pattern of BAD_BOT_PATTERNS) {
    if (pattern.test(userAgent)) return true;
  }

  return false;
}

function isSuspiciousPath(pathname: string): boolean {
  for (const pattern of SUSPICIOUS_PATHS) {
    if (pattern.test(pathname)) return true;
  }
  return false;
}

function isGoodBot(userAgent: string | null): boolean {
  if (!userAgent) return false;
  return GOOD_BOT_PATTERNS.some((pattern) => pattern.test(userAgent));
}

function isEmptyOrSuspiciousUserAgent(userAgent: string | null): boolean {
  if (!userAgent || userAgent.length < 10) return true;
  if (isGoodBot(userAgent)) return false;
  if (userAgent.length < 20) return true;
  return false;
}

// =============================================================================
// MIDDLEWARE
// =============================================================================

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const userAgent = request.headers.get("user-agent");
  const clientIP = getClientIP(request);

  // Skip middleware for static assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname.includes(".") // files with extensions
  ) {
    return NextResponse.next();
  }

  // ==========================================================================
  // 1. Block suspicious paths (security probes)
  // ==========================================================================
  if (isSuspiciousPath(pathname)) {
    console.log(`[BLOCKED] Suspicious path: ${pathname} from ${clientIP}`);
    return new NextResponse("Not Found", { status: 404 });
  }

  // ==========================================================================
  // 2. Block bad bots and scrapers
  // ==========================================================================
  if (isBadBot(userAgent)) {
    console.log(`[BLOCKED] Bad bot: ${userAgent?.slice(0, 50)} from ${clientIP}`);
    return new NextResponse("Forbidden", { status: 403 });
  }

  // ==========================================================================
  // 3. Block empty/suspicious user agents (except for API with valid origin)
  // ==========================================================================
  if (isEmptyOrSuspiciousUserAgent(userAgent) && !pathname.startsWith("/api")) {
    console.log(`[BLOCKED] Suspicious UA: "${userAgent}" from ${clientIP}`);
    return new NextResponse("Forbidden", { status: 403 });
  }

  // ==========================================================================
  // 4. Rate limiting
  // ==========================================================================
  let rateLimitConfig = RATE_LIMIT_CONFIG.general;
  let rateLimitKey = `general:${clientIP}`;

  if (pathname === "/api/graphql") {
    rateLimitConfig = RATE_LIMIT_CONFIG.graphql;
    rateLimitKey = `graphql:${clientIP}`;
  } else if (pathname.startsWith("/api/")) {
    rateLimitConfig = RATE_LIMIT_CONFIG.api;
    rateLimitKey = `api:${clientIP}`;
  }

  const { allowed, remaining, resetTime } = checkRateLimit(
    rateLimitKey,
    rateLimitConfig
  );

  if (!allowed) {
    console.log(
      `[RATE LIMITED] ${pathname} from ${clientIP} - exceeded ${rateLimitConfig.maxRequests} requests`
    );
    return new NextResponse("Too Many Requests", {
      status: 429,
      headers: {
        "Retry-After": String(Math.ceil((resetTime - Date.now()) / 1000)),
        "X-RateLimit-Limit": String(rateLimitConfig.maxRequests),
        "X-RateLimit-Remaining": "0",
        "X-RateLimit-Reset": String(resetTime),
      },
    });
  }

  // ==========================================================================
  // 5. Add security headers and continue
  // ==========================================================================
  const response = NextResponse.next();

  // Rate limit headers
  response.headers.set("X-RateLimit-Limit", String(rateLimitConfig.maxRequests));
  response.headers.set("X-RateLimit-Remaining", String(remaining));
  response.headers.set("X-RateLimit-Reset", String(resetTime));

  // Security headers
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  return response;
}

// =============================================================================
// MATCHER CONFIG
// =============================================================================

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|public/).*)",
  ],
};
