import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Features } from "@/components/features"
import { Gallery } from "@/components/gallery"
import { CTA } from "@/components/cta"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="impact">
        <Gallery />
      </section>
      <CTA />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}
