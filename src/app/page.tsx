import { Architecture } from "@/components/Architecture"
import { Competencies } from "@/components/Competencies"
import { Contact } from "@/components/Contact"
import { Credentials } from "@/components/Credentials"
import { Experience } from "@/components/Experience"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Metrics } from "@/components/Metrics"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="w-full flex-grow pt-20">
        <Hero />
        <Metrics />
        <Architecture />
        <Experience />
        <Competencies />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
