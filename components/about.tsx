import Image from "next/image"

export function About() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/wildlife-camera.jpg"
              alt="Lion captured by WildGuard camera"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3 bg-background/90 backdrop-blur-sm rounded-lg p-4">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-foreground">Live from Serengeti National Park</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-medium text-sm tracking-wide uppercase">
              About WildGuard
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Tech-Powered Conservation for Everyone
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              WildGuard is a tech-powered platform designed to educate, inspire, and protect. Whether you're a nature lover, farmer, teacher, or conservationist, our smart wildlife cameras let you experience real-time encounters with animals while helping preserve the natural world.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From African safaris to your own backyard, WildGuard helps communities connect through shared wildlife stories — all while promoting sustainability and responsible land stewardship.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
