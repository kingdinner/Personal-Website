"use client"
import { ArrowRight, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { profile } from "@/data/content"

const links = [
  { href: "#overview", label: "Overview" },
  { href: "#architecture", label: "Architecture" },
  { href: "#experience", label: "Experience" },
  { href: "#competencies", label: "Competencies" },
  { href: "#credentials", label: "Credentials" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 border-b border-white/[0.08] bg-[#0a0e16]/80 backdrop-blur-xl transition-shadow ${
        scrolled ? "shadow-lg shadow-black/20" : ""
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6">
        <a className="group flex items-center gap-3.5" href="#overview">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-primary-container to-primary text-white shadow-lg shadow-primary-container/20 ring-1 ring-white/20 transition-all group-hover:scale-105">
            <span className="font-display text-base font-bold tracking-tight">{profile.initials}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-base leading-tight font-bold tracking-tight text-white transition-colors group-hover:text-primary">
              {profile.name}
            </span>
            <span className="text-xs font-medium tracking-normal text-on-surface-variant">
              Software Engineer & Architect
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-1.5 text-sm font-medium text-on-surface-variant md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              className="rounded-lg px-4 py-2 transition-all hover:bg-white/[0.06] hover:text-white"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            className="inline-flex items-center gap-2 rounded-lg bg-primary-container px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/20 ring-1 ring-white/20 transition-all hover:bg-blue-600"
            href="#contact"
          >
            <span>Get in Touch</span>
            <ArrowRight className="h-4 w-4" />
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-lg border border-white/[0.08] p-2 text-slate-300 md:hidden"
            onClick={() => setOpen((v) => !v)}
            type="button"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/[0.08] bg-surface-container-lowest px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-1 text-sm font-medium text-on-surface-variant">
            {links.map((link) => (
              <a
                key={link.href}
                className="rounded-lg px-3 py-2.5 hover:bg-white/[0.06] hover:text-white"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
