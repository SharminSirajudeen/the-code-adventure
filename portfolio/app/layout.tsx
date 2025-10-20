import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Digital Solutions | Web & Mobile Development',
  description: 'Professional web and mobile development services. Modern, performant applications built with Next.js, React, and TypeScript.',
  keywords: ['web development', 'mobile apps', 'Next.js', 'React', 'SEO optimization', 'CMS'],
  openGraph: {
    title: 'Digital Solutions | Web & Mobile Development',
    description: 'Professional web and mobile development services.',
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
