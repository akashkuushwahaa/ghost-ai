import type { ReactNode } from "react"
import { Clock3, FileText, Share2 } from "lucide-react"

type AuthPageShellProps = {
  children: ReactNode
}

const features = [
  {
    icon: Clock3,
    title: "AI Architecture Generation",
    description:
      "Describe your system, AI maps it to nodes and edges on a live canvas.",
  },
  {
    icon: Share2,
    title: "Real-time Collaboration",
    description:
      "Live cursors, presence indicators, and shared node editing across your team.",
  },
  {
    icon: FileText,
    title: "Instant Spec Generation",
    description:
      "Export a complete Markdown technical spec directly from the canvas graph.",
  },
]

function AuthPageShell({ children }: AuthPageShellProps) {
  return (
    <main className="grid min-h-screen bg-base font-sans text-copy-primary lg:grid-cols-2">
      <section className="hidden min-h-screen border-r border-surface-border bg-surface px-12 py-12 lg:flex lg:flex-col lg:justify-between xl:px-16">
        <div className="space-y-28">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-xl bg-brand shadow-[0_0_24px_var(--accent-primary-dim)]" />
            <p className="text-lg font-medium leading-none text-copy-primary">
              Ghost AI
            </p>
          </div>

          <div className="max-w-[44rem] space-y-12">
            <div className="space-y-6">
              <h1 className="max-w-lg text-4xl font-medium leading-tight tracking-normal text-copy-primary">
                Design systems at the speed of thought.
              </h1>
              <p className="max-w-2xl text-lg font-normal leading-8 text-copy-muted">
                Describe your architecture in plain English. Ghost AI maps it to
                a shared canvas your whole team can refine in real time.
              </p>
            </div>

            <ul className="space-y-9">
              {features.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex gap-5">
                  <span className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-xl border border-brand/30 bg-accent-dim text-brand">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="space-y-2">
                    <span className="block text-lg font-medium leading-none text-copy-secondary">
                      {title}
                    </span>
                    <span className="block max-w-2xl text-base font-normal leading-7 text-copy-muted">
                      {description}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-sm font-normal text-copy-faint">
          © 2026 Ghost AI. All rights reserved.
        </p>
      </section>

      <section className="flex min-h-screen items-center justify-center bg-base px-4 py-8 sm:px-8">
        {children}
      </section>
    </main>
  )
}

export { AuthPageShell }
