import { dark } from "@clerk/ui/themes"

const signInUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL || "/sign-in"
const signUpUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL || "/sign-up"
const afterSignInUrl =
  process.env.NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL || "/editor"
const afterSignUpUrl =
  process.env.NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL || "/editor"

const clerkAppearance = {
  theme: dark,
  variables: {
    colorBackground: "var(--background)",
    colorForeground: "var(--foreground)",
    colorPrimary: "var(--primary)",
    colorPrimaryForeground: "var(--primary-foreground)",
    colorInputBackground: "var(--background)",
    colorInputText: "var(--foreground)",
    colorNeutral: "var(--muted)",
    colorDanger: "var(--destructive)",
    borderRadius: "var(--radius)",
    fontFamily: "var(--font-geist-sans)",
  },
  elements: {
    cardBox: "shadow-none",
    card: "border border-border bg-card text-card-foreground shadow-none",
    headerTitle: "text-foreground",
    headerSubtitle: "text-muted-foreground",
    socialButtonsBlockButton:
      "border-border bg-background text-foreground hover:bg-muted",
    formButtonPrimary:
      "bg-primary text-primary-foreground hover:bg-primary/80",
    footerActionLink: "text-primary hover:text-primary/80",
  },
}

const authRoutes = {
  signIn: signInUrl,
  signUp: signUpUrl,
  afterSignIn: afterSignInUrl,
  afterSignUp: afterSignUpUrl,
}

export { authRoutes, clerkAppearance }
