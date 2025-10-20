'use client'

import { motion } from 'framer-motion'
import { Search, Target, Palette, Code, Rocket, HeadphonesIcon } from 'lucide-react'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discovery',
    description: 'Understanding your vision & goals',
    details: 'Deep dive into your brand, audience, and objectives',
  },
  {
    icon: Target,
    number: '02',
    title: 'Strategy',
    description: 'Roadmap with clear milestones',
    details: 'Detailed project plan with timelines and deliverables',
  },
  {
    icon: Palette,
    number: '03',
    title: 'Design',
    description: 'Modern UI/UX concepts',
    details: 'Multiple design iterations until perfection',
  },
  {
    icon: Code,
    number: '04',
    title: 'Development',
    description: 'Clean, scalable code',
    details: 'Built with best practices and future-proof technology',
  },
  {
    icon: Rocket,
    number: '05',
    title: 'Launch',
    description: 'Smooth deployment & training',
    details: 'Comprehensive handoff with documentation',
  },
  {
    icon: HeadphonesIcon,
    number: '06',
    title: 'Support',
    description: '60-day priority assistance',
    details: 'Ongoing support to ensure your success',
  },
]

const reassurancePoints = [
  'Weekly check-ins and progress updates',
  'Unlimited revisions until perfection',
  'Full code ownership, no vendor lock-in',
]

export default function Process() {
  return (
    <section id="process" className="section-padding bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">
            You're in Safe Hands
          </h2>
          <p className="body-lg text-white/70 max-w-2xl mx-auto">
            A proven process refined over 50+ successful projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-gold rounded-full flex items-center justify-center font-bold text-navy">
                  {step.number}
                </div>

                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-gold" />
                </div>

                <h3 className="heading-sm mb-2">
                  {step.title}
                </h3>
                <p className="text-white/70 mb-3">
                  {step.description}
                </p>
                <p className="text-sm text-white/50">
                  {step.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gold/10 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 max-w-3xl mx-auto"
        >
          <h3 className="heading-sm mb-6 text-center">Your Peace of Mind</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {reassurancePoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-navy text-sm font-bold">✓</span>
                </div>
                <p className="text-white/90">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
