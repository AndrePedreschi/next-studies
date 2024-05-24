//import { isAuthenticated } from "@/Utils/Auth"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const protectedRoutes = ["/dashboard"]
const publicRoutes = ["/login", "/signup", "/"]

export default function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)
  
  
  /* let user = typeof window !== "undefined" ? window.localStorage.getItem("user") : false
  console.log(user);
  user = JSON.parse(user!).auth
  
  if (!user) {
    user = false
  } */
  
  if (isProtectedRoute) {
    const absoluteURL = new URL("/login", req.nextUrl.origin)
    return NextResponse.redirect(absoluteURL.toString())
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
}