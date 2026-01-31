'use client'
import { ThemeProvider as NextThemeProvider } from "next-themes"

function ThemeProvider({children,...props}) {
  return <NextThemeProvider {...props}>
      {children}
    </NextThemeProvider>
  
}

export default ThemeProvider