import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Suspense } from "react"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Anshuman-Portfolio",
  description: "Created by  Anshuman",
  // generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* 👇 Paste this inside <head> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <SmoothScrollProvider>
            <div className="min-h-dvh bg-background">
              <Navbar />
              {children}
              <Footer />
            </div>
          </SmoothScrollProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
