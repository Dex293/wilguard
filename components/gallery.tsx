import Image from "next/image"

export function Gallery() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wide uppercase">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Connecting Communities with Wildlife
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From classrooms to conservation sites, WildGuard is making a difference around the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Large Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
            <Image
              src="/images/education.jpg"
              alt="Students learning about wildlife"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-sm font-medium rounded-full mb-3">
                Education
              </span>
              <h3 className="text-2xl font-bold text-foreground">Educational Adventures</h3>
              <p className="text-muted-foreground mt-2">Bringing wildlife into classrooms worldwide</p>
            </div>
          </div>

          {/* Conservation Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
            <Image
              src="/images/conservation.jpg"
              alt="Conservation efforts in the field"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-3">
                Conservation
              </span>
              <h3 className="text-2xl font-bold text-foreground">Field Operations</h3>
              <p className="text-muted-foreground mt-2">Supporting wildlife protection efforts on the ground</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
