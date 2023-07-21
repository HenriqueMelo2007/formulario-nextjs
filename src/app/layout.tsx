import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Login ou Registrar',
  description: 'Pequena tela de registro ou login feita com Next',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='box-border p-0 m-0 bg-slate-900 flex justify-center items-center center w-screen h-screen' lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
