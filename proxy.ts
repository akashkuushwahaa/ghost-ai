import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"

import { authRoutes } from "@/lib/clerk"

const isPublicRoute = createRouteMatcher([
  authRoutes.signIn,
  `${authRoutes.signIn}(.*)`,
  authRoutes.signUp,
  `${authRoutes.signUp}(.*)`,
])

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
}
