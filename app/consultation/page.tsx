import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Target, TrendingUp } from "lucide-react"
import FooterCta from "@/components/ui/FooterCta"
import CalendlySection from "@/components/Calendly"
import StatsSection from "@/components/ui/Stats"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="pt-32 pb-16 md:pt-40 md:pb-24"
        style={{
          background: "linear-gradient(to bottom, #ecbcfd 0%, #fff 81%)",
        }}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Claim Your <span className="italic font-semibold text-purple-700">Free Strategy Session</span>
              </h1>
              <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl dark:text-gray-400">
                For a limited time, we’re offering a complimentary 1-on-1 strategy session tailored to your business. 
                Let’s uncover opportunities and craft a growth roadmap—no strings attached.
              </p>
              <p className="text-sm text-muted-foreground">
                *Slots are limited and reserved on a first-come, first-served basis.*
              </p>
            </div>
          </div>
        </div>
      </section>

        <div id="#book-consultation">
      <CalendlySection />
        </div>
      <StatsSection/>

      <section className="py-16 bg-white">
  <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center gap-10">
    <div className="w-full md:w-1/2">
      <Image
        src="/meeting with canadian website design client.png" // 👈 Replace with your actual image path
        alt="Zoom call with client"
        width={800}
        height={600}
        className="rounded-xl shadow-xl object-cover"
      />
    </div>
    <div className="w-full md:w-1/2 space-y-4">
      <h3 className="text-2xl font-semibold">Real Conversations. Real Growth.</h3>
      <p className="text-muted-foreground text-lg">
        Whether you’re a startup or an established brand, this session is your opportunity to talk directly with me—ask questions, brainstorm ideas, and get real-time insights tailored to your business.
      </p>
      <div className="flex items-center space-x-3 mt-4">
        <Image
          src="/anzi.png" // 👈 Optional: your headshot or brand avatar
          alt="Your Name"
          width={48}
          height={48}
          className="rounded-full"
        />
        <div>
          <p className="font-medium">Anzi | Founder & CEO</p>
          <p className="text-sm text-muted-foreground">Digital Marketing Expert</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* CTA */}
      <FooterCta />
    </div>
  )
}
