  // "use client"

  // import { useEffect, useRef, useState } from "react"
  // import Image from "next/image"
  // import { Play, Pause, Volume2, VolumeX } from "lucide-react"
  // import { Button } from "@/components/ui/button"
  // import { cn } from "@/lib/utils"

  // interface VideoTestimonialProps {
  //   videos: {
  //     id: string
  //     url: string
  //     thumbnail: string
  //     client: {
  //       name: string
  //       company: string
  //       position: string
  //     }
  //     quote: string
  //   }[]
  //   className?: string
  // }

  // declare global {
  //   interface Window {
  //     YT: any
  //     onYouTubeIframeAPIReady: () => void
  //   }
  // }

  // export default function VideoTestimonial({ videos, className }: VideoTestimonialProps) {
  //   const [activeIndex, setActiveIndex] = useState(0)
  //   const [isPlaying, setIsPlaying] = useState(false)
  //   const [isMuted, setIsMuted] = useState(false)
  //   const [isHovering, setIsHovering] = useState(false)
  //   const playerRef = useRef<any>(null)
  //   const playerContainerRef = useRef<HTMLDivElement>(null)

  //   const activeVideo = videos[activeIndex]

  //   // Load YouTube Iframe API
  //   useEffect(() => {
  //     if (!window.YT) {
  //       const tag = document.createElement("script")
  //       tag.src = "https://www.youtube.com/iframe_api"
  //       const firstScriptTag = document.getElementsByTagName("script")[0]
  //       if (firstScriptTag && firstScriptTag.parentNode) {
  //         firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
  //       }
  //     } else {
  //       loadPlayer()
  //     }

  //     window.onYouTubeIframeAPIReady = () => {
  //       loadPlayer()
  //     }
  //   }, [])

  //   // Reload video when index changes
  //   useEffect(() => {
  //     if (window.YT && window.YT.Player && playerRef.current) {
  //       playerRef.current.loadVideoById(getVideoId(activeVideo.url))
  //       setIsPlaying(false)
  //       setIsMuted(true)
  //       playerRef.current.mute()
  //     }
  //   }, [activeIndex])

  //   const loadPlayer = () => {
  //     if (playerRef.current || !playerContainerRef.current) return

  //     playerRef.current = new window.YT.Player(playerContainerRef.current, {
  //       videoId: getVideoId(activeVideo.url),
  //       playerVars: {
  //         autoplay: 0,
  //         controls: 0,
  //         modestbranding: 1,
  //         rel: 0,
  //         showinfo: 0,
  //         fs: 0,
  //         iv_load_policy: 3,
  //         disablekb: 1,
  //       },
  //       events: {
  //         onReady: (event: any) => {
  //           event.target.mute()
  //         }
  //       }
  //     })
  //   }

  //   const getVideoId = (url: string) => {
  //     const match = url.match(/v=([^&]+)/)
  //     return match ? match[1] : ""
  //   }

  //   const togglePlay = () => {
  //     if (!playerRef.current) return
  //     if (isPlaying) {
  //       playerRef.current.pauseVideo()
  //     } else {
  //       playerRef.current.playVideo()
  //     }
  //     setIsPlaying(!isPlaying)
  //   }

  //   const toggleMute = () => {
  //     if (!playerRef.current) return
  //     if (isMuted) {
  //       playerRef.current.unMute()
  //     } else {
  //       playerRef.current.mute()
  //     }
  //     setIsMuted(!isMuted)
  //   }

  //   return (
  //     <div className={cn("relative w-full max-w-md mx-auto", className)}>
  //       <div
  //         className="relative aspect-[9/16] rounded-xl overflow-hidden shadow-xl bg-black"
  //         onMouseEnter={() => setIsHovering(true)}
  //         onMouseLeave={() => setIsHovering(false)}
  //       >
  //         {/* YouTube Player container (dynamic) */}
  //         <div ref={playerContainerRef} className="absolute inset-0 w-full h-full z-0" />

  //         {/* Purple gradient overlay */}
  //         <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent pointer-events-none" />

  //         {/* Client info */}
  //         <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
  //           <div className="flex items-center mb-3">
  //             <div className="ml-3 mb-3">
  //               <h4 className="text-white font-bold">{activeVideo.client.name}</h4>
  //               <p className="text-white/80 text-sm">
  //                 {activeVideo.client.position}, {activeVideo.client.company}
  //               </p>
  //             </div>
  //           </div>
  //           <p className="text-white text-sm italic mb-4">"{activeVideo.quote}"</p>
  //         </div>

  //         {/* Play/Pause UI */}
  //         <div className={cn(
  //           "py-2 absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-300",
  //           isPlaying && !isHovering ? "opacity-0" : "opacity-100"
  //         )}>
  //           <Button
  //             variant="secondary"
  //             size="icon"
  //             className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
  //             onClick={togglePlay}
  //           >
  //             {isPlaying ? (
  //               <Pause className="h-8 w-8 text-white" />
  //             ) : (
  //               <Play className="h-8 w-8 text-white ml-1" />
  //             )}
  //           </Button>
  //         </div>

  //         {/* Bottom controls */}
  //         <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
  //           <div className="w-full h-1 bg-white/30 rounded-full mb-4">
  //             {/* Static progress bar placeholder */}
  //             <div className="h-full bg-primary rounded-full" style={{ width: `0%` }} />
  //           </div>

  //           <div className="flex justify-between items-center">
  //             <div className="flex space-x-2">
  //               {videos.map((_, index) => (
  //                 <button
  //                   key={index}
  //                   className={cn(
  //                     "w-2 h-2 rounded-full transition-all",
  //                     index === activeIndex ? "bg-primary w-4" : "bg-white/50 hover:bg-white/80"
  //                   )}
  //                   onClick={() => setActiveIndex(index)}
  //                 />
  //               ))}
  //             </div>
  //             <Button
  //               variant="ghost"
  //               size="icon"
  //               className="h-8 w-8 text-white hover:bg-white/10"
  //               onClick={toggleMute}
  //             >
  //               {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
  //             </Button>
  //           </div>
  //         </div>

  //         {!isPlaying && (
  //           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
  //             <div className="absolute w-16 h-16 rounded-full bg-primary/20 animate-ping" />
  //             <div className="absolute w-20 h-20 rounded-full bg-primary/10 animate-pulse" />
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   )
  // }
