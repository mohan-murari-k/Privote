"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#2D3748] bg-[#0A0E14]/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 bg-[#00D4AA] rounded-lg flex items-center justify-center">
              <span className="text-black font-bold">P</span>
            </div>
            <span>Privote</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-[#A0AEC0] hover:text-white transition-smooth">
              Features
            </Link>
            <Link href="#stats" className="text-[#A0AEC0] hover:text-white transition-smooth">
              Stats
            </Link>
            <Link href="/docs" className="text-[#A0AEC0] hover:text-white transition-smooth">
              Docs
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="border-[#2D3748] text-white hover:bg-[#1E2330] bg-transparent">
              Connect Wallet
            </Button>
            <Link href="/create">
              <Button className="bg-[#00D4AA] text-black hover:bg-[#00B894] font-semibold">Create Poll</Button>
            </Link>
            <Link href="/marketplace">
              <Button
                variant="outline"
                className="border-[#00D4AA] text-[#00D4AA] hover:bg-[#00D4AA] hover:text-black font-semibold bg-transparent"
              >
                Explore Marketplace
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="#features" className="block px-4 py-2 text-[#A0AEC0] hover:text-white">
              Features
            </Link>
            <Link href="#stats" className="block px-4 py-2 text-[#A0AEC0] hover:text-white">
              Stats
            </Link>
            <Link href="/docs" className="block px-4 py-2 text-[#A0AEC0] hover:text-white">
              Docs
            </Link>
            <div className="px-4 pt-2 space-y-2">
              <Button variant="outline" className="w-full border-[#2D3748] bg-transparent">
                Connect Wallet
              </Button>
              <Link href="/create" className="block">
                <Button className="w-full bg-[#00D4AA] text-black hover:bg-[#00B894] font-semibold">Create Poll</Button>
              </Link>
              <Link href="/marketplace" className="block">
                <Button
                  className="w-full border-[#00D4AA] text-[#00D4AA] hover:bg-[#00D4AA] hover:text-black font-semibold bg-transparent"
                  variant="outline"
                >
                  Explore Marketplace
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
