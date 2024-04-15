import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const updatedUrl = request.nextUrl.clone();
  updatedUrl.protocol = "https:";
  updatedUrl.host = "www.linkedin.com";
  updatedUrl.port = "";

  return NextResponse.rewrite(updatedUrl);
}
