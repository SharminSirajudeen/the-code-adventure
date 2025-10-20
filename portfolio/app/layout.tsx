import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Premium Digital Solutions | Luxury Web & Mobile Development',
  description: 'Trusted by premium brands to deliver exceptional web & mobile solutions. 50+ projects delivered with 90+ Lighthouse scores.',
  keywords: ['luxury web development', 'premium websites', 'mobile app development', 'SEO optimization', 'custom CMS'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Premium Digital Solutions | Luxury Web & Mobile Development',
    description: 'Trusted by premium brands to deliver exceptional web & mobile solutions.',
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
