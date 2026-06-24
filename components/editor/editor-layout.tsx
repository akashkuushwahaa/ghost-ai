"use client"

import { useState, type ReactNode } from "react"
import { usePathname } from "next/navigation"

import { EditorNavbar } from "@/components/editor/editor-navbar"
import { ProjectSidebar } from "@/components/editor/project-sidebar"
import { authRoutes } from "@/lib/clerk"

type EditorLayoutProps = {
  children: ReactNode
}

function EditorLayout({ children }: EditorLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const pathname = usePathname()
  const isAuthRoute =
    pathname === authRoutes.signIn ||
    pathname.startsWith(`${authRoutes.signIn}/`) ||
    pathname === authRoutes.signUp ||
    pathname.startsWith(`${authRoutes.signUp}/`)

  if (isAuthRoute) {
    return children
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <EditorNavbar
        isSidebarOpen={isSidebarOpen}
        onSidebarToggle={() => setIsSidebarOpen((isOpen) => !isOpen)}
      />
      <ProjectSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <div className="pt-12">{children}</div>
    </div>
  )
}

export { EditorLayout }
