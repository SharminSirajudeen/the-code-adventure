'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center font-bold text-navy">
                CF
              </div>
              <span className="text-xl font-semibold">Code Foundry</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Forging production-grade software systems. Full-stack engineering
              with modern architecture, clean code, and robust testing.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#services" className="hover:text-gold transition-colors">
                  Website Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors">
                  CMS Solutions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#portfolio" className="hover:text-gold transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>
              © {currentYear} Code Foundry. All rights reserved.
            </p>
            <p>
              Serving clients worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
