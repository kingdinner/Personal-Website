import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
})

export const metadata: Metadata = {
  title: "King Rowell Vidal — Software Engineer | Airline & Payment Systems",
  description:
    "Systems-oriented Software Engineer specializing in airline payment systems (Navitaire, SkyPay), AWS cloud infrastructure, and backend API development.",
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${plusJakarta.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-background text-on-surface antialiased">
        {children}
      </body>
    </html>
  )
}
