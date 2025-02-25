import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isBlogOnlyMode = process.env.NEXT_PUBLIC_BLOG_ONLY_MODE === 'true'
  const { pathname } = request.nextUrl
  const disabledPaths = ['/', '/about', '/contact', '/projects']

  // Early return for non-blog-only mode
  if (!isBlogOnlyMode) {
    return NextResponse.next()
  }

  // Check if current path is in disabled paths
  if (disabledPaths.some(path => pathname === path || pathname === `${path}/`)) {
    return NextResponse.redirect(new URL('/blog', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match root and specific paths
    '/',
    '/about',
    '/about/',
    '/contact',
    '/contact/',
    '/projects',
    '/projects/'
  ]
}
