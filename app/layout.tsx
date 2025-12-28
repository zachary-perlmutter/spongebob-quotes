import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Random SpongeBob Quote Generator',
  description: 'Get random SpongeBob SquarePants quotes!',
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


