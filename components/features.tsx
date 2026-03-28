import { Camera, Leaf, Brain, Globe } from "lucide-react"

const features = [
  {
    icon: Camera,
    title: "Real-Time Wildlife Footage",
    description: "Get stunning nature moments streamed from across the world through our network of smart cameras.",
  },
  {
    icon: Leaf,
    title: "Conservation Made Accessible",
    description: "Support wildlife education and habitat protection with every view and share.",
  },
  {
    icon: Brain,
    title: "Educational Adventures",
    description: "Designed for classrooms, families, and explorers of all ages to learn about wildlife.",
  },
  {
    icon: Globe,
    title: "Global Nature Network",
    description: "Connect with people protecting wildlife across the globe and share your discoveries.",
  },
]

export function Features() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wide uppercase">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Why Choose WildGuard
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to explore, learn, and contribute to wildlife conservation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
