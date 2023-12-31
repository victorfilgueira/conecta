import { Header } from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Vollkorn } from 'next/font/google'
import { Products } from '@/components/Products'

const volkorn = Vollkorn({ 
  subsets: ['latin'], 
  weight: ['400', '700', '800'] 
})

export const metadata: Metadata = {
  title: 'Conecta Energy Drink',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={volkorn.className}>
        <Header />
        <Products />
        {children}
      </body>
    </html>
  )
}
