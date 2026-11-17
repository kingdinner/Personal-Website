"use client"
import { motion } from "framer-motion"
import { ArrowRight, Building2, Network, Plane, ShieldCheck, TrendingUp, Zap } from "lucide-react"
import { profile } from "@/data/content"

export function Hero() {
  return (
    <section
      className="grid-pattern relative w-full overflow-hidden border-b border-white/[0.06] px-6 py-20 lg:py-28"
      id="overview"
    >
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/2 -right-20 h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
        <motion.div
          className="flex flex-col gap-6 lg:col-span-7"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-sky-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              {profile.availability}
            </span>
            <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-300">
              Enterprise Airline Payment Systems
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="font-display text-4xl leading-[1.12] font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="text-xl leading-snug font-semibold text-slate-200 sm:text-2xl">
              {profile.headline}
            </p>
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {profile.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              className="inline-flex items-center gap-2 rounded-xl bg-primary-container px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-500/25 ring-1 ring-white/20 transition-all hover:-translate-y-0.5 hover:bg-blue-600"
              href="#contact"
            >
              <span>Discuss an Initiative</span>
              <ArrowRight className="h-[18px] w-[18px]" />
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-surface-container-high px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:-translate-y-0.5 hover:bg-surface-container-highest hover:text-white"
              href="#architecture"
            >
              <Network className="h-[18px] w-[18px]" />
              <span>View System Architecture</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/[0.08] pt-6 text-xs font-medium text-slate-400">
            <span className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
              Production Systems in:
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Plane className="h-[15px] w-[15px] text-primary" /> AirAsia
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Network className="h-[15px] w-[15px] text-primary" /> Cebu Pacific
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Building2 className="h-[15px] w-[15px] text-primary" /> Accenture
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="h-[15px] w-[15px] text-emerald-400" /> Payment Integrity
            </span>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="glow-subtle overflow-hidden rounded-2xl border border-white/[0.1] bg-surface-container-low shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/[0.08] bg-surface-container px-5 py-3.5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-slate-700" />
                <span className="h-3 w-3 rounded-full bg-slate-700" />
                <span className="h-3 w-3 rounded-full bg-slate-700" />
                <span className="ml-2 text-xs font-semibold text-slate-300">
                  SkyPay Production Telemetry
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-400">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <span>Active Core</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border-b border-white/[0.06] bg-surface-container-lowest/50 p-6">
              <div className="rounded-xl border border-white/[0.06] bg-surface-container p-4">
                <div className="text-xs font-medium text-slate-400">Payment Rails Live</div>
                <div className="font-display mt-1 text-2xl font-bold text-white">
                  4+ <span className="text-xs font-normal text-slate-400">wallets + cards</span>
                </div>
                <div className="mt-1 flex items-center gap-1 text-[11px] text-emerald-400">
                  <TrendingUp className="h-[13px] w-[13px]" /> GCash · Maya · GrabPay · PayPal
                </div>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-surface-container p-4">
                <div className="text-xs font-medium text-slate-400">Airline Platforms</div>
                <div className="font-display mt-1 text-2xl font-bold text-white">
                  2 <span className="text-xs font-normal text-slate-400">carriers</span>
                </div>
                <div className="mt-1 flex items-center gap-1 text-[11px] text-sky-400">
                  <Zap className="h-[13px] w-[13px]" /> AirAsia · Cebu Pacific
                </div>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-surface-container p-4">
                <div className="text-xs font-medium text-slate-400">Core Stack</div>
                <div className="font-display mt-1 text-2xl font-bold text-emerald-400">Node.js</div>
                <div className="mt-1 text-[11px] text-slate-400">Navitaire · SkyPay · Apigee</div>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-surface-container p-4">
                <div className="text-xs font-medium text-slate-400">Cloud Footprint</div>
                <div className="font-display mt-1 text-2xl font-bold text-sky-400">AWS</div>
                <div className="mt-1 text-[11px] text-slate-400">Lambda · Step Functions</div>
              </div>
            </div>

            <div className="bg-surface-container-low p-6">
              <div className="mb-3 flex items-center justify-between text-xs">
                <span className="font-medium text-slate-300">Throughput Stream (Illustrative)</span>
                <span className="text-slate-400">Seat-Sale Window</span>
              </div>
              <div className="relative h-24 w-full">
                <svg
                  className="h-full w-full overflow-visible text-blue-500"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 400 80"
                >
                  <defs>
                    <linearGradient id="heroGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#2563eb" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M0,60 Q25,48 50,52 T100,34 T150,42 T200,20 T250,28 T300,12 T350,18 T400,10 L400,80 L0,80 Z"
                    fill="url(#heroGradient)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                  />
                  <motion.path
                    d="M0,60 Q25,48 50,52 T100,34 T150,42 T200,20 T250,28 T300,12 T350,18 T400,10"
                    stroke="#38bdf8"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.4, delay: 0.35, ease: "easeInOut" }}
                  />
                  <circle className="animate-pulse" cx="400" cy="10" fill="#38bdf8" r="4" />
                </svg>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  Connected: Apigee API Edge
                </span>
                <span className="font-mono text-[11px] text-slate-500">Navitaire · SkyPay</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
