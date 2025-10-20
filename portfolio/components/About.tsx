'use client'

import { motion } from 'framer-motion'
import { Briefcase, Award, Target, Heart } from 'lucide-react'

const highlights = [
  {
    icon: Briefcase,
    text: 'Full-stack development expertise',
  },
  {
    icon: Award,
    text: 'Modern tech stack (Next.js, React, Native)',
  },
  {
    icon: Target,
    text: 'Performance-focused approach',
  },
  {
    icon: Heart,
    text: 'Passionate about clean code',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Placeholder for professional photo */}
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-navy to-navy/80 flex items-center justify-center overflow-hidden shadow-2xl">
                <div className="text-center p-8">
                  <div className="w-32 h-32 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-6xl text-gold">👤</span>
                  </div>
                  <p className="text-white/70 text-sm">
                    Replace with your professional headshot
                    <br />
                    Recommended: 800x800px minimum
                  </p>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-gold/10 text-gold px-4 py-1 rounded-full text-sm font-medium mb-4">
              Your Digital Partner
            </div>

            <h2 className="heading-lg text-navy mb-6">
              Building Quality
              <span className="block text-gold">Digital Solutions</span>
            </h2>

            <div className="space-y-4 mb-8 text-charcoal/80 leading-relaxed">
              <p>
                I specialize in building modern web and mobile applications using the latest
                technologies and best practices. My focus is on clean, maintainable code that
                performs well and delivers a great user experience.
              </p>

              <p>
                Every project gets my full attention—from initial planning through deployment
                and beyond. I work closely with clients to understand their needs and deliver
                solutions that meet their goals.
              </p>

              <p className="font-medium text-navy">
                Whether it's a responsive website, native mobile app, or custom CMS, I'm committed
                to delivering quality work on time and within budget.
              </p>
            </div>

            {/* Highlights */}
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
