import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect /dashboard to /dashboard/projects
  if (pathname === "/dashboard") {
    return NextResponse.redirect(new URL("/dashboard/users", request.url));
  }

  // Apply next-intl middleware for all other routes
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Match all paths EXCEPT:
    // - /api, /trpc, /_next, /_vercel, any file, and /dashboard
    "/((?!api|trpc|_next|_vercel|.*\\..*|dashboard).*)",
    // Also match /dashboard specifically for the redirect
    "/dashboard",
  ],
};
