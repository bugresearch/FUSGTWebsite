import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Siber Güvenlik Topluluğu - Fırat Üniversitesi",
  description:
    "Official website of NWC Association, SRM University. Join us for events, workshops, and skill development across technical and non-technical domains.",
  keywords:
    "NWC Association, SRM University, student club, events, workshops, technical, non-technical, media, organizing",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
