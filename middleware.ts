import { NextResponse } from "next/server";

// Run middleware for every request on site
export const config = {
  matcher: "/:path*",
};

export function middleware() {
  const res = NextResponse.next();
  res.headers.delete("Link");   // ← CSS preload header removed
  return res;
}
