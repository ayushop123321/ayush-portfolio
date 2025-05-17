import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using async operations
export function middleware(request: NextRequest) {
  const session = request.cookies.get('admin-session')?.value;
  const isAdminPage = request.nextUrl.pathname.startsWith('/admin');
  const isLoginPage = request.nextUrl.pathname === '/admin/login';

  // If it's not an admin page, just proceed
  if (!isAdminPage) {
    return NextResponse.next();
  }

  // If trying to access admin pages without a session, redirect to login
  if (!session && !isLoginPage) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // If user has a session but tries to access login page, redirect to dashboard
  if (session && isLoginPage) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Matcher ignoring `/_next/static` and `/favicon.ico`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}; 