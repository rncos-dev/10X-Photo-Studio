'use client';

import React, { useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamically import CarouselItem with no SSR
const CarouselItem = dynamic(() => import('./CarouselItem'), {
  ssr: false
});

interface CarouselData {
  image: string;
  title: string;
  description: string;
  isDummy?: boolean;
}

const carouselData: CarouselData[] = [
  {
    image: '/inputMessage_inputMessage_Imagine_a_vibrant_and_eye-catching_scene_in_the_heart_o_epEdilf.png',
    title: 'Low-Cost, High-Volume Creative Generation',
    description: 'Produce a vast quantity of high-quality creative assets efficiently, maximizing ROI without breaking your budget.',
  },
  {
    image: '/cup_tsunami.png',
    title: 'Fast Turnaround Time',
    description: 'Receive content swiftly, often within 24–48 hours, ensuring you meet tight deadlines and respond quickly to market trends.',
  },
  {
    image: '/Imagine_a_wide-angle_shot_of_a_bustling_Mumbai_street_with_the_iconic_Gateway_of__qB6qtYK.png',
    title: 'Consistent Brand Alignment',
    description: 'Every piece of content perfectly matches your brand’s voice, visual identity, and messaging for cohesive communication.',
  },
  {
    image: '/Imagine_an_enchanting_animated_close-up_of_Lord_Ganesha_the_beloved_deity_of_wisd_jPIpBUh.png',
    title: 'Scalability for Growing Content Needs',
    description: 'Effortlessly expand your content output as your business grows, with flexible solutions adapting to increasing demands seamlessly.',
  },
  // {
  //   image: '/oneclickposting2.gif',
  //   title: 'One Click Posting!',
  //   description: 'All social media pages, One click away',
  // },
  // {
  //   image: '/Create_an_image_from_a_close-up_angle_to_showcase_a_gourmet_baklava._Focus_on_the_IXia97k.png',
  //   title: 'Rapid Generation',
  //   description: 'Get instant results with our lightning-fast AI. Generate multiple variations and iterations of your concept in seconds.',
  // },
  // Dummy card for smooth transition at the end
  {
    image: '',
    title: '',
    description: '',
    isDummy: true
  }
];

interface CarouselSlideProps {
  item: CarouselData;
  index: number;
  activeIndex: number;
  total: number;
  isInSection: boolean;
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({ item, index, activeIndex, total, isInSection }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: "-45% 0px -45% 0px",
    once: false
  });

  return (
    <div 
      ref={ref}
      className="absolute w-full h-full"
      style={{ 
        zIndex: index <= activeIndex ? total - (activeIndex - index) : 0,
      }}
    >
      <CarouselItem
        image={item.image}
        title={item.title}
        description={item.description}
        inView={isInView && isInSection}
        index={index}
        activeIndex={activeIndex}
        total={total}
        isDummy={item.isDummy}
      />
    </div>
  );
};

function FeaturesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState<'start' | 'scrolling' | 'end'>('start');
  const [isInSection, setIsInSection] = useState(true);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const isMobile = dimensions.width < 768;
      
      // Calculate total scroll height and current progress
      const totalHeight = (carouselData.length) * (isMobile ? dimensions.height * 1.2 : dimensions.height);
      const scrollProgress = Math.max(0, -rect.top);
      const scrollPercentage = (scrollProgress / (totalHeight - dimensions.height)) * 100;
      
      // Check if we're in the carousel section
      const isInView = rect.top <= dimensions.height && rect.bottom >= -dimensions.height;
      setIsInSection(isInView);
      
      // Determine scroll state
      if (scrollProgress <= 0) {
        setScrollState('start');
      } else if (scrollPercentage >= 100) {
        setScrollState('end');
      } else {
        setScrollState('scrolling');
        
        // Calculate active index based on scroll position
        const newIndex = Math.floor(scrollProgress / (isMobile ? dimensions.height * 1.2 : dimensions.height));
        if (newIndex !== activeIndex && newIndex < carouselData.length) {
          setActiveIndex(newIndex);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex, dimensions]);

  // Calculate progress percentage based on non-dummy cards
  const progress = (activeIndex / (carouselData.length - 2)) * 100;

  const getCarouselStyles = () => {
    switch (scrollState) {
      case 'start':
        return 'relative top-0';
      case 'scrolling':
        return 'fixed top-0';
      case 'end':
        return 'absolute bottom-0';
      default:
        return 'relative';
    }
  };

  return (
    <div className="relative -mt-12 md:mt-0">
      {/* Main container that provides scroll height */}
      <div 
        ref={containerRef} 
        className="relative w-full bg-black"
        style={{ height: `${carouselData.length * (dimensions.width < 768 ? 120 : 100)}vh` }}
      >
        {/* Carousel content container */}
        <motion.div 
          className={`left-0 w-full h-screen ${getCarouselStyles()} transition-[top] duration-300 overflow-hidden`}
          style={{ 
            zIndex: scrollState === 'scrolling' ? 10 : 1,
          }}
          animate={{
            opacity: isInSection ? 1 : 0
          }}
          transition={{
            opacity: { duration: 0.3 }
          }}
        >
          {/* Fixed header with Progress Bar for mobile */}
          <div className="absolute top-0 left-0 w-full z-20 bg-gradient-to-b from-black/80 to-transparent pt-4 pb-8">
            <div className="container mx-auto px-4">
              <motion.h2 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={isInSection ? "visible" : "hidden"}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-bold text-white text-center mb-16 md:mb-12 mt-24"
                style={{ textShadow: '0px 6px 50px white' }}
              >
                Features
              </motion.h2>
              
              {/* Progress Bar - Mobile (Top) */}
              <div className="md:hidden w-full flex justify-center mb-8">
                <div className="w-48 h-2 rounded-full bg-gray-800/50 overflow-hidden">
                  <motion.div 
                    className="h-full rounded-full origin-left bg-gradient-to-r from-red-500 via-yellow-500 to-yellow-600"
                    initial={false}
                    animate={{ scaleX: Math.min(progress / 100, 1) }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full h-full flex items-center justify-center translate-y-[11vh] md:translate-y-[11vh]">
            {/* Progress Bar - Desktop (Side) */}
            <div className="hidden md:block absolute top-1/2 left-[calc(32.8%+250px+2rem)] -translate-y-[140px] z-50">
              <div className="w-48 h-2 rounded-full bg-gray-800/50 overflow-hidden">
                <motion.div 
                  className="h-full rounded-full origin-left bg-gradient-to-r from-red-500 via-yellow-500 to-yellow-600"
                  initial={false}
                  animate={{ scaleX: Math.min(progress / 100, 1) }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </div>
            </div>

            {carouselData.map((item, index) => (
              <CarouselSlide
                key={index}
                item={item}
                index={index}
                activeIndex={activeIndex}
                total={carouselData.length}
                isInSection={isInSection}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Export a version that's always client-side
export default dynamic(() => Promise.resolve(FeaturesCarousel), {
  ssr: false
});
