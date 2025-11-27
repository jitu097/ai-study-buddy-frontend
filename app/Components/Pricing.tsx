import React from "react"
import { Check } from "lucide-react"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { size?: "sm" | "md" | "lg" }

const Button = ({ size = "md", className = "", children, ...props }: ButtonProps) => {
  const sizeClass =
    size === "lg" ? "py-3 px-4 text-base" : size === "sm" ? "py-1 px-2 text-sm" : "py-2 px-3"

  return (
    <button className={`${sizeClass} ${className}`} {...props}>
      {children}
    </button>
  )
}

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with AI-powered studying.",
    features: [
      "5 AI tutoring sessions/day",
      "Basic flashcard generation",
      "Limited quiz questions",
      "Community support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "per month",
    description: "Ideal for serious students who want to excel.",
    features: [
      "Unlimited AI tutoring",
      "Advanced flashcards with spaced repetition",
      "Unlimited adaptive quizzes",
      "Priority support",
      "Progress analytics",
      "Export study materials",
    ],
    cta: "Start Pro Trial",
    highlighted: true,
  },
  {
    name: "Ultimate",
    price: "$29",
    period: "per month",
    description: "For power users and study groups.",
    features: [
      "Everything in Pro",
      "Group study sessions",
      "Custom AI tutor personality",
      "API access",
      "Dedicated support",
      "Early access to new features",
    ],
    cta: "Go Ultimate",
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section className="relative py-24 sm:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4 text-balance">
            Simple, <span className="text-primary">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose the plan that fits your learning goals. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-6 lg:p-8 rounded-xl border transition-all duration-300 ${
                plan.highlighted
                  ? "bg-card border-primary/50 shadow-lg shadow-primary/10"
                  : "bg-card/50 border-border hover:border-primary/30"
              }`}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              {/* Features list */}
              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-transparent border border-border text-foreground hover:bg-card hover:border-primary/50"
                }`}
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <p className="text-center text-sm text-muted-foreground mt-10">
          All plans include a 14-day money-back guarantee. No questions asked.
        </p>
      </div>
    </section>
  )
}
