import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Products } from '@/components/products'
import { WhyChooseUs } from '@/components/why-choose-us'
import { Process } from '@/components/process'
import { Industries } from '@/components/industries'
import { Quality } from '@/components/quality'
import { Certificates } from '@/components/certificates'
import { Gallery } from '@/components/gallery'
import { Testimonials } from '@/components/testimonials'
import { Faq } from '@/components/faq'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <WhyChooseUs />
        <Process />
        <Industries />
        {/* <Quality /> */}
        {/* <Certificates /> */}
        {/* <Gallery /> */}
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
