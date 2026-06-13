import type { ReactNode } from "react"

type AuthPageShellProps = {
  title: string
  tagline: string
  children: ReactNode
}

const features = [
  "Draft and refine long-form AI workflows.",
  "Keep project context close to the editor.",
  "Move from idea to structured output quickly.",
]

function AuthPageShell({ title, tagline, children }: AuthPageShellProps) {
  return (
    <main className="grid min-h-[calc(100vh-3rem)] bg-background text-foreground lg:grid-cols-[minmax(0,0.85fr)_minmax(24rem,1fr)]">
      <section className="hidden border-r border-border px-10 py-10 lg:flex lg:flex-col lg:justify-between">
        <div className="space-y-10">
          <div className="space-y-2">
            <p className="text-sm font-medium text-foreground">ghost AI</p>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">
              A focused workspace for building, editing, and organizing AI-assisted projects.
            </p>
          </div>

          <div className="space-y-5">
            <div className="space-y-2">
              <h1 className="text-2xl font-medium tracking-normal text-foreground">
                {title}
              </h1>
              <p className="max-w-sm text-sm leading-6 text-muted-foreground">
                {tagline}
              </p>
            </div>

            <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="flex min-h-[calc(100vh-3rem)] items-center justify-center px-4 py-8">
        {children}
      </section>
    </main>
  )
}

export { AuthPageShell }
