/* eslint-disable @next/next/no-img-element */
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Pre-Med Student",
    review:
      "AI Study Buddy completely changed how I prepare for exams. The adaptive quizzes helped me identify gaps I didn't even know I had.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=256&h=256&facepad=2",
  },
  {
    name: "Marcus Johnson",
    role: "Computer Science Major",
    review:
      "The 24/7 chat feature is a lifesaver. I can get help understanding complex algorithms at 2 AM when no one else is available.",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=256&h=256&facepad=2",
  },
  {
    name: "Emily Rodriguez",
    role: "Law School Student",
    review:
      "Generating flashcards used to take me hours. Now I create entire study sets in minutes and retain so much more information.",
    avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=256&h=256&facepad=2",
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative py-24 sm:py-32">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4 text-balance">
            Loved by <span className="text-primary">Students</span> Everywhere
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            See why thousands of students trust AI Study Buddy to help them succeed.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group relative p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-primary/40" />
              </div>

              {/* Review text */}
              <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">&quot;{testimonial.review}&quot;</p>

              {/* Author info */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-primary/20 object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
