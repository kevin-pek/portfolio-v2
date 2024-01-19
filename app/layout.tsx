import type { Metadata } from "next"
import "./globals.css"
import React from "react"
import { Analytics } from "@vercel/analytics/react"
import { GeistSans } from "geist/font/sans"

export const metadata: Metadata = {
  title: "Kevin Pek's Website",
  description: "Kevin's personal website and portfolio.",
  keywords: ["software engineer", "machine learning", "NUS", "computer science", "data science", "statistics", "math", "react", "nextjs", "tailwindcss", "singapore"],
  manifest: "manifest.json",
  openGraph: {
    images: "/favicon-32x32.png"
  },
  metadataBase: new URL("https://kevinpek.com")
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </head>
      <body className={GeistSans.className}>{children}</body>
      <Analytics />
    </html>
  )
}
