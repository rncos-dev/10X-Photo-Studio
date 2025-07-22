'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

// Initial 10 images
const collageImages = [
  { src: '/blended_with_mask_1 (1).png', alt: 'AI Generated Art 1', ratio: '1/1' },
  { src: '/blended_with_mask_2.png', alt: 'AI Generated Art 2', ratio: '1/1' },
  { src: '/blended_with_mask_3.png', alt: 'AI Generated Art 3', ratio: '4/4' },
  { src: '/coconut2.jpg', alt: 'AI Generated Art 1', ratio: '768/960' },
  { src: '/blended_with_mask_4.png', alt: 'AI Generated Art 4', ratio: '9/16' },
  { src: '/blended_with_mask_5.png', alt: 'AI Generated Art 5', ratio: '1/1' },
  { src: '/blended_with_mask_6.png', alt: 'AI Generated Art 6', ratio: '16/9' },
  { src: '/coconut1.jpg', alt: 'AI Generated Art 8', ratio: '768/960' },
  { src: '/lavender1.jpg', alt: 'AI Generated Art 9', ratio: '9/16' },
  { src: '/image (22).png', alt: 'AI Generated Art 10', ratio: '896/1152' },
  { src: '/blended_with_mask_7.png', alt: 'AI Generated Art 7', ratio: '1/1' },
  { src: '/lavender2.jpg', alt: 'AI Generated Art 2', ratio: '1/1' },
  { src: '/blended_with_mask_9.png', alt: 'AI Generated Art 6', ratio: '1/1' },
  { src: '/blended_with_mask_8.png', alt: 'AI Generated Art 2', ratio: '1/1' },
  { src: '/abstract.png', alt: 'AI Generated Art 3', ratio: '4/4' },
  { src: '/angledcitrus.png', alt: 'AI Generated Art 5', ratio: '1/1' },
  { src: '/angledcloth.png', alt: 'AI Generated Art 6', ratio: '1/1' },
  { src: '/angledleaves.png', alt: 'AI Generated Art 1', ratio: '768/960' },
  { src: '/angledmist.png', alt: 'AI Generated Art 7', ratio: '1/1' },
  { src: '/lemons.png', alt: 'AI Generated Art 8', ratio: '768/960' },
  { src: '/mulitiplearch.png', alt: 'AI Generated Art 9', ratio: '10/15' },
  { src: '/multiplerain.png', alt: 'AI Generated Art 10', ratio: '896/1152' },
  { src: '/bubbles.png', alt: 'AI Generated Art 2', ratio: '1/1' },
  { src: '/bubbles2.png', alt: 'AI Generated Art 2', ratio: '1/1' },
  { src: '/cloth.png', alt: 'AI Generated Art 2', ratio: '1/1' },
  { src: '/123.webp', alt: 'AI Generated Art 2', ratio: '512/512' },
  { src: '/florarose.png', alt: 'AI Generated Art 2', ratio: '1/1' },
  { src: '/lavender.png', alt: 'AI Generated Art 2', ratio: '1/1' },
  { src: '/mist.png', alt: 'AI Generated Art 2', ratio: '1/1' },
  { src: '/sand.png', alt: 'AI Generated Art 2', ratio: '1/1' },
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
