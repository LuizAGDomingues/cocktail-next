import './globals.css'
import type { Metadata } from 'next'
import { Jacques_Francois } from 'next/font/google'

const jacques = Jacques_Francois({subsets: })

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
      <body className={jacques.className}>{children}</body>
    </html>
  )
}
