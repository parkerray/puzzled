import type { Metadata } from 'next'
 import './globals.css'
 
export const metadata: Metadata = {
  title: 'game',
  description: '01101001 01110100 00100000 01110111 01101111 01101110 01110100 00100000 01100010 01100101 00100000 01110100 01101000 01100001 01110100 00100000 01100101 01100001 01110011 01111001',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-black text-white font-mono'>
        {children}
      </body>
    </html>
  )
}