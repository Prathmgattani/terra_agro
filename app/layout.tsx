import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const siteUrl = 'https://terraagrofoods.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Terra Agro Food's | Dehydrated Vegetables, Fruit & Vegetable Powders",
    template: "%s | Terra Agro Food's",
  },
  description:
    "Terra Agro Food's is a premium manufacturer and global exporter of dehydrated vegetables, fruit powders, vegetable powders, herbs, spices and flakes. Export-quality bulk supply and OEM manufacturing from Maharashtra, India.",
  keywords: [
    'dehydrated vegetables manufacturer',
    'fruit powder supplier',
    'vegetable powder exporter',
    'spice manufacturer India',
    'bulk food ingredients',
    'OEM food manufacturing',
    'Terra Agro Foods',
  ],
  authors: [{ name: "Terra Agro Food's" }],
  creator: "Terra Agro Food's",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: "Terra Agro Food's",
    title: "Terra Agro Food's | Premium Dehydrated Ingredients & Powders",
    description:
      'Export-quality dehydrated vegetables, fruit powders, vegetable powders, herbs, spices and flakes. Reliable bulk supply and OEM manufacturing.',
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: "Terra Agro Food's dehydrated ingredients",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Terra Agro Food's | Premium Dehydrated Ingredients & Powders",
    description:
      'Export-quality dehydrated vegetables, fruit powders, vegetable powders, herbs, spices and flakes.',
    images: ['/images/hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#2e7d32',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: "Terra Agro Food's",
  url: siteUrl,
  description:
    'Manufacturer and supplier of dehydrated vegetables, fruit powders, vegetable powders, herbs, spices and flakes.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kannad, Chhatrapati Sambhajinagar (Aurangabad)',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  makesOffer: [
    'Dehydrated Vegetables',
    'Fruit Powders',
    'Vegetable Powders',
    'Herbs',
    'Spices',
    'Vegetable Flakes',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} bg-background`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
