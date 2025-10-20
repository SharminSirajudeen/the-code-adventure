import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Stack Engineering | Full-Stack Software Engineer',
  description: 'Production-grade web and mobile applications. Scalable architecture, optimized performance, clean codebases. React, TypeScript, Swift, Kotlin.',
  keywords: ['full-stack engineer', 'software architecture', 'Next.js', 'React', 'TypeScript', 'SwiftUI', 'Jetpack Compose', 'API development'],
  openGraph: {
    title: 'Stack Engineering | Full-Stack Software Engineer',
    description: 'Production-grade software systems with scalable architecture and optimized performance.',
    type: 'website',
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
