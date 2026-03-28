"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-wildlife.jpg"
          alt="African savanna at sunset with wildlife silhouettes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 text-center">
        <span className="inline-block mb-6 px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium tracking-wide">
          Smart Wildlife Experience
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 text-balance max-w-4xl mx-auto">
          Experience Wildlife Like Never Before
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Join the mission to protect nature, empower learning, and bring the wild to your fingertips. Connect with wildlife in real-time from anywhere in the world.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="px-8 py-6 text-lg font-semibold" asChild>
            <a
              href="https://docs.google.com/presentation/d/1duXQ3y8W0PF5G_jnjQ7yWJKULiIlUBl-/edit?usp=sharing&ouid=101947510523379640341&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Pitch Deck
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold">
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
