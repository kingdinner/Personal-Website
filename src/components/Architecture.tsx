"use client"
import { motion } from "framer-motion"
import {
  ArrowDown,
  CheckCircle2,
  GitBranch,
  PlaneTakeoff,
  Share2,
  Shield,
  Split,
  Zap,
} from "lucide-react"
import type { ReactNode } from "react"
import { caseStudies } from "@/data/content"

export function Architecture() {
  const { flagship, secondary } = caseStudies

  return (
    <section
      className="w-full border-b border-white/[0.06] bg-surface px-6 py-24"
      id="architecture"
    >
      <div className="mx-auto max-w-7xl space-y-16">
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold tracking-wider text-primary uppercase">
            Engineering Architecture
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Flagship Production Deployments
          </h2>
          <p className="text-base leading-relaxed text-slate-400">
            Real-world airline payment integrations, serverless enterprise pipelines, and SaaS
            platforms delivered across aviation and cloud programs.
          </p>
        </div>

        <motion.div
          className="overflow-hidden rounded-2xl border border-white/[0.08] bg-surface-container-low shadow-xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="flex flex-col justify-between gap-8 p-8 sm:p-10 lg:col-span-7">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  {flagship.tags.map((tag, i) => (
                    <span
                      key={tag}
                      className={
                        i === 0
                          ? "rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-primary"
                          : "rounded-full bg-white/[0.05] px-3 py-1 text-xs font-medium text-slate-300"
                      }
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-2xl font-bold text-white">{flagship.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300 sm:text-base">{flagship.body}</p>
                <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
                  {flagship.highlights.map((item, i) => {
                    const Icon = [Zap, Shield, CheckCircle2, Share2][i] ?? Zap
                    return (
                      <div
                        key={item.title}
                        className="rounded-xl border border-white/[0.06] bg-surface-container p-3.5"
                      >
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                          <Icon className="h-4 w-4 text-primary" />
                          {item.title}
                        </div>
                        <p className="mt-1 text-xs text-slate-400">{item.detail}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 border-t border-white/[0.06] pt-2">
                {flagship.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-white/[0.05] px-2.5 py-1 text-xs font-medium text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between border-t border-white/[0.08] bg-surface-container-lowest p-8 lg:col-span-5 lg:border-t-0 lg:border-l">
              <div>
                <div className="mb-6 flex items-center justify-between text-xs font-semibold tracking-wider text-slate-400 uppercase">
                  <span>System Interaction Flow</span>
                  <span className="flex items-center gap-1 text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Live Pipeline
                  </span>
                </div>
                <div className="space-y-3">
                  <FlowRow
                    icon={<PlaneTakeoff className="h-[18px] w-[18px]" />}
                    title="Passenger Booking Engine"
                    subtitle="Seat selection & fare lock"
                    meta="HTTP/2"
                    tone="default"
                  />
                  <Arrow />
                  <FlowRow
                    icon={<Shield className="h-[18px] w-[18px]" />}
                    title="Apigee API Gateway"
                    subtitle="Secure routing & policies"
                    meta="HMAC OK"
                    tone="active"
                  />
                  <Arrow />
                  <FlowRow
                    icon={<GitBranch className="h-[18px] w-[18px]" />}
                    title="SkyPay Settlement Hub"
                    subtitle="Multi-wallet transaction router"
                    meta="Node.js"
                    tone="indigo"
                  />
                  <div className="flex justify-center text-slate-600">
                    <Split className="h-4 w-4" />
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="rounded-lg border border-white/[0.06] bg-surface-container p-3 text-center">
                      <div className="text-xs font-medium text-slate-200">Navitaire PSS</div>
                      <div className="mt-0.5 text-[10px] text-emerald-400">PNR Ticket Issued</div>
                    </div>
                    <div className="rounded-lg border border-white/[0.06] bg-surface-container p-3 text-center">
                      <div className="text-xs font-medium text-slate-200">Wallet Webhook</div>
                      <div className="mt-0.5 text-[10px] text-emerald-400">Instant Settlement</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-4 text-xs text-slate-400">
                <span>Data Integrity</span>
                <span className="font-medium text-slate-300">Scheduled Payment Audits</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {secondary.map((study, index) => (
            <motion.div
              key={study.title}
              className="flex flex-col justify-between gap-6 rounded-2xl border border-white/[0.08] bg-surface-container-low p-8 transition-all hover:border-white/[0.15] sm:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`rounded-full bg-white/[0.05] px-3 py-1 text-xs font-semibold ${
                      index === 0
                        ? "text-primary"
                        : index === 1
                          ? "text-sky-400"
                          : "text-emerald-400"
                    }`}
                  >
                    {study.badge}
                  </span>
                  <span className="text-xs text-slate-400">{study.org}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white">{study.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{study.body}</p>
                <ul className="space-y-2.5 pt-2 text-xs text-slate-300 sm:text-sm">
                  {study.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-[18px] w-[18px] shrink-0 text-emerald-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 border-t border-white/[0.06] pt-4">
                {study.tech.map((t) => (
                  <span key={t} className="rounded-md bg-white/[0.05] px-2.5 py-1 text-xs text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Arrow() {
  return (
    <div className="flex justify-center text-slate-600">
      <ArrowDown className="h-4 w-4" />
    </div>
  )
}

function FlowRow({
  icon,
  title,
  subtitle,
  meta,
  tone,
}: {
  icon: ReactNode
  title: string
  subtitle: string
  meta: string
  tone: "default" | "active" | "indigo"
}) {
  const styles =
    tone === "active"
      ? "border-blue-500/30 bg-surface-container-high shadow-md"
      : "border-white/[0.08] bg-surface-container"

  const iconBox =
    tone === "active"
      ? "bg-blue-500 text-white"
      : tone === "indigo"
        ? "bg-indigo-500/10 text-indigo-400"
        : "bg-blue-500/10 text-primary"

  const metaColor =
    tone === "active" ? "text-emerald-400" : tone === "indigo" ? "text-indigo-300" : "text-slate-400"

  return (
    <div className={`flex items-center justify-between rounded-xl border p-3.5 ${styles}`}>
      <div className="flex items-center gap-3">
        <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${iconBox}`}>{icon}</div>
        <div>
          <div className="text-xs font-semibold text-white">{title}</div>
          <div className={`text-[11px] ${tone === "active" ? "text-blue-200" : "text-slate-400"}`}>
            {subtitle}
          </div>
        </div>
      </div>
      <span className={`font-mono text-[11px] ${metaColor}`}>{meta}</span>
    </div>
  )
}
