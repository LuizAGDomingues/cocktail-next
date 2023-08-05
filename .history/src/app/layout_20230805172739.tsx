import type { Metadata } from 'next'
import { Jacques_Francois } from 'next/font/google'
import './globals.css'

const jacques = Jacques_Francois({weight: '400', subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Mixologymate',
  description: 'Your drink encyclopedia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body className={jacques.className}>{children}</body>
    </html>
  )
}
