import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '社畜版真心話大冒險',
  description: '專屬於社畜的第一款真心話大冒險遊戲 The Truth or Dare of Wage Slave',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
