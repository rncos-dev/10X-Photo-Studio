'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

// Initial 10 images
const collageImages = [
  { src: '/metalware_luxury_store.png', alt: 'AI Generated Art 1', ratio: '16/9' },
  { src: '/sunsetdance.jpg', alt: 'AI Generated Art 2', ratio: '1/1' },
  { src: '/ChapalStore.jpg', alt: 'AI Generated Art 3', ratio: '4/3' },
  { src: '/MALEARRCHITECT.jpg', alt: 'AI Generated Art 4', ratio: '9/16' },
  { src: '/cup_tsunami.png', alt: 'AI Generated Art 5', ratio: '1/1' },
  { src: '/fatcat.jpg', alt: 'AI Generated Art 6', ratio: '16/9' },
  { src: '/Imagine_a_wide-angle_shot_of_a_bustling_Mumbai_street_with_the_iconic_Gateway_of__qB6qtYK.png', alt: 'AI Generated Art 7', ratio: '4/3' },
  { src: '/metalware_2.png', alt: 'AI Generated Art 8', ratio: '1/1' },
  { src: '/prompt_luxury.png', alt: 'AI Generated Art 9', ratio: '9/16' },
  { src: '/valve_2.png', alt: 'AI Generated Art 10', ratio: '16/9' },
  { src: '/metalware_luxury_store.png', alt: 'AI Generated Art 1', ratio: '16/9' },
  { src: '/sunsetdance.jpg', alt: 'AI Generated Art 2', ratio: '1/1' },
  { src: '/ChapalStore.jpg', alt: 'AI Generated Art 3', ratio: '4/3' },
  { src: '/metalware_2.png', alt: 'AI Generated Art 8', ratio: '1/1' },
  { src: '/prompt_luxury.png', alt: 'AI Generated Art 9', ratio: '9/16' },
  { src: '/valve_2.png', alt: 'AI Generated Art 10', ratio: '16/9' },
  { src: '/MALEARRCHITECT.jpg', alt: 'AI Generated Art 4', ratio: '9/16' },
  { src: '/cup_tsunami.png', alt: 'AI Generated Art 5', ratio: '1/1' },
  { src: '/fatcat.jpg', alt: 'AI Generated Art 6', ratio: '16/9' },
  { src: '/Imagine_a_wide-angle_shot_of_a_bustling_Mumbai_street_with_the_iconic_Gateway_of__qB6qtYK.png', alt: 'AI Generated Art 7', ratio: '4/3' },
]

export default function ImageGrid() {
  const [failedImages, setFailedImages] = useState<{ [key: number]: boolean }>({})
  const [displayCount, setDisplayCount] = useState(10)
  const [loading, setLoading] = useState(false)

  const handleImageError = (index: number) => {
    setFailedImages(prev => ({ ...prev, [index]: true }))
  }

  const handleLoadMore = () => {
    setLoading(true)
    setTimeout(() => {
      setDisplayCount(prev => Math.min(prev + 30, collageImages.length))
      setLoading(false)
    }, 500)
  }

  return (
    <section className="py-12 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mb-8 [&:has(*:hover)>*:not(:hover)]:brightness-[0.35] [&:has(*:hover)>*:not(:hover)]:scale-[0.97]">
          {collageImages.slice(0, displayCount).map((image, index) => {
            const imageFailed = failedImages[index]
            
            return (
              <div
                key={index}
                className={`relative group rounded-lg overflow-hidden break-inside-avoid transition-all duration-300 
                  hover:shadow-[0_0_30px_rgba(235,99,19,0.9),0_0_30px_rgba(255,99,99,0.6)] hover:z-10 hover:brightness-110
                  peer ${imageFailed ? 'border border-white/20' : ''}`}
                style={{ aspectRatio: image.ratio }}
              >
                <div className={`absolute inset-0 transition-shadow duration-300 
                  ${imageFailed ? '' : 'group-hover:shadow-lg group-hover:shadow-red-500/50'}`}
                />
                {!imageFailed && (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-all duration-300 group-hover:scale-110 peer-hover:brightness-50"
                    onError={() => handleImageError(index)}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            )
          })}
        </div>

        {displayCount < collageImages.length && (
          <div className="flex justify-center">
            <Button 
              onClick={handleLoadMore}
              disabled={loading}
              className="bg-gradient-to-r from-red-600/20 via-red-500/20 to-red-600/20 
                hover:from-red-600/40 hover:via-yellow-500/40 hover:to-red-600/40 
                text-red-300 border border-red-600/50 font-medium px-10 py-7 text-2xl 
                shadow-yellow-500/20 hover:shadow-red-500/40 shadow-lg 
                transition-all duration-300 hover:-translate-y-0.5 
                hover:border-red-500/70 flex items-center gap-4
                rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Loading...' : 'See More'}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
