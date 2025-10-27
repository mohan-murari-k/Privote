import { Card } from "@/components/ui/card"
import { Lock, TrendingUp, Zap } from "lucide-react"

const features = [
  {
    icon: Lock,
    title: "Zero-Knowledge Proofs",
    description:
      "Cast votes confidentially with cryptographic privacy guarantees. Your identity and choices remain completely anonymous.",
  },
  {
    icon: TrendingUp,
    title: "Data Marketplace",
    description:
      "Monetize anonymized poll insights. Buyers bid for valuable data while your privacy is mathematically protected.",
  },
  {
    icon: Zap,
    title: "Blockchain Trust",
    description:
      "Immutable, tamper-proof records on Algorand. Transparent transactions with instant finality and ultra-low fees.",
  },
]

export function FeaturesGrid() {
  return (
    <section id="features" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Privote?</h2>
          <p className="text-[#A0AEC0] text-lg max-w-2xl mx-auto">
            Combining privacy, transparency, and incentives in one platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="bg-[#1E2330] border-[#2D3748] p-8 hover:border-[#00D4AA]/50 transition-smooth hover:shadow-lg hover:shadow-[#00D4AA]/10"
              >
                <div className="w-12 h-12 bg-[#00D4AA]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} className="text-[#00D4AA]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-[#A0AEC0]">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
