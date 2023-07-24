import './globals.css'
import type { Metadata } from 'next'
import { Jacques_Francois } from 'next/font/google'

const inter = Jacques_Francois({
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
