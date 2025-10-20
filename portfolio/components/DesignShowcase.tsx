'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Monitor, Smartphone, Tablet, Figma } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

const showcaseItems = [
  {
    id: 'web-saas',
    title: 'SaaS Dashboard',
    category: 'Web Application',
    device: 'laptop',
    description: 'Modern analytics dashboard with real-time data visualization',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    tags: ['React', 'TypeScript', 'Chart.js', 'Tailwind'],
    gradient: 'from-blue-500 to-purple-600',
  },
  {
    id: 'mobile-ecommerce',
    title: 'E-Commerce App',
    category: 'iOS & Android',
    device: 'phone',
    description: 'Seamless shopping experience with AR product preview',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80',
    tags: ['Swift', 'Kotlin', 'ARKit', 'Payment'],
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    id: 'ai-assistant',
    title: 'AI Assistant',
    category: 'Mobile App',
    device: 'phone',
    description: 'Intelligent chat interface with voice recognition',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    tags: ['Flutter', 'OpenAI', 'Voice AI', 'ML'],
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'design-system',
    title: 'Design System',
    category: 'Figma',
    device: 'laptop',
    description: 'Comprehensive component library and design tokens',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
    tags: ['Figma', 'Components', 'Tokens', 'Documentation'],
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    id: 'tablet-pos',
    title: 'POS System',
    category: 'Tablet App',
    device: 'tablet',
    description: 'Point of sale system for retail and restaurants',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000&q=80',
    tags: ['iPad', 'Payments', 'Inventory', 'Analytics'],
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    id: 'web-landing',
    title: 'Product Landing',
    category: 'Marketing Site',
    device: 'laptop',
    description: 'High-converting landing page with animations',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&q=80',
    tags: ['Next.js', 'SEO', 'Animations', 'A/B Testing'],
    gradient: 'from-green-500 to-emerald-600',
  },
]

const deviceIcons = {
  laptop: Monitor,
  phone: Smartphone,
  tablet: Tablet,
  figma: Figma,
}

function DeviceFrame({ device, children, className = '' }: { device: string; children: React.ReactNode; className?: string }) {
  if (device === 'laptop') {
    return (
      <div className={`relative ${className}`}>
        {/* Laptop screen */}
        <div className="bg-gray-900 rounded-t-2xl p-3 shadow-2xl">
          <div className="bg-white rounded-lg overflow-hidden aspect-[16/10]">
            {children}
          </div>
        </div>
        {/* Laptop base */}
        <div className="h-4 bg-gray-800 rounded-b-2xl shadow-xl" />
        <div className="h-2 bg-gray-700 rounded-b-3xl mx-8 shadow-2xl" />
      </div>
    )
  }

  if (device === 'phone') {
    return (
      <div className={`relative ${className}`}>
        {/* Phone frame */}
        <div className="bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10" />
          <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/19.5]">
            {children}
          </div>
        </div>
      </div>
    )
  }

  if (device === 'tablet') {
    return (
      <div className={`relative ${className}`}>
        {/* Tablet frame */}
        <div className="bg-gray-900 rounded-3xl p-4 shadow-2xl">
          <div className="bg-white rounded-2xl overflow-hidden aspect-[4/3]">
            {children}
          </div>
        </div>
      </div>
    )
  }

  return <div className={className}>{children}</div>
}

export default function DesignShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section id="showcase" className="section-padding bg-gradient-to-b from-white to-navy/5 overflow-hidden" ref={containerRef}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-gradient-to-r from-gold to-amber-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6"
          >
            Design Excellence
          </motion.div>

          <h2 className="heading-lg text-navy mb-6">
            Crafted Across Every Platform
          </h2>

          <p className="body-lg text-charcoal/70 max-w-3xl mx-auto">
            From pixel-perfect web applications to native mobile experiences and comprehensive design systems—
            we build interfaces that users love and businesses trust.
          </p>
        </motion.div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {showcaseItems.map((item, index) => {
            const Icon = deviceIcons[item.device as keyof typeof deviceIcons] || Monitor
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: (index % 2) * 0.2 }}
                className="group"
              >
                <div className="relative">
                  {/* Device mockup */}
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <DeviceFrame device={item.device}>
                      <div className="relative w-full h-full">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes={item.device === 'phone' ? '400px' : '800px'}
                          className="object-cover"
                        />

                        {/* Gradient overlay on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                      </div>
                    </DeviceFrame>

                    {/* Floating device icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index % 2) * 0.2 + 0.3, type: 'spring', stiffness: 200 }}
                      className="absolute -top-6 -right-6 bg-white shadow-xl rounded-2xl p-4 border border-gold/20"
                    >
                      <Icon className="w-8 h-8 text-gold" />
                    </motion.div>
                  </motion.div>

                  {/* Project details */}
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                        {item.category}
                      </span>
                      <div className="h-1 flex-1 bg-gradient-to-r from-gold/30 to-transparent rounded-full" />
                    </div>

                    <h3 className="heading-sm text-navy">
                      {item.title}
                    </h3>

                    <p className="text-charcoal/70 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Technology tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: (index % 2) * 0.2 + 0.1 * tagIndex }}
                          className="bg-navy/5 text-navy px-3 py-1 rounded-full text-sm font-medium
                                   border border-navy/10 hover:border-gold/50 hover:bg-gold/5
                                   transition-colors duration-300"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-navy to-navy/90 text-white
                        px-8 py-4 rounded-2xl shadow-xl group cursor-pointer hover:shadow-2xl
                        transition-all duration-300"
          >
            <span className="text-lg font-semibold">See more of our work</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute top-1/4 -left-32 w-64 h-64 bg-gold/5 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-navy/5 rounded-full blur-3xl"
        />
      </div>
    </section>
  )
}
