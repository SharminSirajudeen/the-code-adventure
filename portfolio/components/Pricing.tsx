'use client'

import { motion } from 'framer-motion'
import { CheckCircle, MessageSquare } from 'lucide-react'

export default function Pricing() {
  return (
    <section className="section-padding bg-offWhite">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="heading-lg text-navy mb-4">
              Project Approach
            </h2>
            <p className="body-lg text-charcoal/70">
              Flexible pricing based on your specific needs and project scope
            </p>
          </div>

          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="card bg-navy text-white text-center mb-8"
          >
            <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-10 h-10 text-gold" />
            </div>
            <h3 className="heading-md mb-4">
              Let's Discuss Your Project
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Every project is unique. Pricing depends on scope, timeline, and specific requirements.
              Contact me for a detailed quote tailored to your needs.
            </p>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Get a Quote
            </a>
          </motion.div>

          {/* What's included */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-sm"
          >
            <h3 className="heading-sm text-navy mb-6 text-center">
              Standard Inclusions
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Custom design tailored to your brand',
                'Mobile-responsive development',
                'Performance optimization',
                'SEO best practices',
                'Clean, maintainable code',
                'Analytics integration',
                'Post-launch support',
                'Full code ownership',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
