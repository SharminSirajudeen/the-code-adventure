'use client'

import { motion } from 'framer-motion'
import { Briefcase, Award, Target, Heart } from 'lucide-react'

const highlights = [
  {
    icon: Briefcase,
    text: 'End-to-end system architecture',
  },
  {
    icon: Award,
    text: 'TypeScript, React, Node.js, Swift, Kotlin',
  },
  {
    icon: Target,
    text: 'Sub-second response times',
  },
  {
    icon: Heart,
    text: 'SOLID principles & DRY code',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-navy to-navy/80 flex items-center justify-center overflow-hidden shadow-2xl">
                <div className="w-32 h-32 rounded-full bg-gold/20 flex items-center justify-center mx-auto">
                  <span className="text-6xl text-gold">👤</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-gold/10 text-gold px-4 py-1 rounded-full text-sm font-medium mb-4">
              Full-Stack Engineer
            </div>

            <h2 className="heading-lg text-navy mb-6">
              Building Production-Grade
              <span className="block text-gold">Software Systems</span>
            </h2>

            <div className="space-y-4 mb-8 text-charcoal/80 leading-relaxed">
              <p>
                I architect and build scalable web and mobile applications with modern frameworks and infrastructure.
                My focus is on maintainable codebases, optimized runtime performance, and developer experience.
              </p>

              <p>
                From requirements analysis to CI/CD pipelines—I handle the full stack.
                Each system is designed with proper separation of concerns, type safety, and comprehensive testing.
              </p>

              <p className="font-medium text-navy">
                Whether you need a React SPA, native iOS/Android apps, or backend APIs with database architecture,
                I deliver production-ready code with documentation and monitoring.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-sm text-charcoal">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
