// import Image from 'next/image'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Testinomial from '@/components/Testinomial'
import { Inter } from 'next/font/google'
// import
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      
    >
      {/* <h1>hello world</h1> */}
    <Header/>
    <Hero/>
    <Testinomial/>
    <Footer/>
    </main>
  )
}
