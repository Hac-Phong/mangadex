import type { Metadata } from 'next'
import { League_Spartan, Nunito } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import Search from '@/components/Search'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
})
const spartan = League_Spartan({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-spartan',
})
export const metadata: Metadata = {
  title: 'HazyMoon',
  description: 'HazyMoon - Read manga online for free',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} ${spartan.variable}`}>
        <main className="w-full flex">
          <div className="w-2/12">
            <NavBar />
          </div>
          <div className="w-10/12 flex flex-col relative">
            <Search />
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
