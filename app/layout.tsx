import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, DM_Sans } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Shazel Ecoprint | Sublimacion Sostenible',
  description: 'Regalos personalizados que cuidan el planeta. Cuadros LED, bolsas de tocuyo, polos y mas con materiales eco-friendly.',
  generator: 'v0.app',
  keywords: ['sublimacion', 'ecoprint', 'regalos personalizados', 'cuadros LED', 'bolsas tocuyo', 'sostenible'],
}

export const viewport: Viewport = {
  themeColor: '#1D4E89',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${dmSans.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
