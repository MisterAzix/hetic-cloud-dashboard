import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: [`/`],
};

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }
}
