import { ButtonHTMLAttributes, ReactNode } from "react"
import { Sparkles, ArrowRight } from "lucide-react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "lg" | string
  variant?: "outline" | string
  children?: ReactNode
}

function Button({ className = "", children, ...props }: ButtonProps) {
  return (
    <button {...props} className={`inline-flex items-center justify-center ${className}`}>
      {children}
    </button>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Subtle glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-border bg-secondary/50 text-sm text-primary">
          <Sparkles className="w-4 h-4" />
          <span>AI-Powered Learning</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance">
          Your Intelligent
          <br />
          <span className="text-primary">Study Companion</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          AI Study Buddy helps you learn faster, understand deeper, and ace your exams with personalized AI tutoring,
          smart flashcards, and instant explanations.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="w-full sm:w-auto px-8 py-6 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
          >
            Get Started Free
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto px-8 py-6 text-base font-medium border-border bg-secondary/50 text-foreground hover:bg-secondary hover:text-foreground transition-all"
          >
            Watch Demo
          </Button>
        </div>

        {/* Trust indicator */}
        <p className="mt-12 text-sm text-muted-foreground">
          Trusted by <span className="text-foreground font-medium">50,000+</span> students worldwide
        </p>
      </div>
    </section>
  )
}
