"use client"

import { Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

type ProjectSidebarProps = {
  isOpen: boolean
  onClose: () => void
  className?: string
}

function EmptyProjectState({ label }: { label: string }) {
  return (
    <div className="flex min-h-40 items-center justify-center rounded-lg border border-dashed border-border bg-muted/20 px-4 text-center text-sm text-muted-foreground">
      {label}
    </div>
  )
}

function ProjectSidebar({ isOpen, onClose, className }: ProjectSidebarProps) {
  return (
    <aside
      className={cn(
        "fixed left-3 top-15 z-30 flex h-[calc(100dvh-4.5rem)] w-[min(22rem,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-2xl transition-transform duration-200 ease-out",
        isOpen ? "translate-x-0" : "-translate-x-[calc(100%+1.5rem)]",
        className
      )}
      aria-hidden={!isOpen}
    >
      <div className="flex h-12 shrink-0 items-center justify-between border-b border-border px-4">
        <h2 className="text-sm font-medium">Projects</h2>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          aria-label="Close project sidebar"
          onClick={onClose}
        >
          <X />
        </Button>
      </div>

      <Tabs defaultValue="my-projects" className="min-h-0 flex-1 gap-0 p-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="my-projects">My Projects</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
        </TabsList>
        <TabsContent value="my-projects" className="mt-4">
          <EmptyProjectState label="No projects yet." />
        </TabsContent>
        <TabsContent value="shared" className="mt-4">
          <EmptyProjectState label="No shared projects yet." />
        </TabsContent>
      </Tabs>

      <div className="border-t border-border p-4">
        <Button type="button" className="w-full">
          <Plus data-icon="inline-start" />
          New Project
        </Button>
      </div>
    </aside>
  )
}

export { ProjectSidebar }
