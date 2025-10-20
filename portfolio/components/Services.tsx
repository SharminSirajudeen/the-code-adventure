'use client'

import { motion } from 'framer-motion'
import { Globe, Database, Search, Smartphone, FileText, Zap, Eye, BarChart } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    outcome: 'Next.js, React, TypeScript',
    description: 'Modern, responsive websites built with latest web technologies and best practices',
  },
  {
    icon: Database,
    title: 'Content Management Systems',
    outcome: 'Custom CMS or Headless Solutions',
    description: 'User-friendly admin panels with visual editing capabilities for easy content updates',
  },
  {
    icon: Search,
    title: 'SEO & Performance',
    outcome: 'Technical SEO, Meta Tags, Sitemaps',
    description: 'Search engine optimization focused on page speed, schema markup, and Core Web Vitals',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    outcome: 'Native iOS (SwiftUI) & Android (Compose)',
    description: 'High-performance native mobile applications with platform-specific best practices',
  },
  {
    icon: FileText,
    title: 'Blog & Content Platforms',
    outcome: 'Markdown, Rich Text, Categories',
    description: 'Publishing systems with advanced features like tagging, search, and content scheduling',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    outcome: 'Lighthouse 90+, Sub-2s Load Times',
    description: 'Code splitting, lazy loading, image optimization, and caching strategies',
  },
  {
    icon: Eye,
    title: 'Accessibility Compliance',
    outcome: 'WCAG 2.1 AA Standards',
    description: 'Semantic HTML, keyboard navigation, screen reader support, and color contrast testing',
  },
  {
    icon: BarChart,
    title: 'Analytics & Tracking',
    outcome: 'Google Analytics, Tag Manager',
    description: 'Implementation and configuration of analytics tools for data-driven insights',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-offWhite">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-navy mb-4">
            Services
          </h2>
          <p className="body-lg text-charcoal/70 max-w-2xl mx-auto">
            Full-stack development services using modern technologies and industry best practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <service.icon className="w-7 h-7 text-gold" />
              </div>

              <h3 className="heading-sm text-navy mb-3">
                {service.title}
              </h3>

              <div className="bg-gold/5 border-l-4 border-gold px-4 py-3 mb-4 rounded">
                <p className="text-sm font-semibold text-navy">
                  {service.outcome}
                </p>
              </div>

              <p className="text-charcoal/70">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
