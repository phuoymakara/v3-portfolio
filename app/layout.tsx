import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Script from 'next/script';

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

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
      <body className={`font-sans antialiased`}>
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
