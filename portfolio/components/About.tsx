'use client'

import { motion } from 'framer-motion'
import { Code2, Layers, Zap, Shield } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    text: 'Modern tech stack expertise',
  },
  {
    icon: Layers,
    text: 'Full-stack architecture',
  },
  {
    icon: Zap,
    text: 'Performance-first engineering',
  },
  {
    icon: Shield,
    text: 'Production-grade reliability',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block bg-gold/10 text-gold px-4 py-1 rounded-full text-sm font-medium mb-6">
              About Code Foundry
            </div>

            <h2 className="heading-lg text-navy mb-8">
              Binary Born. <span className="text-gold">Human Designed.</span>
            </h2>

            <div className="space-y-6 mb-12 text-charcoal/80 leading-relaxed text-lg">
              <p>
                We architect and build scalable software systems with modern frameworks and infrastructure.
                Our focus is on maintainable codebases, optimized runtime performance, and exceptional developer experience.
              </p>

              <p>
                From requirements analysis to CI/CD pipelines—we handle the full stack.
                Every system is designed with proper separation of concerns, type safety, and comprehensive testing.
              </p>

              <p className="font-medium text-navy">
                Whether you need a React SPA, native iOS/Android apps, or backend APIs with database architecture,
                we deliver production-ready code with documentation and monitoring.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl bg-navy/5 hover:bg-gold/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <span className="text-sm text-center text-charcoal font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
