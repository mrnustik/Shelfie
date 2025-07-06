import { CssBaseline } from '@mui/material'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import NavBar from '@/components/NavBar'
import ThemeProviderComponent from './theme-provider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Shelfie',
  description: 'Book collection management app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <ThemeProviderComponent>
          <CssBaseline />
          <NavBar />
          <main>{children}</main>
        </ThemeProviderComponent>
      </body>
    </html>
  )
}
