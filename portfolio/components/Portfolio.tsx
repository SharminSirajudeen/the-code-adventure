'use client'

import { motion } from 'framer-motion'
import { Code, Layers, Zap } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'E-Commerce Platforms',
    category: 'Website Development',
    description: 'Full-featured online stores with payment processing',
    technologies: ['Next.js 14 (App Router)', 'Stripe/PayPal integration', 'Admin dashboard', 'Inventory management'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    icon: Code,
  },
  {
    title: 'Mobile Applications',
    category: 'iOS & Android',
    description: 'Native mobile apps with modern UI and performance',
    technologies: ['SwiftUI for iOS', 'Jetpack Compose for Android', 'REST API integration', 'Push notifications'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    icon: Layers,
  },
  {
    title: 'Business Websites',
    category: 'Corporate & Portfolio',
    description: 'Professional websites with CMS and SEO optimization',
    technologies: ['Custom CMS', 'SEO-optimized', 'Contact forms', 'Analytics integration'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    icon: Zap,
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-navy mb-4">
            What We Build
          </h2>
          <p className="body-lg text-charcoal/70 max-w-2xl mx-auto">
            Project types and technology capabilities across web and mobile
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              <div className={`relative overflow-hidden rounded-2xl shadow-xl ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-[4/3] bg-navy/5 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-gold" />
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="inline-block bg-gold/10 text-gold px-4 py-1 rounded-full text-sm font-medium mb-4">
                  {project.category}
                </div>

                <h3 className="heading-md text-navy mb-4">
                  {project.title}
                </h3>

                <p className="text-charcoal/70 mb-6">
                  {project.description}
                </p>

                <div className="bg-gold/5 rounded-xl p-6">
                  <h4 className="font-semibold text-navy mb-3">Technologies & Features:</h4>
                  <ul className="space-y-2">
                    {project.technologies.map((tech, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2"></div>
                        <span className="text-charcoal">{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
