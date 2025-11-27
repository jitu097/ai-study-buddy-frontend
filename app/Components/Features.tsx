import { Brain, Zap, BookOpen, MessageCircle } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Smart AI Tutoring",
    description: "Get instant, personalized explanations tailored to your learning style and pace.",
  },
  {
    icon: Zap,
    title: "Instant Flashcards",
    description: "Generate study flashcards from any topic in seconds with spaced repetition built in.",
  },
  {
    icon: BookOpen,
    title: "Adaptive Quizzes",
    description: "Practice with AI-generated quizzes that adapt to your knowledge gaps.",
  },
  {
    icon: MessageCircle,
    title: "24/7 Study Chat",
    description: "Ask questions anytime and get accurate, helpful answers instantly.",
  },
]

export function FeaturesSection() {
  return (
    <section className="relative py-24 sm:py-32">
      {/* Subtle background continuation */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4 text-balance">
            Everything You Need to <span className="text-primary">Study Smarter</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Powerful AI tools designed to help you learn more efficiently and retain information longer.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300"
            >
              {/* Icon container */}
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
