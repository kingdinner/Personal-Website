"use client"
import { motion } from "framer-motion"
import { Cloud, History, Plane, Wallet } from "lucide-react"
import { impactMetrics } from "@/data/content"

const icons = {
  history: History,
  plane: Plane,
  wallet: Wallet,
  cloud: Cloud,
}

const accents: Record<string, { icon: string; border: string; value?: string }> = {
  blue: {
    icon: "bg-blue-500/10 text-primary",
    border: "hover:border-blue-500/30",
  },
  emerald: {
    icon: "bg-emerald-500/10 text-emerald-400",
    border: "hover:border-emerald-500/30",
    value: "text-emerald-400",
  },
  indigo: {
    icon: "bg-indigo-500/10 text-indigo-400",
    border: "hover:border-indigo-500/30",
  },
  sky: {
    icon: "bg-sky-500/10 text-sky-400",
    border: "hover:border-sky-500/30",
    value: "text-sky-400",
  },
}

export function Metrics() {
  return (
    <section className="w-full border-b border-white/[0.06] bg-surface-container-lowest px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impactMetrics.map((metric, index) => {
            const Icon = icons[metric.icon]
            const accent = accents[metric.accent]
            return (
              <motion.div
                key={metric.label}
                className={`rounded-2xl border border-white/[0.08] bg-surface-container p-6 transition-all ${accent.border}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div
                  className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${accent.icon}`}
                >
                  <Icon className="h-[22px] w-[22px]" />
                </div>
                <div
                  className={`font-display text-4xl font-bold tracking-tight ${accent.value ?? "text-white"}`}
                >
                  {metric.value}
                </div>
                <div className="mt-1 text-sm font-semibold text-slate-200">{metric.label}</div>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">{metric.detail}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
