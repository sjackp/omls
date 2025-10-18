import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OM EL-Mo\'mneen Language School - Excellence in Education',
  description: 'Nurturing bright minds within a vibrant, supportive, and inspiring community. Bilingual education in Cairo, Egypt.',
  keywords: 'education, school, bilingual, cairo, egypt, language schools',
  authors: [{ name: 'OM EL-Mo\'mneen Language School' }],
  openGraph: {
    title: 'OM EL-Mo\'mneen Language School',
    description: 'Excellence in Education, Foundation for Life',
    type: 'website',
    locale: 'en_US',
    siteName: 'OM EL-Mo\'mneen Language School',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
