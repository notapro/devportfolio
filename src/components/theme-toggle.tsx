"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="h-10 w-10 rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950" />
    )
  }

  const handleToggle = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <button
      onClick={handleToggle}
      className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white transition-colors hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-900"
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`}
      title={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  )
}