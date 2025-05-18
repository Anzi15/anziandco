"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Sparkles, Send, CheckCircle2 } from "lucide-react"
import { db } from "@/lib/firebase/config"

import { getFirestore, collection, getDocs, addDoc, query, where } from "firebase/firestore"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

// Form schema
const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
})

type FormValues = z.infer<typeof formSchema>

export default function NewsletterSignup() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()
  const controls = useAnimation()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })

  // Background animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: {
      x: number
      y: number
      radius: number
      color: string
      velocity: { x: number; y: number }
      alpha: number
    }[] = []

    const colors = ["#9333EA", "#A855F7", "#C084FC", "#7E22CE"]

    for (let i = 0; i < 30; i++) {
      const radius = Math.random() * 3 + 1
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius,
        color: colors[Math.floor(Math.random() * colors.length)],
        velocity: {
          x: (Math.random() - 0.5) * 0.5,
          y: (Math.random() - 0.5) * 0.5,
        },
        alpha: Math.random() * 0.5 + 0.1,
      })
    }

    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle =
          particle.color +
          Math.floor(particle.alpha * 255)
            .toString(16)
            .padStart(2, "0")
        ctx.fill()

        particle.x += particle.velocity.x
        particle.y += particle.velocity.y

        if (particle.x < 0 || particle.x > canvas.width) particle.velocity.x *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.velocity.y *= -1
      })
    }

    animate()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)

    try {
      // Check if email already exists
      const emailsRef = collection(db, "newsletter-emails")
      const q = query(emailsRef, where("email", "==", data.email.toLowerCase()))
      const querySnapshot = await getDocs(q)

      if (!querySnapshot.empty) {
        // toast({
        //   title: "Already subscribed",
        //   description: "This email is already subscribed to our newsletter.",
        //   variant: "destructive",
        // })
        alert("Already subscribed")
        setIsSubmitting(false)
        return
      }

      // Add email to Firebase
      await addDoc(collection(db, "newsletter-emails"), {
        email: data.email.toLowerCase(),
        subscribedAt: new Date(),
      })

      // Show success toast
      // toast({
      //   title: "Successfully subscribed!",
      //   description: "Thank you for subscribing to our newsletter.",
      // })
alert("Successfully subscribed!")

      // Show success state
      setIsSuccess(true)
      setTimeout(() => setIsSuccess(false), 3000)

      // Reset form
      reset()
    } catch (error) {
      console.error("Error adding document: ", error)
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      })
    }

    setIsSubmitting(false)
  }

  return (
    <div className="relative w-full md:px-8 py-8 mx-auto">
      {/* Background canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="relative">
        {/* Decorative elements */}
        <motion.div
          className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-purple-600/10 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -bottom-16 -right-8 w-32 h-32 rounded-full bg-purple-500/20 blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <div className="backdrop-blur-sm bg-white/30 dark:bg-black/20 border border-purple-200/30 dark:border-purple-800/30 rounded-2xl shadow-xl overflow-hidden">
          <div className="relative p-8">
            {/* Glassmorphism card */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-purple-400/5 backdrop-blur-sm -z-10" />

            {/* Animated sparkles */}
            <motion.div
              className="absolute top-6 right-8"
              animate={{
                y: [0, -10, 0],
                opacity: [1, 0.8, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="h-6 w-6 text-purple-500" />
            </motion.div>

            <motion.div
              className="absolute bottom-8 left-10"
              animate={{
                y: [0, 8, 0],
                opacity: [1, 0.7, 1],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <Sparkles className="h-5 w-5 text-purple-400" />
            </motion.div>

            {/* Heading with animation */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-purple-500">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="mt-3 text-center">
                Join our exclusive community of digital innovators
              </p>
            </motion.div>

            {/* Form with animations */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="relative">
                <div className="relative group flex items-center">
                  <AnimatePresence>
                    {!isSuccess ? (
                      <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 m-auto">
                        <Input
                          {...register("email")}
                          placeholder="Enter your email"
                          className="pl-4 pr-4 py-7 bg-white/50 dark:bg-black/20 backdrop-blur-sm border-purple-300/50 dark:border-purple-700/50 focus:border-purple-500 focus:ring-purple-400 transition-all duration-300 rounded-xl shadow-inner max-w-[20rem]"
                        />
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="relative overflow-hidden py-7 px-8 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                          >
                            {isSubmitting ? (
                              <div className="flex items-center justify-center">
                                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                <span>Joining...</span>
                              </div>
                            ) : (
                              <div className="flex items-center gap-2">
                                <span>Join</span>
                                <Send className="h-4 w-4" />
                              </div>
                            )}

                            {/* Button shine effect */}
                            <motion.div
                              className="absolute inset-0 bg-white/20"
                              initial={{ x: "-100%", opacity: 0.5 }}
                              animate={{ x: "100%", opacity: 0 }}
                              transition={{
                                repeat: Number.POSITIVE_INFINITY,
                                duration: 2,
                                ease: "easeInOut",
                                repeatDelay: 1,
                              }}
                            />
                          </Button>
                        </motion.div>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="flex items-center justify-center py-7 px-4 bg-purple-100/80 dark:bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-200/50 dark:border-purple-700/50"
                      >
                        <CheckCircle2 className="h-6 w-6 text-green-500 mr-2" />
                        <span className="text-purple-800 dark:text-purple-200 font-medium">
                          Successfully subscribed! Thank you.
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-2 ml-2"
                  >
                    {errors.email.message}
                  </motion.p>
                )}

                {/* Decorative line */}
                <motion.div
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent w-1/2"
                  initial={{ width: "0%" }}
                  animate={{ width: "50%" }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
