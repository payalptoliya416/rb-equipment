import { NextResponse } from "next/server";

export function middleware(req: Request) {
  const res = NextResponse.next();
  res.headers.delete("Link"); // removes CSS preload header
  return res;
}
