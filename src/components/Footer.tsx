import { profile } from "@/data/content"

export function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#070a10] px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">
            {profile.initials}
          </div>
          <div>
            <span className="font-display text-sm font-bold text-white">{profile.name}</span>
            <span className="ml-2 text-xs text-slate-400">
              — Software Engineer | Airline & Payment Systems
            </span>
          </div>
        </div>
        <div className="text-xs text-slate-400">
          © 2026 {profile.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
