"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface VideoTestimonialProps {
  videos: {
    id: string
    url: string
    thumbnail: string
    client: {
      name: string
      company: string
      position: string
      avatar: string
    }
    quote: string
  }[]
  className?: string
}

export default function VideoTestimonial({ videos, className }: VideoTestimonialProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [progress, setProgress] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const activeVideo = videos[activeIndex]

  useEffect(() => {
    // Reset video state when changing videos
    setIsPlaying(false)
    setProgress(0)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
    }
  }, [activeIndex])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateProgress = () => {
      const currentProgress = (video.currentTime / video.duration) * 100
      setProgress(currentProgress)
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setProgress(0)
      video.currentTime = 0
    }

    video.addEventListener("timeupdate", updateProgress)
    video.addEventListener("ended", handleEnded)

    return () => {
      video.removeEventListener("timeupdate", updateProgress)
      video.removeEventListener("ended", handleEnded)
    }
  }, [activeIndex])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current
    if (!video) return

    const progressBar = e.currentTarget
    const rect = progressBar.getBoundingClientRect()
    const clickPosition = e.clientX - rect.left
    const percentage = (clickPosition / rect.width) * 100
    
    video.currentTime = (percentage / 100) * video.duration
    setProgress(percentage)
  }

  return (
    <div className={cn("relative w-full max-w-md mx-auto", className)}>
      <div 
        className="relative aspect-[9/16] rounded-xl overflow-hidden shadow-xl bg-black"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Video */}
        <video
          ref={videoRef}
          src={activeVideo.url}
          poster={activeVideo.thumbnail}
          className="w-full h-full object-cover"
          muted={isMuted}
          preload="none"
          playsInline
        />

        {/* Purple gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent pointer-events-none" />

        {/* Client info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
          <div className="flex items-center mb-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white">
              <Image
                src={activeVideo.client.avatar || "/placeholder.svg"}
                alt={activeVideo.client.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="ml-3 mb-3">
              <h4 className="text-white font-bold">{activeVideo.client.name}</h4>
              <p className="text-white/80 text-sm">
                {activeVideo.client.position}, {activeVideo.client.company}
              </p>
            </div>
          </div>
          <p className="text-white text-sm italic mb-4">"{activeVideo.quote}"</p>
        </div>

        {/* Video controls */}
        <div className={cn(
          "py-2 absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-300",
          isPlaying && !isHovering ? "opacity-0" : "opacity-100"
        )}>
          <Button
            variant="secondary"
            size="icon"
            className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <Pause className="h-8 w-8 text-white" />
            ) : (
              <Play className="h-8 w-8 text-white ml-1" />
            )}
          </Button>
        </div>

        {/* Bottom controls */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
          {/* Progress bar */}
          <div 
            className="w-full h-1 bg-white/30 rounded-full mb-4 cursor-pointer"
            onClick={handleProgressClick}
          >
            <div 
              className="h-full bg-primary rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between items-center">
            {/* Video selector dots */}
            <div className="flex space-x-2">
              {videos.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    index === activeIndex ? "bg-primary w-4" : "bg-white/50 hover:bg-white/80"
                  )}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>

            {/* Mute button */}
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-white hover:bg-white/10"
              onClick={toggleMute}
            >
              {isMuted ? (
                <VolumeX className="h-4 w-4" />
              ) : (
                <Volume2 className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Animated purple pulse effect when not playing */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute w-16 h-16 rounded-full bg-primary/20 animate-ping" />
            <div className="absolute w-20 h-20 rounded-full bg-primary/10 animate-pulse" />
          </div>
        )}
      </div>
    </div>
  )
}
