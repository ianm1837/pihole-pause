import './globals.css'
import { Inter } from 'next/font/google'
import getServers from './actions/getServers'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'PiHole Pause',
    description: 'Pause all of your PiHoles!',
}

export default async function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="night" className='bg-base-200'>
            <body className={inter.className}>
              <div className={`p-5`}>
                <Header />
                {children}

              </div>
            </body>
        </html>
    )
}
