import { Inter } from 'next/font/google'
import './globals.css'
import Root from './Root/root'
import Carousel from './carousel/carousel'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-Commerce',
  description: 'Generated by create next app',
}

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
          
        <Carousel />
      </body>
    </html>
  )
}
