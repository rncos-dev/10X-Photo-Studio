'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Navbar() {

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-lg border-b border-white/10"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl font-bold bg-gradient-to-r from-red-400 to-yellow-600 bg-clip-text text-transparent"
          >
            <Image src="/icon.png" alt="Logo" className="inline-block" width={60} height={60} style={{marginBottom: '5px'}}/>
            10X Photo Studio
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8 mr-32">
            {['Home','Gallery', 'Features', 'Blog'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                variant="ghost" 
                className="text-gray-300 hover:text-black"
                onClick={() => window.location.href = 'https://one0xphoto-studio.onrender.com'}
              >
                Sign In
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
