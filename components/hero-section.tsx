"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Lock } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00D4AA]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00D4AA]/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E2330] border border-[#2D3748] mb-8">
          <Lock size={16} className="text-[#00D4AA]" />
          <span className="text-sm text-[#A0AEC0]">Privacy-First Polling</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
          Privacy-First Polling on <span className="text-[#00D4AA]">Algorand</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-[#A0AEC0] mb-8 text-balance max-w-2xl mx-auto">
          Create anonymous polls, participate confidentially, and monetize insights with zero-knowledge proofs.
          Transparent blockchain-backed transactions with complete privacy.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/dashboard">
            <Button className="bg-[#00D4AA] text-black hover:bg-[#00B894] font-semibold text-base h-12 px-8 w-full sm:w-auto">
              Create Poll
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
          <Link href="/marketplace">
            <Button
              variant="outline"
              className="border-[#2D3748] text-white hover:bg-[#1E2330] font-semibold text-base h-12 px-8 bg-transparent w-full sm:w-auto"
            >
              Explore Marketplace
            </Button>
          </Link>
        </div>

        {/* Stats Preview */}
        <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-[#00D4AA]">1000+</div>
            <div className="text-sm text-[#718096]">Active Polls</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-[#00D4AA]">50K+</div>
            <div className="text-sm text-[#718096]">Participants</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-[#00D4AA]">$2.5M</div>
            <div className="text-sm text-[#718096]">Data Volume</div>
          </div>
        </div>
      </div>
    </section>
  )
}
