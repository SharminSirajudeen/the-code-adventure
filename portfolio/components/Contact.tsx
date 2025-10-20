'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Calendar, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you within 24 hours.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-navy mb-4">
            Let's Build Something
          </h2>
          <p className="body-lg text-charcoal/70 max-w-2xl mx-auto">
            Discuss your technical requirements and project architecture
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-navy text-white rounded-2xl p-8 h-full">
              <h3 className="heading-sm mb-6">
                Get in Touch
              </h3>

              <p className="text-white/80 mb-8 leading-relaxed">
                24-hour response time. Available for technical consultations
                and project scoping sessions.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center gap-4 text-white/90 hover:text-gold transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60">Email</div>
                    <div className="font-medium">your.email@example.com</div>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-4 text-white/90 hover:text-gold transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60">Schedule a Call</div>
                    <div className="font-medium">Book a consultation</div>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-white/90 hover:text-gold transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60">LinkedIn</div>
                    <div className="font-medium">Connect professionally</div>
                  </div>
                </a>

                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-white/90 hover:text-gold transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60">GitHub</div>
                    <div className="font-medium">View my code</div>
                  </div>
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-white/80">
                    Currently accepting new projects
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-charcoal mb-2">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                >
                  <option value="">Select project type</option>
                  <option value="web-app">Web Application (Full-Stack)</option>
                  <option value="api">Backend API & Database</option>
                  <option value="mobile">Native Mobile App (iOS/Android)</option>
                  <option value="cms">CMS / Admin Panel</option>
                  <option value="optimization">Performance Optimization</option>
                  <option value="migration">Tech Stack Migration</option>
                  <option value="other">Other Technical Project</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-none"
                  placeholder="Technical requirements, stack preferences, timeline, scale expectations..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full inline-flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-sm text-charcoal/60 text-center">
                Response within 24 hours with technical assessment
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
