"use client"
import { ArrowRight, BadgeCheck, Clock3, ExternalLink, Mail, Phone, Send } from "lucide-react"
import { useState, type FormEvent } from "react"
import { inquiryDomains, profile, timelines } from "@/data/content"

export function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get("name") ?? "")
    const email = String(data.get("email") ?? "")
    const domain = String(data.get("domain") ?? "")
    const timeline = String(data.get("timeline") ?? "")
    const message = String(data.get("message") ?? "")

    const subject = encodeURIComponent(`[Portfolio] ${domain} — ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nDomain: ${domain}\nTimeline: ${timeline}\n\n${message}`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section className="w-full bg-surface px-6 py-24" id="contact">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-8 lg:col-span-5">
          <div className="space-y-3">
            <div className="text-xs font-semibold tracking-wider text-primary uppercase">
              Contact & Advisory
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let's Connect
            </h2>
            <p className="text-base leading-relaxed text-slate-400">
              Available for senior backend engineering roles, airline payment systems work, or
              architectural collaboration across APAC.
            </p>
          </div>

          <div className="space-y-3">
            <a
              className="group flex items-center justify-between rounded-xl border border-white/[0.08] bg-surface-container-low p-4 transition-all hover:border-blue-500/40 hover:bg-surface-container"
              href={`mailto:${profile.email}`}
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-primary transition-all group-hover:scale-105">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Email Address</div>
                  <div className="text-sm font-semibold text-white transition-colors group-hover:text-primary">
                    {profile.email}
                  </div>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-slate-500 transition-colors group-hover:text-white" />
            </a>

            <a
              className="group flex items-center justify-between rounded-xl border border-white/[0.08] bg-surface-container-low p-4 transition-all hover:border-emerald-500/40 hover:bg-surface-container"
              href={profile.phoneHref}
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 transition-all group-hover:scale-105">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Direct Phone</div>
                  <div className="text-sm font-semibold text-white transition-colors group-hover:text-emerald-400">
                    {profile.phone}
                  </div>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-slate-500 transition-colors group-hover:text-white" />
            </a>

            <a
              className="group flex items-center justify-between rounded-xl border border-white/[0.08] bg-surface-container-low p-4 transition-all hover:border-indigo-500/40 hover:bg-surface-container"
              href={profile.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 transition-all group-hover:scale-105">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Professional Network</div>
                  <div className="text-sm font-semibold text-white transition-colors group-hover:text-indigo-300">
                    LinkedIn Profile
                  </div>
                </div>
              </div>
              <ExternalLink className="h-5 w-5 text-slate-500 transition-colors group-hover:text-white" />
            </a>
          </div>

          <div className="space-y-1.5 rounded-xl border border-white/[0.06] bg-surface-container p-5 text-xs text-slate-400">
            <div className="flex items-center gap-1.5 font-semibold text-slate-200">
              <Clock3 className="h-4 w-4 text-primary" />
              Typical Response Window
            </div>
            <p>
              Based in {profile.location}. Direct inquiries usually receive a response within 24
              hours on business days.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-white/[0.1] bg-surface-container-low p-8 shadow-xl sm:p-10">
            <h3 className="font-display mb-2 text-2xl font-bold text-white">Send a Message</h3>
            <p className="mb-6 text-sm text-slate-400">
              Discuss project roadmaps, architecture reviews, or engineering opportunities.
            </p>
            <form className="space-y-5" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    className="w-full rounded-xl border border-white/[0.08] bg-surface-container px-4 py-3 text-sm text-white transition-all placeholder:text-slate-600 focus:border-transparent focus:ring-2 focus:ring-primary focus:outline-none"
                    id="name"
                    name="name"
                    placeholder="e.g. Alex Mercer"
                    required
                    type="text"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300" htmlFor="email">
                    Your Email
                  </label>
                  <input
                    className="w-full rounded-xl border border-white/[0.08] bg-surface-container px-4 py-3 text-sm text-white transition-all placeholder:text-slate-600 focus:border-transparent focus:ring-2 focus:ring-primary focus:outline-none"
                    id="email"
                    name="email"
                    placeholder="alex@company.com"
                    required
                    type="email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300" htmlFor="domain">
                    Inquiry Domain
                  </label>
                  <select
                    className="w-full rounded-xl border border-white/[0.08] bg-surface-container px-4 py-3 text-sm text-white transition-all focus:border-transparent focus:ring-2 focus:ring-primary focus:outline-none"
                    id="domain"
                    name="domain"
                    defaultValue={inquiryDomains[0]}
                  >
                    {inquiryDomains.map((d) => (
                      <option key={d}>{d}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300" htmlFor="timeline">
                    Estimated Timeline
                  </label>
                  <select
                    className="w-full rounded-xl border border-white/[0.08] bg-surface-container px-4 py-3 text-sm text-white transition-all focus:border-transparent focus:ring-2 focus:ring-primary focus:outline-none"
                    id="timeline"
                    name="timeline"
                    defaultValue={timelines[1]}
                  >
                    {timelines.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300" htmlFor="message">
                  Message / Overview
                </label>
                <textarea
                  className="w-full rounded-xl border border-white/[0.08] bg-surface-container px-4 py-3 text-sm text-white transition-all placeholder:text-slate-600 focus:border-transparent focus:ring-2 focus:ring-primary focus:outline-none"
                  id="message"
                  name="message"
                  placeholder="Share details regarding the role, architectural challenges, or collaboration scope..."
                  required
                  rows={4}
                />
              </div>

              <div className="pt-2">
                <button
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-container px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 ring-1 ring-white/20 transition-all hover:bg-blue-600 sm:w-auto"
                  type="submit"
                >
                  <span>Send Message</span>
                  <Send className="h-[18px] w-[18px]" />
                </button>
              </div>

              {sent && (
                <div className="flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-300">
                  <BadgeCheck className="h-5 w-5 text-emerald-400" />
                  <span>
                    Opening your mail client — {profile.name} will follow up shortly.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
