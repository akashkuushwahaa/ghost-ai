"use client"

import { useState } from "react"
import { Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ProjectSidebarProps = {
  isOpen: boolean
  onClose: () => void
  className?: string
}

function EmptyProjectState({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center text-center text-base font-normal text-copy-muted">
      {label}
    </div>
  )
}

function ProjectSidebar({ isOpen, onClose, className }: ProjectSidebarProps) {
  const [activeTab, setActiveTab] = useState<"my-projects" | "shared">(
    "my-projects"
  )

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-50 flex h-dvh w-[min(25rem,100vw)] flex-col overflow-hidden border-r border-surface-border bg-surface font-sans text-copy-primary shadow-none transition-transform duration-200 ease-out",
        isOpen ? "translate-x-0" : "-translate-x-full",
        className
      )}
      aria-hidden={!isOpen}
    >
      <div className="flex h-[4.25rem] shrink-0 items-center justify-between border-b border-surface-border px-5">
        <h2 className="text-lg font-medium leading-none text-copy-primary">
          Projects
        </h2>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          aria-label="Close project sidebar"
          className="size-8 rounded-xl text-copy-secondary hover:bg-subtle hover:text-copy-primary"
          onClick={onClose}
        >
          <X className="size-5" />
        </Button>
      </div>

      <div className="flex min-h-0 flex-1 flex-col px-4 py-4">
        <div
          className="grid h-11 w-full shrink-0 grid-cols-2 rounded-2xl bg-subtle p-1 text-copy-muted"
          role="tablist"
          aria-label="Project filters"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "my-projects"}
            className={cn(
              "h-full min-w-0 rounded-xl px-0 text-center text-base font-medium transition-colors",
              activeTab === "my-projects"
                ? "bg-base text-copy-primary"
                : "text-copy-muted hover:text-copy-secondary"
            )}
            onClick={() => setActiveTab("my-projects")}
          >
            My Projects
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "shared"}
            className={cn(
              "h-full min-w-0 rounded-xl px-0 text-center text-base font-medium transition-colors",
              activeTab === "shared"
                ? "bg-base text-copy-primary"
                : "text-copy-muted hover:text-copy-secondary"
            )}
            onClick={() => setActiveTab("shared")}
          >
            Shared
          </button>
        </div>

        <div className="relative min-h-0 flex-1">
          <EmptyProjectState
            label={
              activeTab === "my-projects"
                ? "No projects yet."
                : "No shared projects yet."
            }
          />
        </div>
      </div>

      <div className="relative border-t border-surface-border px-4 pb-4 pt-5">
        <div className="absolute -top-px left-7 flex size-13 -translate-y-1/2 items-center justify-center rounded-full border border-brand/20 bg-accent-dim">
          <div className="flex size-11 items-center justify-center rounded-full border border-surface-border-subtle bg-elevated text-xl font-medium leading-none text-copy-primary">
            N
          </div>
        </div>
        <Button
          type="button"
          className="h-11 w-full rounded-xl bg-brand pl-14 text-base font-medium text-[var(--bg-base)] hover:bg-brand/90"
        >
          <Plus data-icon="inline-start" />
          New Project
        </Button>
      </div>
    </aside>
  )
}

export { ProjectSidebar }
