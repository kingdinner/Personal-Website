"use client"
import { motion } from "framer-motion"
import { experiences } from "@/data/content"

export function Experience() {
  return (
    <section
      className="w-full border-b border-white/[0.06] bg-surface-container-lowest px-6 py-24"
      id="experience"
    >
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="max-w-3xl space-y-2">
          <div className="text-xs font-semibold tracking-wider text-primary uppercase">
            Professional Track Record
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Career Experience
          </h2>
          <p className="text-sm text-slate-400 sm:text-base">
            Role-by-role job descriptions — what I owned and delivered across airline payments,
            enterprise cloud, and SaaS platforms.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((role, index) => (
            <motion.div
              key={role.company}
              className={`flex flex-col justify-between gap-6 rounded-2xl border bg-surface-container p-6 transition-all sm:p-8 md:flex-row md:items-start ${
                role.current
                  ? "border-white/[0.08] hover:border-blue-500/30"
                  : "border-white/[0.08] hover:border-white/[0.15]"
              }`}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="max-w-2xl space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-display text-xl font-bold text-white">{role.company}</span>
                </div>
                <div
                  className={`text-sm font-semibold ${role.current ? "text-sky-400" : "text-slate-300"}`}
                >
                  {role.role}
                </div>
                <ul className="space-y-2 pt-1 text-sm leading-relaxed text-slate-300">
                  {role.duties.map((duty) => (
                    <li key={duty} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
                      <span>{duty}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-1 text-xs text-slate-400">
                  {role.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-surface-container-high px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="shrink-0 text-left md:text-right">
                <div className="text-sm font-semibold text-white">{role.period}</div>
                <div className="mt-1 text-xs text-slate-400">{role.location}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
