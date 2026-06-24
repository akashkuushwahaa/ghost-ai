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
    colorBackground: "var(--bg-elevated)",
    colorForeground: "var(--text-primary)",
    colorPrimary: "var(--accent-primary)",
    colorPrimaryForeground: "var(--bg-base)",
    colorInputBackground: "var(--bg-subtle)",
    colorInputText: "var(--text-primary)",
    colorNeutral: "var(--text-muted)",
    colorDanger: "var(--state-error)",
    borderRadius: "1rem",
    fontFamily: "var(--font-geist-sans)",
  },
  elements: {
    rootBox: "w-full max-w-[32rem]",
    cardBox:
      "w-full overflow-hidden rounded-3xl border border-surface-border bg-elevated shadow-none",
    card: "bg-elevated text-copy-primary shadow-none",
    headerTitle: "text-2xl font-medium tracking-normal text-copy-primary",
    headerSubtitle: "text-base font-normal text-copy-muted",
    socialButtonsBlockButton:
      "h-12 rounded-xl border-surface-border bg-elevated text-base font-medium text-copy-secondary hover:bg-subtle",
    dividerLine: "bg-surface-border",
    dividerText: "text-sm font-normal text-copy-muted",
    formFieldLabel: "text-base font-medium text-copy-secondary",
    formFieldInput:
      "h-12 rounded-xl border-surface-border bg-subtle text-base font-normal text-copy-primary placeholder:text-copy-muted",
    formButtonPrimary:
      "h-14 rounded-xl bg-brand text-base font-medium text-[var(--bg-base)] hover:bg-brand/90",
    footer: "bg-subtle text-copy-muted",
    footerActionText: "text-base font-normal text-copy-muted",
    footerActionLink: "text-base font-medium text-brand hover:text-brand/80",
    footerPages: "bg-subtle",
    footerPagesLink: "font-medium text-copy-muted",
  },
}

const authRoutes = {
  signIn: signInUrl,
  signUp: signUpUrl,
  afterSignIn: afterSignInUrl,
  afterSignUp: afterSignUpUrl,
}

export { authRoutes, clerkAppearance }
