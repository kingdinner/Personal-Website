import { Code2, GraduationCap, ShieldCheck } from "lucide-react"
import { credentials } from "@/data/content"

const icons = {
  shield: ShieldCheck,
  code: Code2,
  school: GraduationCap,
}

const accents: Record<string, { box: string; label: string; border: string }> = {
  blue: {
    box: "bg-blue-500/10 text-primary",
    label: "text-primary",
    border: "hover:border-blue-500/30",
  },
  indigo: {
    box: "bg-indigo-500/10 text-indigo-400",
    label: "text-indigo-400",
    border: "hover:border-indigo-500/30",
  },
  sky: {
    box: "bg-sky-500/10 text-sky-400",
    label: "text-sky-400",
    border: "hover:border-sky-500/30",
  },
}

export function Credentials() {
  return (
    <section
      className="w-full border-b border-white/[0.06] bg-surface-container-lowest px-6 py-24"
      id="credentials"
    >
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="max-w-3xl space-y-2">
          <div className="text-xs font-semibold tracking-wider text-primary uppercase">
            Formal Qualifications
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Education & Certifications
          </h2>
          <p className="text-sm text-slate-400 sm:text-base">
            Verified academic foundation and professional cloud industry accreditations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {credentials.map((cred) => {
            const Icon = icons[cred.icon]
            const accent = accents[cred.accent]
            return (
              <div
                key={cred.title}
                className={`flex flex-col justify-between gap-6 rounded-2xl border border-white/[0.08] bg-surface-container p-6 transition-all ${accent.border}`}
              >
                <div className="space-y-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${accent.box}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className={`text-xs font-semibold ${accent.label}`}>{cred.org}</div>
                    <h3 className="font-display mt-1 text-lg font-bold text-white">{cred.title}</h3>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-400">{cred.detail}</p>
                </div>
                <div className="flex items-center justify-between border-t border-white/[0.06] pt-4 text-xs font-medium text-slate-300">
                  <span className="flex items-center gap-1.5">
                    {cred.accent === "blue" && (
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    )}
                    {cred.status.split(" · ")[0]}
                  </span>
                  <span className="text-slate-400">{cred.status.includes("·") ? cred.status.split(" · ")[1] : cred.status}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
