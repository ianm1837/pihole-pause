import './globals.css'
import { Inter } from 'next/font/google'
import getServers from './actions/getServers'

const inter = Inter({ subsets: ['latin'] })



export const metadata = {
  title: 'PiHole Pause',
  description: 'Pause all of your PiHoles!',
}





export default async function RootLayout({ children }) {
  console.log(children)
  return (
    <html lang="en" data-theme="night">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
