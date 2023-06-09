import Cursor from '@/components/cursor'
import { Navbar } from '@/components/navigation/navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar/>
      <Cursor/>
      <Component {...pageProps} />
    </>
  )
}
