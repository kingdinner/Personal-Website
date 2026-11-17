import { Cloud, Code2, Ticket } from "lucide-react"
import { competencies } from "@/data/content"

const icons = {
  ticket: Ticket,
  cloud: Cloud,
  code: Code2,
}

const headerAccents: Record<string, string> = {
  blue: "bg-blue-500/10 text-primary",
  sky: "bg-sky-500/10 text-sky-400",
  indigo: "bg-indigo-500/10 text-indigo-400",
}

const levelStyles: Record<string, string> = {
  primary: "bg-primary/10 text-primary",
  success: "bg-emerald-400/10 text-emerald-400",
  sky: "bg-sky-400/10 text-sky-400",
  indigo: "bg-indigo-500/10 text-indigo-300",
  muted: "bg-white/[0.05] text-slate-400",
}

export function Competencies() {
  return (
    <section
      className="w-full border-b border-white/[0.06] bg-surface px-6 py-24"
      id="competencies"
    >
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="max-w-3xl space-y-2">
          <div className="text-xs font-semibold tracking-wider text-primary uppercase">
            Expertise & Capabilities
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technical Competencies
          </h2>
          <p className="text-sm text-slate-400 sm:text-base">
            Domain expertise across airline reservation architectures, modern cloud platforms, and
            distributed backend systems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {competencies.map((group) => {
            const Icon = icons[group.icon]
            return (
              <div
                key={group.title}
                className="space-y-5 rounded-2xl border border-white/[0.08] bg-surface-container-low p-6"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${headerAccents[group.accent]}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">{group.title}</h3>
                </div>
                <div className="space-y-2.5">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-surface-container p-3"
                    >
                      <span className="text-sm font-medium text-slate-200">{item.name}</span>
                      <span
                        className={`rounded px-2 py-0.5 text-xs font-semibold ${levelStyles[item.tone]}`}
                      >
                        {item.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
