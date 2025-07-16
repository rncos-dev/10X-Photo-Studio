'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const plans = [
  {
    name: 'Starter',
    price: '$9.99/month',
    features: [
      '100 AI image generations',
      'Basic editing tools',
      'Standard resolution output',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    price: '$24.99/month',
    features: [
      '500 AI image generations',
      'Advanced editing tools',
      'High resolution output',
      'Priority email support',
      'API access',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom pricing',
    features: [
      'Unlimited AI image generations',
      'Full suite of editing tools',
      'Ultra-high resolution output',
      '24/7 dedicated support',
      'Custom API integration',
      'Branded AI model training',
    ],
  },
]

export default function SubscriptionPlans({ inView }: { inView: boolean }) {
  return (
    <section className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black" />
      <div className="container mx-auto px-4 relative">
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Choose Your Plan
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-colors"
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

