import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Menubar from '@/components/menubar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Narrative Exploration',
  description: 'Transform long-form narratives into digestible insights',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menubar />
        {children}
      </body>
    </html>
  )
} 