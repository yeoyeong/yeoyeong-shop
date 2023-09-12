import type { NextRequest, NextFetchEvent } from "next/server";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const secret = process.env.SECRET;

// export async function middleware(req: NextRequest, event: NextFetchEvent) {
//   const accessToken = req.headers.get("authorization");
//   const { pathname } = req.nextUrl;

//   if (pathname.startsWith("/login")) {
//     if (!accessToken) {
//       return NextResponse.redirect(new URL("/", req.url));
//     }
//   }
// }

export { default } from "next-auth/middleware";
export const config = {
  matcher: ["/user/:path*"],
};
