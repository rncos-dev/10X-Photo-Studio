'use client'

import { motion } from 'framer-motion'

const stats = [
  { label: 'AI IMAGES GENERATED', value: '200+' },
  { label: 'YOUR REVENUE', value: '10x' },
  { label: 'SOCIAL MEDIA PLATFORMS', value: '5+' },
  { label: 'ELIGIBLE COUNTRIES', value: '100+' },
]

export default function StatsCounter({ inView }: { inView: boolean }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className="text-center opacity-85 hover:opacity-100 transition-opacity"
        >
          <motion.div
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 }
            }}
            transition={{ type: "spring", stiffness: 80, delay: index * 0.2 }}
            className="text-4xl md:text-5xl font-medium text-white-500 dark:text-gray-300/80 mb-2"
          >
            {stat.value}
          </motion.div>
          <p className="text-gray-400 dark:text-gray-400/70 text-sm">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  )
}

