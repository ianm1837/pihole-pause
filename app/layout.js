import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const metadata = {
  title: 'PiHole Pause',
  description: 'Pause all of your PiHoles!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="night">
      <body className={inter.className} >{children}</body>
    </html>
  )
}
