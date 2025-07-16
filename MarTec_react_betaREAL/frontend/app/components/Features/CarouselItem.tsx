'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface CarouselItemProps {
  image: string;
  title: string;
  description: string;
  inView: boolean;
  index: number;
  activeIndex: number;
  total: number;
  isDummy?: boolean;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ 
  image, 
  title, 
  description, 
  index,
  activeIndex,
  isDummy = false
}) => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [hasInitialized, setHasInitialized] = useState(false);
  const isPrevious = index < activeIndex;
  const isNext = index > activeIndex;
  const isFirst = index === 0;
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    setWindowHeight(window.innerHeight);
    const timer = setTimeout(() => setHasInitialized(true), 100);
    return () => clearTimeout(timer);
  }, []);

  let scale = 1;
  let yOffset = 0;

  if (isPrevious) {
    const distance = activeIndex - index;
    // Consistently decrease scale with distance
    scale = 1 - (distance * 0.05);
    yOffset = -30 * distance;
  } else if (isNext) {
    scale = 1; // Keep next slides at scale 1
    yOffset = windowHeight;
  } else {
    scale = 1; // Keep current slide at scale 1
  }

  // For dummy card, don't render any content
  if (isDummy) {
    return <div className="w-full h-full" />;
  }

  return (
    <div className="w-full h-full flex items-center justify-center px-4 md:px-8">
      <div className="relative w-full md:w-[80%] max-w-6xl flex flex-col md:flex-row items-center gap-12 md:gap-8">
        {/* Image Card with stacking effect */}
        <motion.div 
          className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex-shrink-0"
          initial={isFirst ? false : { y: windowHeight, scale: 1 }}
          animate={{ 
            scale,
            y: (!hasInitialized && isFirst) ? 0 : yOffset,
          }}
          transition={{ 
            duration: (!hasInitialized && isFirst) ? 0 : 0.5,
            ease: [0.23, 1, 0.32, 1]
          }}
        >
          <div className={`w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-black
            ${isPrevious ? 'blur-[0.5px]' : ''}`}
          >
            <div className="relative w-full h-full">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 300px, 500px"
                priority={isFirst}
              />
            </div>
          </div>
        </motion.div>

        <div className="flex-1 p-4 md:p-8 mt-8 md:mt-0">
          {/* Description - only visible for active card */}
          {index === activeIndex && (
            <motion.div 
              initial={isFirst ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: (!hasInitialized && isFirst) ? 0 : 0.5 }}
            >
              <motion.h2 
                className="text-2xl md:text-5xl font-bold mb-3 md:mb-6 text-white"
              >
                {title}
              </motion.h2>
              <motion.p 
                className="text-base md:text-lg text-gray-300 leading-relaxed"
              >
                {description}
              </motion.p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
