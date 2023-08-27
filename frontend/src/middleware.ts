// ./frontend/src/middleware.ts

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
    // // If you have one
    if (
        [
            '/manifest.json',
            '/favicon.ico',
            // Your other files in `public`
        ].includes(pathname)
    )
        return;

        // e.g. incoming request is /products
        // The new URL is now /en-US/products
        // return NextResponse.redirect(new URL(`/${pathname}`, request.url));
}

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: ['/((?!_next).*)'],
};