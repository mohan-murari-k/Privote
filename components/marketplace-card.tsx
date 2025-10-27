"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, TrendingUp } from "lucide-react"

interface MarketplaceCardProps {
  id: number
  title: string
  category: string
  dataPoints: number
  privacyLevel: number
  currentBid: number
  bidCount: number
  timeRemaining: string
  onBidClick: () => void
}

export function MarketplaceCard({
  title,
  category,
  dataPoints,
  privacyLevel,
  currentBid,
  bidCount,
  timeRemaining,
  onBidClick,
}: MarketplaceCardProps) {
  return (
    <Card className="bg-[#1E2330] border-[#2D3748] hover:border-[#00D4AA]/50 transition-smooth hover:-translate-y-1 hover:shadow-lg hover:shadow-[#00D4AA]/20 overflow-hidden group">
      <div className="p-6">
        {/* Header with category badge */}
        <div className="flex items-start justify-between mb-4">
          <Badge variant="secondary" className="bg-[#2D3748] text-[#A0AEC0]">
            {category}
          </Badge>
          <div className="text-right">
            <div className="text-xs text-[#718096]">Privacy Level</div>
            <div className="text-sm font-semibold text-[#00D4AA]">{"⭐".repeat(privacyLevel)}</div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-white mb-4 line-clamp-2 group-hover:text-[#00D4AA] transition-smooth">
          {title}
        </h3>

        {/* Data points */}
        <div className="flex items-center gap-2 mb-4 text-sm text-[#A0AEC0]">
          <TrendingUp size={16} className="text-[#00D4AA]" />
          <span>{dataPoints.toLocaleString()} data points</span>
        </div>

        {/* Bid info */}
        <div className="bg-[#0A0E14] rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-[#718096]">Current Bid</span>
            <span className="text-lg font-bold text-[#00D4AA]">{currentBid.toFixed(1)} ALGO</span>
          </div>
          <div className="flex justify-between items-center text-xs text-[#718096]">
            <span>{bidCount} bids</span>
            <div className="flex items-center gap-1">
              <Clock size={12} />
              <span>{timeRemaining}</span>
            </div>
          </div>
        </div>

        {/* Place Bid button */}
        <Button
          onClick={onBidClick}
          className="w-full bg-[#00D4AA] text-black hover:bg-[#00B894] font-semibold transition-smooth"
        >
          Place Bid
        </Button>
      </div>
    </Card>
  )
}
