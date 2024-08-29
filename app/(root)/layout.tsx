import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import Navbar from '@/components/Navbar'
import ToastProvider from '@/providers/ToastProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Clothes Store',
    description: 'Clothes E-commerce Store',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ClerkProvider>
                    <ToastProvider />
                    <Navbar />
                    {children}
                </ClerkProvider>
            </body>
        </html>
    )
}
