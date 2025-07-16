'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage, FormLabel } from '@/components/ui/form'
import { CheckCircle2, Send, User, Mail, MessageSquare } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(1, { message: 'Name is required.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  query: z.string().min(1, { message: 'Query is required.' }),
})

const BackgroundGradient = () => (
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-black/30 to-pink-900/20 animate-gradient" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_70%)]" />
  </div>
)

const FloatingOrbs = () => {
  return (
    <div className="absolute inset-[-50px] z-[1] overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-yellow-500/10 to-pink-500/10 blur-xl"
          style={{
            width: `${Math.random() * 400 + 200}px`,
            height: `${Math.random() * 400 + 200}px`,
          }}
          animate={{
            x: [
              -100 + Math.random() * 400,
              -100 + Math.random() * 400,
            ],
            y: [
              -100 + Math.random() * 200,
              -100 + Math.random() * 200,
            ],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

const SparkleEffect = () => {
  return (
    <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
      {/* Small sparkles */}
      {Array.from({ length: 80 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-[2px] h-[2px] rounded-full bg-gradient-to-r from-yellow-400 via-pink-400 to-yellow-400"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
            times: [0, 0.5, 1],
            repeatDelay: Math.random() * 2
          }}
        />
      ))}
      
      {/* Additional larger sparkles */}
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={`sparkle-large-${i}`}
          className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-yellow-300 via-pink-300 to-yellow-300"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 2, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
            times: [0, 0.5, 1],
            repeatDelay: Math.random() * 2
          }}
        />
      ))}

      {/* Twinkling stars effect */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={`twinkle-${i}`}
          className="absolute rounded-full bg-gradient-to-r from-white via-yellow-200 to-pink-200"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 1 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
            repeatDelay: Math.random()
          }}
        />
      ))}
    </div>
  )
}

export default function QueryForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      query: '',
    },
  });

  type FormValues = {
    email: string;
    name: string;
    query: string;
  };

  async function onSubmit(values: FormValues) {
    try {
      const response = await fetch("https://martech-sign-in-hgui.onrender.com/api/submit/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const errors = await response.json();
        console.error("Form submission error:", errors);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  }
  

  return (
    <section className="relative w-screen min-h-screen overflow-hidden bg-black">
      {/* Background Effects */}
      <BackgroundGradient />
      <FloatingOrbs />
      <SparkleEffect />

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full flex flex-col md:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-24 py-12 md:py-20"
        >
          {/* Left section: Heading and description */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              type: "spring",
              bounce: 0.4,
            }}
            className="text-white w-full md:w-[25%] text-center md:text-left"
            style={{ textShadow: '0px 6px 80px white' }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight">
              Having Second Thoughts?
            </h2>
            <p className="text-lg md:text-2xl text-gray-300 mt-6">
              Let us assist you in resolving your queries!
            </p>
          </motion.div>

          {/* Right section: Form */}
          <div className="w-full md:w-[40%] px-4 relative z-20">
            {!isSubmitted ? (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="w-full space-y-6 p-8 rounded-xl shadow-2xl backdrop-blur-md"
                  style={{
                    background:
                      'linear-gradient(to bottom right, rgba(135, 60, 28, 0.16), rgba(198, 135, 46, 0))',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <div className="flex-grow space-y-4 md:space-y-5 w-full">
                  <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white text-base md:text-lg font-medium mb-1.5 flex items-center gap-2">
                            <User className="h-5 w-5" /> Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Your Name"
                              className="w-full text-white border-2 border-orange-800/30 focus:ring-4 focus:ring-white-600 focus:border-white-600 rounded-md p-2.5 md:p-3 text-md transition-all duration-300 ease-in-out bg-white/20 placeholder:text-gray-300"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white text-base md:text-lg font-medium mb-1.5 flex items-center gap-2">
                            <Mail className="h-5 w-5" /> Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="your@email.com"
                              type="email"
                              className="w-full text-white border-2 border-orange-800/30 focus:ring-4 focus:ring-pink-600 focus:border-pink-600 rounded-md p-2.5 md:p-3 text-md transition-all duration-300 ease-in-out bg-white/20 placeholder:text-gray-300"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="query"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white text-base md:text-lg font-medium mb-1.5 flex items-center gap-2">
                            <MessageSquare className="h-5 w-5" /> Your Query
                          </FormLabel>
                          <FormControl>
                            <textarea
                              {...field}
                              placeholder="Describe your idea or question..."
                              rows={4}
                              className="w-full text-white border-2 border-orange-800/30 focus:ring-4 focus:ring-pink-600 focus:border-pink-600 rounded-md p-2.5 md:p-3 text-md transition-all duration-300 ease-in-out bg-white/20 placeholder:text-gray-300 min-h-[100px] md:min-h-[120px] resize-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full mt-6 bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-500 hover:to-pink-500 text-white py-3 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:gap-3"
                  >
                    <Send className="h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </Form>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center text-white"
              >
                <CheckCircle2 className="mx-auto text-green-500 text-6xl" />
                <h3 className="text-2xl mt-6">Thank you for your submission!</h3>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
