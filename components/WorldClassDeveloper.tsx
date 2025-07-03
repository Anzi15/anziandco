"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function ScrollingStarSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const starRef = useRef<HTMLDivElement>(null)
  const [starY, setStarY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const sectionHeight = rect.height

        // Calculate how far the section is visible in viewport
        const progress = Math.min(Math.max(0, (windowHeight - rect.top) / (windowHeight + sectionHeight)), 1)

        // Star position (from 0% to 100% of section height)
        const newY = progress * (sectionHeight - 60) // 60 = star size
        setStarY(newY)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial position

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden bg-[#f0ebff]"
    >
      {/* Vertical sliding star */}
      <div
        ref={starRef}
        className="absolute z-10 transition-transform duration-200 ease-linear"
        style={{
          top: `${starY}px`,
          right: "20px", // adjust distance from edge here
        }}
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 0L37.5 22.5L60 30L37.5 37.5L30 60L22.5 37.5L0 30L22.5 22.5L30 0Z"
            fill="black"
          />
        </svg>
      </div>

      {/* Section content */}
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <p className="text-sm font-medium uppercase tracking-wider">
            DEVELOP YOUR DREAM PRODUCT
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            World Class
            <br />
            Software
            <br />
            Developers
          </h1>
          <p className="text-lg">
            At <span className="font-bold italic">Anzi &. CO</span>, we're focused
            on building strong and lasting client partnerships. By drawing on
            our deep industry knowledge and expertise, we provide the insights
            you need to build and evolve your brand, product, drive business
            performance and mitigate risk.
          </p>
          <p className="text-lg">
            We can help you build robust and scalable websites, mobile apps as
            well as automate your business operations with application of
            Artificial Intelligence.
          </p>
          <div>
            <Link
              href="/get-quote?service=web-development"
              className="inline-flex items-center px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
            >
              GET PROPOSAL
              <svg
                className="ml-2 w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src="pj-go-Y4fdsqJNUMA-unsplash.jpg"
              width={600}
              height={400}
              alt="Team meeting"
              className="w-full h-auto object-cover aspect-square rounded-3xl"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-2/3 rounded-3xl overflow-hidden border-4 border-white">
            <Image
              src="true-agency-o4UhdLv5jbQ-unsplash.jpg"
              width={400}
              height={300}
              alt="Team member"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
