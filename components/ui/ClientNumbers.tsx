"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { ArrowUp } from "lucide-react"

const AnimatedCounter = ({
  value,
  duration = 2,
  decimals = 0,
}: {
  value: number
  duration?: number
  decimals?: number
}) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      let animationFrame: number

      const countUp = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        const currentCount = Math.floor(progress * value)
        setCount(currentCount)
        if (progress < 1) {
          animationFrame = requestAnimationFrame(countUp)
        } else {
          setCount(value)
        }
      }

      animationFrame = requestAnimationFrame(countUp)
      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {count}
      {decimals > 0 || String(value).includes("%") ? "%" : ""}
    </span>
  )
}

const StatCircle = ({
  percentage,
  description,
  delay = 0,
}: {
  percentage: number
  description: string
  delay?: number
}) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center w-full"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay,
            ease: "easeOut",
          },
        },
      }}
    >
      <div className="relative w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] mb-4 mx-auto">
        <div className="absolute inset-0 rounded-full bg-gray-100"></div>
        <motion.div
          className="absolute inset-[6px] rounded-full bg-white flex items-center justify-center border-2 border-purple-200"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: delay + 0.2, duration: 0.5 }}
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
              <AnimatedCounter value={percentage} />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: delay + 0.6, duration: 0.3 }}
            >
              <ArrowUp className="h-3 w-3 sm:h-4 sm:w-4 mx-auto text-purple-600" />
            </motion.div>
          </div>
        </motion.div>
      </div>
      <motion.p
        className="text-xs sm:text-sm font-medium max-w-[180px] mx-auto"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: delay + 0.7, duration: 0.5 }}
      >
        {description}
      </motion.p>
    </motion.div>
  )
}

// ✅ Main Section (takes `data` prop)
export default function StatsSection({ data }: { data: { growth: string; name: string }[] }) {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  return (
    <section className="py-10 sm:py-12 md:py-16 px-4 bg-gray-50 rounded-xl sm:rounded-2xl md:rounded-3xl">
      <div className="max-w-6xl mx-auto" ref={containerRef}>
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 md:mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          The proof is in the numbers
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8">
          {data.map((stat, index) => (
            <StatCircle
              key={index}
              percentage={parseInt(stat.growth.replace("%", ""))}
              description={stat.name}
              delay={0.2 + index * 0.2}
            />
          ))}

          <motion.div
            className="bg-purple-100 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.div
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <AnimatedCounter value={5000} />+
            </motion.div>
            <p className="text-xs sm:text-sm font-medium text-gray-700">
              Total campaigns launched
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
