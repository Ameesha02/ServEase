// import Image from 'next/image'
import About from '@/components/About'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testinomial from '@/components/Testinomial'

import { Inter } from 'next/font/google'
// import
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
    <Hero/>
    <Services/>
    <Testinomial/> 
    </main>
  )
}
// servease-647f8