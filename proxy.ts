import { NextResponse, type NextRequest } from "next/server";
import { LOCALES, type Locale } from "./i18n/config";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segment = pathname.split("/")[1] ?? "";

  if (LOCALES.includes(segment as Locale)) {
    const response = NextResponse.redirect(new URL("/", request.url));
    response.cookies.set("NEXT_LOCALE", segment, { path: "/" });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:lang"],
};