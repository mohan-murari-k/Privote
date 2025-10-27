import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesGrid } from "@/components/features-grid"
import { StatsSection } from "@/components/stats-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A0E14] to-[#1A1F2E]">
      <Header />
      <HeroSection />
      <FeaturesGrid />
      <StatsSection />
      <Footer />
    </main>
  )
}
