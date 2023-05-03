import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'I got places to go',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
