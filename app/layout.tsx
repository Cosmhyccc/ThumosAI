import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Thumos AI',
  description: 'AI-powered customer discovery',
  generator: 'Thumos AI',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
