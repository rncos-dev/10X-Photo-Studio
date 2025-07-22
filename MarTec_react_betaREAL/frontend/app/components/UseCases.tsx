'use client'

import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Palette } from 'lucide-react'

const useCases = [
  {
    id: 'image-generation',
    title: 'Fashion',
    description: 'Create stunning visuals from text descriptions',
    image: '/1.png'
  },
  {
    id: 'style-transfer',
    title: 'Marketing',
    description: 'Apply artistic styles to your existing images',
    image: '/2.png'
  },
  {
    id: 'layout-design',
    title: 'Advertisement',
    description: 'Generate complete layouts and compositions',
    image: '/4.png'
  },
  {
    id: 'product-photography',
    title: 'Product Photography',
    description: 'Create unique characters and avatars',
    image: '/6.png'
  },
  {
    id: 'pattern-creation',
    title: 'Architecture',
    description: 'Generate seamless patterns and textures',
    image: '/7.png'
  },
  {
    id: 'book-illustrations',
    title: 'Interior Design',
    description: 'Create captivating book covers and illustrations',
    image: '/9.png'
  },
  {
    id: 'fashion-design',
    title: 'Graphic Design',
    description: 'Design unique apparel and accessories',
    image: '/7.png'
  },
  {
    id: 'art-creation',
    icon: Palette,
    title: 'Concept Art',
    description: 'Generate original artwork in various styles',
    image: '/8.png',
  },
  {
    id: 'game-asset',
    title: 'Game Asset',
    description: 'Design unique apparel and accessories',
    image: '/7.png'
  },
  {
    id: 'character-design',
    title: 'Character Design',
    description: 'Design unique apparel and accessories',
    image: '/8.png'
  },
  {
    id: 'inspiration',
    title: 'Inspiration',
    description: 'Design unique apparel and accessories',
    image: '/10.png'
  }
]

export default function UseCases() {
  const [activeTab, setActiveTab] = useState(useCases[0].id)
  const tabsRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const scrollToCenter = useCallback((element: HTMLElement) => {
    const container = tabsRef.current
    const scrollContainer = containerRef.current
    if (!container || !scrollContainer) return

    // Get the container's left edge position
    const containerRect = container.getBoundingClientRect()
    const scrollContainerRect = scrollContainer.getBoundingClientRect()
    const elementRect = element.getBoundingClientRect()

    // Calculate the scroll position that will center the element
    const scrollLeft = (
      elementRect.left 
      - scrollContainerRect.left 
      - (containerRect.width / 2) 
      + (elementRect.width / 2)
      + container.scrollLeft
    )

    container.scrollTo({
      left: scrollLeft,
      behavior: 'smooth'
    })
  }, [])

  const handleTabChange = useCallback((value: string) => {
    setActiveTab(value)
    const selectedTab = document.querySelector(`[data-value="${value}"]`) as HTMLElement
    if (selectedTab) {
      scrollToCenter(selectedTab)
    }
  }, [scrollToCenter])

  return (
    <section className="py-8 md:py-12 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 py-3 md:py-5 relative">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-6xl font-bold mb-4">
            Use 10x Photo Studio Today For
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore the endless possibilities of AI-powered image generation across various creative domains
          </p>
        </motion.div>
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <div className="relative" ref={containerRef}>
          <div className="absolute left-0 top-0 bottom-0 w-[15%] bg-gradient-to-r from-black via-black/90 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-[15%] bg-gradient-to-l from-black via-black/90 to-transparent pointer-events-none z-10" />
            
            <TabsList 
              ref={tabsRef}
              className="relative flex items-center mx-auto max-w-full overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-mandatory py-4 md:py-12 mb-4 md:mb-8 bg-transparent"
            >
              <div className="min-w-full">
                <div className="flex space-x-4 md:space-x-12 px-[50vw] py-8 md:py-16 after:content-[''] after:pl-[50vw]">
                  {useCases.map((useCase) => (
                    <TabsTrigger
                      key={useCase.id}
                      value={useCase.id}
                      data-value={useCase.id}
                      className="snap-center shrink-0 bg-transparent text-2xl md:text-4xl font-medium transition-all py-2 md:py-4
                        data-[state=active]:bg-transparent data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:via-yellow-500 data-[state=active]:to-red-500 data-[state=active]:bg-clip-text data-[state=active]:text-transparent
                        data-[state=inactive]:text-gray-400"
                    >
                      <motion.div
                        animate={{
                          scale: useCase.id === activeTab ? 1 : 0.8,
                          opacity: useCase.id === activeTab ? 1 : 0.3,
                        }}
                        transition={{ duration: 0.2 }}
                        className={cn(
                          "whitespace-nowrap text-2xl md:text-5xl font-bold transition-all leading-none py-1 md:py-2",
                          useCase.id === activeTab 
                            ? "bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent"
                            : "text-gray-400"
                        )}
                      >
                        {useCase.title}
                      </motion.div>
                    </TabsTrigger>
                  ))}
                </div>
              </div>
            </TabsList>
          </div>
          <div className="relative h-[400px] md:h-[600px]">
            <AnimatePresence mode="wait" initial={false}>
              {useCases.map((useCase) => (
                useCase.id === activeTab && (
                  <motion.div
                    key={useCase.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      opacity: { duration: 0.2 },
                    }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      pointerEvents: useCase.id === activeTab ? 'auto' : 'none',
                    }}
                  >
                    <TabsContent 
                      value={useCase.id} 
                      className="mt-0"
                      forceMount
                    >
                      <Card className="overflow-hidden border-0 bg-black/40 backdrop-blur-xl">
                        <div className="p-6">
                          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden">
                            <Image
                              src={useCase.image}
                              alt={useCase.title}
                              fill
                              className="object-cover"
                              priority
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'fill',
                              }}
                            />
                            {/* Smooth black gradient fadeout */}
                            <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black from-20% via-black/60 via-20% via-black/50 via-20% via-black/20 via-30% via-black/20 to-transparent" />
                          </div>
                        </div>
                      </Card>
                    </TabsContent>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </Tabs>
      </div>
    </section>
  )
}
