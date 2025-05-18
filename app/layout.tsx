import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import "@/app/globals.css"
import { Poppins, Lato } from "next/font/google"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeModeScript } from "flowbite-react";
import { Toaster } from "react-hot-toast"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
})

export const metadata = {
  title: "Anzi & Co. | Digital Marketing Agency",
  description:
    "Anzi & Co. is a digital marketing agency specializing in website development, social media marketing, graphic design, SEO, PPC, email marketing, SMS marketing, lead generation, and business strategy.",
  keywords: [
    "digital marketing agency",
    "website development",
    "social media marketing",
    "graphic design",
    "SEO",
    "PPC",
    "email marketing",
    "SMS marketing",
    "lead generation",
    "business strategy",
  ],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <ThemeModeScript />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased ", poppins.variable, lato.variable)}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Toaster />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'