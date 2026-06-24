import { SignIn } from "@clerk/nextjs"

import { AuthPageShell } from "@/components/auth/auth-page-shell"
import { authRoutes, clerkAppearance } from "@/lib/clerk"

export default function SignInPage() {
  return (
    <AuthPageShell>
      <SignIn
        appearance={clerkAppearance}
        routing="path"
        path={authRoutes.signIn}
        signUpUrl={authRoutes.signUp}
        fallbackRedirectUrl={authRoutes.afterSignIn}
      />
    </AuthPageShell>
  )
}
