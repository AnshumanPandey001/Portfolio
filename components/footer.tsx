"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-16 border-t border-border bg-background text-foreground">
      {/* Top CTA band */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-8 md:py-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-semibold text-pretty">Let’s build something great together</h2>
            <p className="text-sm md:text-base text-muted-foreground text-pretty">
              I’m available for freelance and full‑time opportunities.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild>
              <a href="mailto:anshumanpandey8433@gmail.com" aria-label="Email me">
                Get in touch
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/work">View work</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        

        {/* Site navigation */}
        <nav aria-label="Footer navigation" className="space-y-3">
          <h4 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">Site</h4>
          <ul className="grid gap-2 text-sm">
            <li>
              <Link className="hover:underline focus:outline-none focus-visible:underline" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:underline focus:outline-none focus-visible:underline" href="/work">
                Work
              </Link>
            </li>
            <li>
              <Link className="hover:underline focus:outline-none focus-visible:underline" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:underline focus:outline-none focus-visible:underline" href="/resume">
                Resume
              </Link>
            </li>
          </ul>
        </nav>

        {/* Projects/Resources (examples) */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">Projects</h4>
          <ul className="grid gap-2 text-sm">
            <li>
              <Link href="#" className="hover:underline">
                Portfolio Website
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Crowdfunding Platform-Final Year Project
              </Link>
            </li>
            <li>
              <Link href="https://anshumanpandey001.github.io/Expense-Tracker-App/" className="hover:underline">
                Expense-Tracker-App
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">Contact</h4>
          <ul className="grid gap-2 text-sm">
            <li>
              <a
                className="hover:underline focus-visible:underline"
                href="mailto:anshumanpandey8433@gmail.com"
                aria-label="Email"
              >
                anshumanpandey8433@gmail.com
              </a>
            </li>
            <li className="flex flex-wrap items-center gap-2">
              <Button asChild size="sm" variant="secondary" className="px-3">
                <a href="https://github.com/AnshumanPandey001" target="_blank" rel="noreferrer" aria-label="GitHub">
                  GitHub
                </a>
              </Button>
              <Button asChild size="sm" variant="secondary" className="px-3">
                <a href="https://www.linkedin.com/in/anshuman-pandey-bb6ab5243/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  LinkedIn
                </a>
              </Button>
              <Button asChild size="sm" variant="secondary" className="px-3">
                <a href="https://x.com/exploreanshu001" target="_blank" rel="noreferrer" aria-label="X">
                  X
                </a>
              </Button>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">© {year} Anshuman. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <li>
              <Link href="/privacy" className="hover:underline focus-visible:underline">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:underline focus-visible:underline">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/sitemap.xml" className="hover:underline focus-visible:underline">
                Sitemap
              </Link>
            </li>
            <li className="ms-0 md:ms-4">
              <a href="#top" className="hover:underline focus-visible:underline">
                Back to top
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
