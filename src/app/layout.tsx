import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ApplicationContextProvider from './context/ApplicationContextProvider'

const inter = Inter({ subsets: ['latin'] })
// import { DataContextProvider } from './context/DataContext'

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
    <html lang="en">
      <body className={inter.className}>
        <ApplicationContextProvider>
          {children}
        </ApplicationContextProvider>
      </body>
    </html>
  )
}
