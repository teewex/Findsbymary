import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This is a simple middleware to protect admin routes
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the path starts with /admin and is not the login page
  if (pathname.startsWith("/admin") && !pathname.includes("/admin/login")) {
    // Check for the admin_authenticated cookie
    const isAuthenticated = request.cookies.has("admin_authenticated")

    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
