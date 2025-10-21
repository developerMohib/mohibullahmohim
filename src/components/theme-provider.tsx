"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch by not rendering until mounted on client
  if (!mounted) {
    return <div className={props.attribute === "class" ? "" : undefined}>{children}</div>
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}