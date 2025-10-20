import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Code Foundry | Binary Born. Human Designed.',
  description: 'Forging production-grade software systems. Full-stack engineering with modern architecture, optimized performance, and maintainable codebases. React, TypeScript, Swift, Kotlin.',
  keywords: ['code foundry', 'software engineering', 'full-stack development', 'Next.js', 'React', 'TypeScript', 'SwiftUI', 'Jetpack Compose', 'API development', 'software architecture'],
  openGraph: {
    title: 'Code Foundry | Binary Born. Human Designed.',
    description: 'Forging production-grade software systems with scalable architecture and optimized performance.',
    type: 'website',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
