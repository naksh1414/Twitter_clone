import SupabaseProvider from '@/supabase-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LeftSidebar from '../components/LeftSidebar'
import RightSidebar from '../components/RightSidebar'


const inter = Inter({ subsets: ['latin'] })

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
      <div className="w-full h-full flex justify-center items-center relative bg-black text-white">
          <div className="xl:max-w-[70vw] w-full h-full flex relative">
            <LeftSidebar />
            <SupabaseProvider>{children}</SupabaseProvider>
            <RightSidebar />
          </div>
        </div>
        </body>
    </html>
  )
}