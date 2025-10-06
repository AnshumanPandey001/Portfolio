"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet"

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 flex-nowrap"
      >
        <Link href="/" className="font-mono text-sm font-semibold text-primary whitespace-nowrap shrink-0">
          {"<"}Anshuman.dev{"/>"}
          <span className="sr-only">Go to home</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex md:gap-2">
          {links.map((l) => {
            const active = pathname === l.href
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm transition-colors",
                    active
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {l.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="rounded-md p-2 text-foreground hover:bg-accent hover:text-accent-foreground"
              >
                {/* Simple inline hamburger icon for accessibility and no extra deps */}
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="block">
                  <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </SheetTrigger>
           <SheetContent
  side="left"
  className="w-72 bg-[#0b1620] text-white flex flex-col items-center p-6"
>
  {/* Profile Section */}
  <div className="flex flex-col items-center text-center mt-6">
    {/* Profile image */}
    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-600">
      <img
        src="https://github.com/AnshumanPandey001/Portfolio/blob/main/public/developer-portrait.jpg?raw=true"
        alt="Profile photo"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Name */}
    <h2 className="mt-4 text-lg font-semibold">Anshuman Pandey</h2>

    {/* Social media icons */}
    <div className="flex gap-4 mt-3">
      <a href="https://x.com/exploreanshu001" aria-label="X" className="hover:text-blue-400">
        <i className="fa-brands fa-x-twitter text-lg"></i>
      </a>
      <a href="https://github.com/AnshumanPandey001" aria-label="Github" className="hover:text-blue-400">
        <i className="fa-brands fa-github text-lg"></i>
      </a>
      <a href="https://www.linkedin.com/in/anshuman-pandey-bb6ab5243/" aria-label="LinkedIn" className="hover:text-blue-500">
        <i className="fa-brands fa-linkedin text-lg"></i>
      </a>
      <a href="https://www.instagram.com/exploreanshu.jsx/" aria-label="Instagram" className="hover:text-pink-400">
        <i className="fa-brands fa-instagram text-lg"></i>
      </a>
      
    </div>
  </div>

  {/* Navigation Links */}
  <nav aria-label="Mobile" className="mt-10 w-full">
    <ul className="flex flex-col gap-3 w-full">
      {links.map((l) => {
        const active = pathname === l.href
        return (
          <SheetClose asChild key={l.href}>
            <Link
              href={l.href}
              className={cn(
                "flex items-center gap-3 px-5 py-2 rounded-lg transition-all duration-200",
                active
                  ? "bg-blue-600 text-white font-medium"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              )}
              aria-current={active ? "page" : undefined}
            >
              {/* Icons for each link */}
              {l.label === "Home" && <i className="fa-solid fa-house"></i>}
              {l.label === "Work" && <i className="fa-solid fa-briefcase"></i>}
              {l.label === "About" && <i className="fa-solid fa-user"></i>}
              {l.label === "Resume" && <i className="fa-solid fa-file-alt"></i>}
              {l.label}
            </Link>
          </SheetClose>
        )
      })}
    </ul>
  </nav>
</SheetContent>

          </Sheet>
        </div>
      </nav>
    </header>
  )
}
