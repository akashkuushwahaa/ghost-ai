import { SignUp } from "@clerk/nextjs"

import { AuthPageShell } from "@/components/auth/auth-page-shell"
import { authRoutes, clerkAppearance } from "@/lib/clerk"

export default function SignUpPage() {
  return (
    <AuthPageShell
      title="Create your workspace"
      tagline="Start with a clean editor shell and keep your projects organized."
    >
      <SignUp
        appearance={clerkAppearance}
        routing="path"
        path={authRoutes.signUp}
        signInUrl={authRoutes.signIn}
        fallbackRedirectUrl={authRoutes.afterSignUp}
      />
    </AuthPageShell>
  )
}
