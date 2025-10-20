'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden navy-gradient">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="mb-8"
          >
            <div className="relative w-full max-w-4xl mx-auto" style={{ height: '280px' }}>
              <Image
                src="/images/logo-final.svg"
                alt="Code Foundry - Binary Born. Human Designed."
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="body-lg text-white/90 mb-8 max-w-3xl mx-auto"
          >
            Full-stack development with production-grade architecture, optimized performance,
            and maintainable codebases built on modern frameworks
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-1">Next.js</div>
              <div className="text-white/70 text-sm">React Framework</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-1">90+</div>
              <div className="text-white/70 text-sm">Lighthouse Target</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-1">Native</div>
              <div className="text-white/70 text-sm">iOS & Android</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2 group"
            >
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gold rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}
