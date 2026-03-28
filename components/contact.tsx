import { Button } from "@/components/ui/button"
import { Mail, MessageSquare } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
          <Mail className="h-4 w-4" />
          <span className="text-sm font-medium">Get In Touch</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
          Have Questions? We&apos;d Love to Hear From You
        </h2>
        
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty">
          Whether you&apos;re an educator, conservationist, investor, or nature enthusiast, 
          we&apos;re here to connect. Reach out and let&apos;s explore how we can work together 
          to protect wildlife.
        </p>
        
        <Button size="lg" className="px-8 py-6 text-lg font-semibold" asChild>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeFm4jFDSByIWLcAjM4xkoum7bwmQwKfGqvy5CMa3dMugxwHw/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Contact Us
          </a>
        </Button>
      </div>
    </section>
  )
}
