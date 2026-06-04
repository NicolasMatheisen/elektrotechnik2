import type { ReactNode } from 'react'
import Navbar from '@/app/components/navbar'
import './globals.css' 

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="de">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
