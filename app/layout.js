import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'PiHole Pause',
    description: 'Pause all of your PiHoles!',
}

export default async function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="night" className="bg-base-200">
            <body className={inter.className}>
                <div className="container">
                    <Header />
                    {children}
                </div>
            </body>
        </html>
    )
}
