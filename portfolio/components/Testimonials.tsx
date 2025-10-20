'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    quote: "We interviewed 5 agencies before choosing this developer. The attention to detail and understanding of our luxury positioning made the decision easy. Our website has become our best salesperson.",
    author: 'James Morrison',
    role: 'Managing Director',
    company: 'BBE Developments',
    rating: 5,
  },
  {
    quote: "Delivered on time, on budget, and exceeded expectations. The visual CMS saves us hours every week. Best investment we made this year.",
    author: 'Sarah Chen',
    role: 'Marketing Director',
    company: 'Prestige Hospitality Group',
    rating: 5,
  },
  {
    quote: "Professional, responsive, and genuinely cares about results. Not just a developer—a true digital partner.",
    author: 'David Kumar',
    role: 'CEO',
    company: 'Elite Consultancy',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-offWhite">
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-navy mb-4">
            Trusted by Leaders
          </h2>
          <p className="body-lg text-charcoal/70 max-w-2xl mx-auto">
            Don't just take my word for it—hear from clients who've experienced the difference
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                  <Quote className="w-6 h-6 text-navy" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 pt-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-charcoal mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-navy">{testimonial.author}</p>
                <p className="text-sm text-charcoal/70">{testimonial.role}</p>
                <p className="text-sm text-gold font-medium">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional trust indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-charcoal font-semibold">5.0 Average Rating</span>
            <span className="text-charcoal/50">•</span>
            <span className="text-charcoal/70">50+ Projects</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
