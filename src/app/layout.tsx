import type { Metadata } from 'next';
import { Roboto, } from 'next/font/google';
import './globals.css';

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'PolySite - Plastic Products',
  description: '',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className} >
        {children}
      </body>
    </html>
  )
}
