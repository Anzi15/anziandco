"use client"

import { motion } from "framer-motion"
import { Pacifico } from 'next/font/google'
import Image from "next/image"
import { cn } from "@/lib/utils"
import { GradientButton } from "./ui/GradeintButton"
import Link from "next/link"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-black/[0.1]",
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[3px] border-2 border-black/[0.1]",
            "shadow-[0_8px_40px_0_rgba(0,0,0,0.12)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.08),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  )
}

export default function AnimatedTextHeroSection({
  badge = "(100+)",
  title1 = "We help businesses like yours",
  title2 = "Grow digitally",
}: {
  badge?: string
  title1?: string
  title2?: string
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#fdfdfd]">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-300/[0.05] via-transparent to-rose-300/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-300/[0.1]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-400/[0.1]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-400/[0.1]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-400/[0.1]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-400/[0.1]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-black/[0.03] border border-black/[0.05] mb-8 md:mb-12"
          >
            <div className="flex -space-x-3">
              <Image
                src="https://storage.googleapis.com/public.storage.pensight.com/uploaded-files/user-avatars/f3c7ad05-ad5c-4f63-95b2-4184b6fc2b60/original.jpg"
                alt="User 1"
                width={28}
                height={28}
                className="rounded-full border-2 aspect-squareborder-white"
              />
              <Image
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User 2"
                width={28}
                height={28}
                className="rounded-full border-2 border-white"
              />
              <div className="w-7 h-7 flex items-center justify-center rounded-full bg-black text-white text-xs border-2 border-white">
                +
              </div>
            </div>

            <div className="flex gap-0.5 ml-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.7 + i * 0.1,
                    ease: "backOut",
                  }}
                  className="text-amber-400"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.span>
              ))}
            </div>

            <span className="text-sm text-black/60 tracking-wide">{badge}</span>
          </motion.div>

          <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-black to-black/80 text-4xl sm:text-6xl md:text-6xl">
                {title1}
              </span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-black to-rose-600",
                  pacifico.className,
                )}
              >
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
            <p className="text-base sm:text-lg md:text-xl text-black/60 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4 py-4">
              Helped our clients raise over $2M in revenue in the last year, with our innovative solutions.
            </p>

            <motion.div
              custom={3}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-6 justify-center mt-8 px-4 sm:px-0"
            >
              {/* Get Started Button */}
              <Link href={"/consultation"} className="w-full sm:w-auto">
              <motion.div
                className="relative w-full sm:w-auto overflow-hidden rounded-full group"
                whileHover="hover"
                whileTap="tap"
                initial="initial"
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-violet-500 opacity-0 blur-xl transition-all duration-500"
                  variants={{
                    initial: { scale: 0.8, opacity: 0 },
                    hover: { scale: 1.2, opacity: 0.7 },
                    tap: { scale: 1.1, opacity: 0.9 },
                  }}
                />
                
                {/* Button background */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 group-hover:from-indigo-500 group-hover:to-violet-500 transition-colors duration-300" />
                
                {/* Button content */}
                {/* <div className="relative px-8 py-3 flex items-center justify-center gap-2 text-white font-medium"> */}
                <GradientButton className="w-full">

                  <span className="group-hover:animate-pulse-subtle">Get Started</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:translate-x-1 transition-transform duration-300"
                    >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                    </GradientButton>
                {/* </div> */}
                
                {/* Shimmer effect */}
                <div 
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"
                />
              </motion.div>
              </Link>

              {/* Learn More Button */}
              <Link href={"/services"}>
              <motion.button
                className="relative w-full sm:w-auto overflow-hidden rounded-full group"
                whileHover="hover"
                whileTap="tap"
                initial="initial"
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-300/30 to-indigo-300/30 opacity-0 blur-xl transition-all duration-500"
                  variants={{
                    initial: { scale: 0.8, opacity: 0 },
                    hover: { scale: 1.2, opacity: 0.5 },
                    tap: { scale: 1.1, opacity: 0.7 },
                  }}
                />
                
                {/* Button background */}
                <div className="absolute inset-0 rounded-full bg-white border border-black/10 group-hover:bg-gray-50 transition-colors duration-300" />
                
                {/* Button content */}
                <div className="relative px-8 py-3 flex items-center justify-center gap-2 text-black/80 font-medium">
                  <span className="group-hover:animate-pulse-subtle">Learn More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:rotate-45 transition-transform duration-300"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m12 16 4-4-4-4"></path>
                    <path d="M8 12h8"></path>
                  </svg>
                </div>
                
                {/* Shimmer effect */}
                <div 
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-indigo-200/20 to-transparent opacity-0 group-hover:opacity-30 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"
                />
              </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/80 pointer-events-none" />
    </div>
  )
}
