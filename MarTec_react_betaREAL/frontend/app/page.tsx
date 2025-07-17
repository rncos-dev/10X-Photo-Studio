'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Search, Sparkles, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import dynamic from 'next/dynamic';

// Dynamically import components that use window
const FloatingImages = dynamic(() => import('./components/FloatingImages'), {
  ssr: false,
  loading: () => <div className="min-h-screen" /> // Placeholder while loading
});

const ImageGrid = dynamic(() => import('./components/ImageGrid'), {
  ssr: false,
  loading: () => <div className="min-h-screen" />
});

const FeaturesCarousel = dynamic(() => import('./components/Features/Carousel'), {
  ssr: false,
  loading: () => <div className="min-h-screen" />
});

const StatsCounter = dynamic(() => import('./components/StatsCounter'), {
  ssr: false,
  loading: () => <div className="min-h-screen" />
});

const Navbar = dynamic(() => import('./components/Navbar'), {
  ssr: false,
  loading: () => <div className="min-h-screen" />
});

const QueryForm = dynamic(() => import('./components/QueryForm'), {
  ssr: false,
  loading: () => <div className="min-h-screen" />
});

const DiscordCommunityCard = dynamic(() => import('./components/DiscordCommunity'), {
  ssr: false,
  loading: () => <div className="min-h-screen" />
});

const UseCases = dynamic(() => import('./components/UseCases'), {
  ssr: false,
  loading: () => <div className="min-h-screen" />
});

// Custom Typing Component
const TypingText = ({ 
  text, 
  className, 
  delay = 0 
}: { 
  text: string, 
  className?: string, 
  delay?: number 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  useEffect(() => {
    let isMounted = true;
    const timer = setTimeout(() => {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (isMounted) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
          
          if (currentIndex === text.length) {
            clearInterval(typingInterval);
            setIsTypingComplete(true);
          }
        }
      }, 30); // Increased speed - now types much faster
      
      return () => {
        clearInterval(typingInterval);
      };
    }, delay);
    
    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [text, delay]);
  
  return (
    <span className={className}>
      {displayedText}
      {!isTypingComplete && (
        <motion.span 
          animate={{ opacity: [1, 0] }}
          transition={{ 
            duration: 0.5, 
            repeat: Infinity, 
            repeatType: 'reverse' 
          }}
          className="inline-block ml-1 w-1 h-6 bg-white"
        />
      )}
    </span>
  );
};

export default function HomePage() {
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 })

  const showcaseRef = useRef(null)
  const showcaseInView = useInView(showcaseRef, { once: true, amount: 0.3 })

  const featuresRef = useRef(null)

  const discordRef = useRef(null)
  const discordInView = useInView(discordRef, { once: true, amount: 0.3 })

  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 })

  const queryFormRef = useRef(null)
  const queryFormInView = useInView(queryFormRef, { once: true, amount: 0.3 })

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <main>
        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <FloatingImages />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-black/40 to-black backdrop-blur-1.2px" />
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-yellow-900/20 via-black/40 to-black backdrop-blur-[1px]">
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-800 to-red-500"
            >
              <TypingText 
                text="Dream it. Create it." 
                className="block"
                delay={500}
              />
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
            >
              <TypingText 
                text="Transform your imagination into stunning visuals with our advanced AI Photo Studio platform" 
                className="block"
                delay={2000}
              />
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative max-w-2xl mx-auto"
            >
              <div className="relative flex items-center">
                <Input
                  type="text"
                  placeholder="Describe your imagination..."
                  className="w-full h-14 pl-12 pr-32 rounded-full bg-white/10 backdrop-blur-xl border-yellow-500/50 text-white placeholder:text-gray-400"
                />
                <Search className="absolute left-4 h-5 w-5 text-gray-400" />
                <Button 
                  className="absolute right-2 bg-gradient-to-r from-red-600 to-yellow-600 hover:from-yellow-600 hover:to-red-600 rounded-full px-6"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.location.href = 'https://martechdev.onrender.com/';
                    }
                  }}
                >
                  Create <Sparkles className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <section ref={statsRef} className="py-20 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-black" />
          <div className="container mx-auto px-4 relative">
            <StatsCounter inView={statsInView} />
          </div>
        </section>

        {/* Use Cases Section */}
        <UseCases />

        {/* Carousel Section */}
        <section ref={featuresRef} className="py-20 pb-8 bg-black relative" id="features">
          <FeaturesCarousel />
        </section>

        {/* Image Grid Showcase */}
        <section ref={showcaseRef} className="py-0 bg-black relative -mt-24" id="gallery">
          <div className="container mx-auto px-4">
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={showcaseInView ? "visible" : "hidden"}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-center mt-16 mb-10"
              style={{ textShadow: '0px 6px 50px white' }}
              
            >
              Endless Possibilities
            </motion.h2>
            <ImageGrid/>
          </div>
        </section>

        {/* Discord Community Section */}
        <section ref={discordRef} className="md:mr-24 md:ml-24 justify-center py-20 bg-black relative overflow-hidden" id="discord">
          <div className="absolute inset-0 bg-black" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={discordInView ? "visible" : "hidden"}
              transition={{ duration: 0.8 }}
            >
              <DiscordCommunityCard />
            </motion.div>
          </div>
        </section>

        {/* Query Form Section */}
        <section className="py-0 bg-gradient-to-b from-black-900 to-black relative">
          <div className="absolute inset-0 bg-black/50" />
          <div className="container mx-0 px-0 relative">
            <motion.div
              ref={queryFormRef}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={queryFormInView ? "visible" : "hidden"}
              transition={{ duration: 0.8 }}
            >
              <QueryForm />
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <section ref={ctaRef} className="py-20 bg-gradient-to-r from-black-900 to-yellow-900 relative">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="container mx-auto px-6 relative">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={ctaInView ? "visible" : "hidden"}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Ready to Bring Your Ideas to Life?
              </motion.h2>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={ctaInView ? "visible" : "hidden"}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl text-gray-300 mb-8"
              >
                Join thousands of creators and start generating stunning AI art today.
              </motion.p>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={ctaInView ? "visible" : "hidden"}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button size="lg" className="bg-white text-lg text-purple-900 hover:bg-gray-100"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.location.href = 'https://martechdev.onrender.com/';
                    }
                  }}
                >
                  Get Started for Free <ArrowRight className="ml-2 large-arrow"/>
                </Button>
              </motion.div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </section>
      </main>
    </div>
  )
}
