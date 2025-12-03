import './globals.css'
import { Inter } from 'next/font/google'
import { AuthProvider } from '@/components/AuthProvider'

export const metadata = {
  title: 'Fishing Import & Export',
  description: 'Professional fishing trade platform for import and export',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav style={{ backgroundColor: 'blue', padding: '1rem' }}>
          <ul style={{ display: 'flex', listStyleType: 'none' }}>
            <li style={{ marginRight: '1rem' }}><a href="/">Home</a></li>
            <li style={{ marginRight: '1rem' }}><a href="/products">Products</a></li>
            <li style={{ marginRight: '1rem' }}><a href="/quotes">Quotes</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
          </ul>
        </nav>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}