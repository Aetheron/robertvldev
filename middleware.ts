"use client"
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  if (url.pathname === "/portfolio/sparrow-health") {
    url.pathname = "/portfolio/php"
    return NextResponse.redirect(url)
  }
}
