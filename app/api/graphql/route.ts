import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

const ALLOWED_ORIGINS = [
    'https://hoainho.info',
    'https://www.hoainho.info',
    process.env.NEXT_PUBLIC_SITE_URL,
].filter(Boolean);

const CACHE_TTL_SECONDS = 300;

function isValidOrigin(origin: string | null): boolean {
    if (!origin) return false;
    return ALLOWED_ORIGINS.some(allowed => origin === allowed || origin.endsWith('.vercel.app'));
}

function createCacheKey(body: Record<string, unknown>): string {
    const { query, variables } = body;
    return JSON.stringify({ query, variables });
}

const responseCache = new Map<string, { data: unknown; timestamp: number }>();

function getCachedResponse(key: string): unknown | null {
    const cached = responseCache.get(key);
    if (!cached) return null;
    
    const isExpired = Date.now() - cached.timestamp > CACHE_TTL_SECONDS * 1000;
    if (isExpired) {
        responseCache.delete(key);
        return null;
    }
    return cached.data;
}

function setCachedResponse(key: string, data: unknown): void {
    if (responseCache.size > 1000) {
        const oldestKey = responseCache.keys().next().value;
        if (oldestKey) responseCache.delete(oldestKey);
    }
    responseCache.set(key, { data, timestamp: Date.now() });
}

export async function POST(request: NextRequest) {
    try {
        const origin = request.headers.get('origin');
        const referer = request.headers.get('referer');
        
        const isValidRequest = isValidOrigin(origin) || 
            (referer && ALLOWED_ORIGINS.some(allowed => referer.startsWith(allowed || '')));
        
        if (!isValidRequest && process.env.NODE_ENV === 'production') {
            return NextResponse.json(
                { error: 'Forbidden' },
                { status: 403 }
            );
        }

        const body = await request.json();
        
        const cacheKey = createCacheKey(body);
        const cachedData = getCachedResponse(cacheKey);
        if (cachedData) {
            return NextResponse.json(cachedData, {
                headers: {
                    'X-Cache': 'HIT',
                    'Cache-Control': `public, s-maxage=${CACHE_TTL_SECONDS}, stale-while-revalidate=60`,
                },
            });
        }

        const response = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL!, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_WORDPRESS_AUTH_REFRESH_TOKEN}`,
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Accept': 'application/json',
                'Origin': 'https://dev01.thnkandgrow.com',
                'Referer': 'https://dev01.thnkandgrow.com',
            },
            body: JSON.stringify(body),
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('GraphQL API error:', {
                status: response.status,
                statusText: response.statusText,
                data
            });
            return NextResponse.json(
                { error: 'GraphQL request failed', details: data },
                { status: response.status }
            );
        }

        setCachedResponse(cacheKey, data);

        return NextResponse.json(data, {
            headers: {
                'X-Cache': 'MISS',
                'Cache-Control': `public, s-maxage=${CACHE_TTL_SECONDS}, stale-while-revalidate=60`,
            },
        });
    } catch (error) {
        console.error('GraphQL proxy error:', error);
        return NextResponse.json(
            { error: 'Internal server error', message: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}
