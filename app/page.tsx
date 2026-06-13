import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

import { authRoutes } from "@/lib/clerk"

export default async function Home() {
  const { userId } = await auth()

  redirect(userId ? authRoutes.afterSignIn : authRoutes.signIn)
}
