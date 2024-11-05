import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects/Projects'
import Skills from '@/components/sections/Skills'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'
import { Suspense } from 'react'
import Experience from '@/components/sections/Experience/Experience'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <section id="home">
        <Hero />
      </section>
      <Suspense fallback={<div>Loading projects...</div>}>
        <section id="projects">
          <Projects />
        </section>
      </Suspense>
      <section id="skills">
        <Skills />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <CTA />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}
