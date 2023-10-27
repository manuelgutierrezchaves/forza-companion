import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import TopMenu from './components/TopMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Forza Companion',
  description: 'Home Page for the Forza Companion App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopMenu />
        {children}
      </body>
    </html>
  )
}
