"use client"

import { UserButton } from "@clerk/nextjs"
import { PanelLeftClose, PanelLeftOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type EditorNavbarProps = {
  isSidebarOpen: boolean
  onSidebarToggle: () => void
  className?: string
}

function EditorNavbar({
  isSidebarOpen,
  onSidebarToggle,
  className,
}: EditorNavbarProps) {
  const SidebarIcon = isSidebarOpen ? PanelLeftClose : PanelLeftOpen

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 flex h-12 items-center border-b border-border bg-background/95 px-3 backdrop-blur",
        className
      )}
    >
      <div className="flex min-w-0 flex-1 items-center justify-start">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={isSidebarOpen ? "Close project sidebar" : "Open project sidebar"}
          aria-pressed={isSidebarOpen}
          onClick={onSidebarToggle}
        >
          <SidebarIcon />
        </Button>
      </div>
      <div className="flex min-w-0 flex-1 items-center justify-center" />
      <div className="flex min-w-0 flex-1 items-center justify-end">
        <UserButton />
      </div>
    </header>
  )
}

export { EditorNavbar }
