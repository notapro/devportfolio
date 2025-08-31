"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="h-10 w-10 rounded-xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950" />
    )
  }

  const handleToggle = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <button
      onClick={handleToggle}
      className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200/50 bg-white/90 backdrop-blur-sm transition-all duration-300 hover:bg-primary-50 dark:border-neutral-700/50 dark:bg-neutral-900/90 dark:hover:bg-primary-900/20 shadow-soft hover:shadow-medium hover:border-primary-200 dark:hover:border-primary-700"
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`}
      title={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 text-accent-500" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 text-primary-400" />
    </button>
  )
}