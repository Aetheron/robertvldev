import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  if (url.pathname === "/portfolio/sparrow-health") {
    url.pathname = "/portfolio/uofmhealthplan"
    return NextResponse.redirect(url)
  }
  if (url.pathname === "/portfolio/php") {
    url.pathname = "/portfolio/uofmhealthplan"
    return NextResponse.redirect(url)
  }
}
