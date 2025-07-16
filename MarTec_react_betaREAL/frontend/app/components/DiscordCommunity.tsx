"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users } from 'lucide-react'

const userBanners = [
  // "/banner.png",
  "/banner-1.gif",
  "/banner-2.gif",
  "/banner-3.gif",
  "/banner-4.gif",
  "/banner-5.gif",
  "/banner-6.gif",
  "/banner-7.png",
  "/banner-8.gif",
  "/banner-9.gif",
]

export default function DiscordCommunity() {
  // Generate random badges for the waves
  return (
    <Card className="w-full max-w-7xl overflow-hidden bg-[#120D18] text-white border-0 md:mx-0">  
      <CardContent className="p-0">
        <div className="relative h-[400px] w-full">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#120D18] via-[#5865F2]/20 to-[#120D18]" />
          <motion.div
            className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#5865F2]/30 rounded-full blur-[100px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.5, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#5865F2]/30 rounded-full blur-[100px]"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.5, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Content */}
          <div className="relative h-full flex flex-col md:flex-row items-center justify-between px-4 md:px-20">
            {/* Mobile Banner Scroll - Only visible on mobile */}
            <div className="md:hidden absolute top-[32%] left-0 right-0 h-48 overflow-hidden">
              <motion.div
                className="flex whitespace-nowrap"
                animate={{
                  x: [0, -1500]
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {[...userBanners, ...userBanners, ...userBanners].map((banner, i) => (
                  <img
                    key={i}
                    src={banner}
                    alt={`User Banner ${i + 1}`}
                    className="h-40 w-40 object-cover opacity-50"
                  />
                ))}
              </motion.div>
            </div>

            <div className="space-y-6 max-w-xl z-10 text-center md:text-left mt-8 md:mt-0 flex flex-col items-center md:items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-2 md:mb-0 mb-4"
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-16 leading-normal">
                  Future of Creativity
                  <br />
                  Join the party! ✨
                </h2>
              </motion.div>

              {/* Discord GIF - Repositioned for mobile */}
              <div className="md:absolute relative md:left-[50%] md:top-[45%] top-[8%] -translate-y-1/2 w-32 md:w-40 h-32 md:h-40 z-20 rounded-full bg-[#5865F2]/20 p-4 backdrop-blur-sm mb-8 md:mb-0">
                <img
                  src="/discord-loading.gif"
                  alt="Discord Animation"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col md:flex-row items-center gap-6 md:gap-10"
              >
                <Button 
                  size="lg" 
                  className="bg-[#5865F2] hover:bg-[#4752C4] text-white text-lg px-8 py-6 h-auto"
                >
                  <svg className="mr-2 h-6 w-6" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  Join Discord
                </Button>
                <div className="flex items-center gap-2 text-purple-200 hidden md:block">
                  <Users className="w-6 h-6" />
                </div>
              </motion.div>
            </div>

            {/* Desktop Banner Animation - Only visible on desktop */}
            <div className="hidden md:block absolute right-24 top-0 bottom-0 w-96">
              <motion.div
                className="relative h-full"
                initial={{ y: 0 }}
                animate={{
                  y: [-100 * userBanners.length, 0]
                }}
                transition={{
                  y: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                    repeatDelay: 0
                  },
                }}
              >
                {[...Array(3)].map((_, setIndex) => (
                  <div key={`set-${setIndex}`}>
                    {userBanners.map((banner, index) => (
                      <motion.div
                        key={`banner-${setIndex}-${index}`}
                        className="absolute right-0"
                        style={{
                          top: `${(index + setIndex * userBanners.length) * 100}px`,
                        }}
                      >
                        <img
                          src={banner}
                          alt={`Community banner ${index + 1}`}
                          className="w-64 h-20 object-cover rounded-md shadow-lg"
                        />
                      </motion.div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
