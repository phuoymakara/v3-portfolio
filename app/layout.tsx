import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Script from 'next/script';

import { Open_Sans } from 'next/font/google'
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '600', '700'] })

export const metadata: Metadata = {
  title: "Portfolio | Makara",
  description: "A professionalism portfolio",
  generator: "v2",
  icons:{
    icon: 'https://i.pinimg.com/736x/18/e9/ac/18e9ac3999b64780b9b70218cad2ac9a.jpg',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        {children}
        <Analytics />
        <Script 
              defer
              src="https://static.cloudflareinsights.com/beacon.min.js" 
              data-cf-beacon='{"token": "f1e78435c49943a6969486a98a6bf428"}'
            />
      </body>
    </html>
  )
}
