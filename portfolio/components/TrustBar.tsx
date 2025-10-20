'use client'

import { motion } from 'framer-motion'
import { Code2, Smartphone, Zap, Shield } from 'lucide-react'

const trustItems = [
  { icon: Code2, text: 'Full-Stack Development' },
  { icon: Smartphone, text: 'iOS & Android Native' },
  { icon: Zap, text: 'Performance Focused' },
  { icon: Shield, text: 'Secure & Reliable' },
]

export default function TrustBar() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-gold" />
              </div>
              <p className="text-sm md:text-base font-medium text-charcoal">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
