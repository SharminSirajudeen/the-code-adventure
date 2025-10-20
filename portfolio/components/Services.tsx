'use client'

import { motion } from 'framer-motion'
import { Globe, Database, Search, Smartphone, FileText, Zap, Eye, BarChart } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Web Application Engineering',
    outcome: 'Next.js App Router, React Server Components',
    description: 'Full-stack web apps with SSR/SSG, API routes, middleware, and optimized build pipelines',
  },
  {
    icon: Database,
    title: 'Backend Systems & APIs',
    outcome: 'RESTful APIs, GraphQL, Database Architecture',
    description: 'Scalable backend services with proper ORM integration, query optimization, and caching layers',
  },
  {
    icon: Search,
    title: 'Performance Engineering',
    outcome: 'Lighthouse 90+, Core Web Vitals, Bundle Analysis',
    description: 'Runtime optimization through code splitting, lazy loading, tree shaking, and edge caching',
  },
  {
    icon: Smartphone,
    title: 'Native Mobile Development',
    outcome: 'SwiftUI (iOS), Jetpack Compose (Android)',
    description: 'Platform-native apps with proper state management, navigation, and async data handling',
  },
  {
    icon: FileText,
    title: 'CMS Architecture',
    outcome: 'Headless CMS, Custom Admin Panels',
    description: 'Content systems with WYSIWYG editors, versioning, role-based access, and API integrations',
  },
  {
    icon: Zap,
    title: 'CI/CD & DevOps',
    outcome: 'GitHub Actions, Docker, Cloud Deployment',
    description: 'Automated testing, build pipelines, containerization, and infrastructure as code',
  },
  {
    icon: Eye,
    title: 'Testing & Quality Assurance',
    outcome: 'Unit, Integration, E2E Testing',
    description: 'Comprehensive test coverage with Jest, Testing Library, Playwright, and performance benchmarks',
  },
  {
    icon: BarChart,
    title: 'Analytics Implementation',
    outcome: 'GA4, Custom Events, Data Layer',
    description: 'Event tracking architecture with proper data modeling and analytics configuration',
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
            Technical Capabilities
          </h2>
          <p className="body-lg text-charcoal/70 max-w-2xl mx-auto">
            End-to-end engineering services from system design to production deployment
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
