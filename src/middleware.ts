
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Dashboard routes are not localized
  if (pathname === "/dashboard") {
    return NextResponse.redirect(
      new URL("/dashboard/users", request.url)
    );
  }

  if (pathname.startsWith("/dashboard/")) {
    return NextResponse.next();
  }

  // Admin login is not localized
  if (pathname === "/admin-login") {
    return NextResponse.next();
  }

  // Apply next-intl to all other routes
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
  ],
};
