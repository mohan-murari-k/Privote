"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MarketplaceCard } from "@/components/marketplace-card"
import { BidDialog } from "@/components/bid-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"

const mockDatasets = [
  {
    id: 1,
    title: "Consumer Preferences 2024",
    category: "Research",
    dataPoints: 1234,
    privacyLevel: 3,
    currentBid: 5.5,
    bidCount: 7,
    timeRemaining: "1d 8h",
  },
  {
    id: 2,
    title: "Tech Industry Sentiment",
    category: "Trends",
    dataPoints: 2156,
    privacyLevel: 4,
    currentBid: 8.2,
    bidCount: 12,
    timeRemaining: "2d 3h",
  },
  {
    id: 3,
    title: "Blockchain Adoption Survey",
    category: "Research",
    dataPoints: 892,
    privacyLevel: 5,
    currentBid: 3.1,
    bidCount: 4,
    timeRemaining: "18h",
  },
  {
    id: 4,
    title: "DeFi User Behavior Analysis",
    category: "Finance",
    dataPoints: 3421,
    privacyLevel: 4,
    currentBid: 12.5,
    bidCount: 23,
    timeRemaining: "3d 5h",
  },
  {
    id: 5,
    title: "Privacy Concerns Study",
    category: "Research",
    dataPoints: 1567,
    privacyLevel: 5,
    currentBid: 6.8,
    bidCount: 9,
    timeRemaining: "1d 14h",
  },
  {
    id: 6,
    title: "Governance Preferences Poll",
    category: "Governance",
    dataPoints: 2789,
    privacyLevel: 3,
    currentBid: 4.2,
    bidCount: 6,
    timeRemaining: "2d 10h",
  },
  {
    id: 7,
    title: "Environmental Impact Data",
    category: "Sustainability",
    dataPoints: 4156,
    privacyLevel: 2,
    currentBid: 9.9,
    bidCount: 18,
    timeRemaining: "4d 2h",
  },
  {
    id: 8,
    title: "Smart Contract Security Insights",
    category: "Development",
    dataPoints: 1823,
    privacyLevel: 4,
    currentBid: 7.3,
    bidCount: 11,
    timeRemaining: "1d 22h",
  },
]

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDataset, setSelectedDataset] = useState<(typeof mockDatasets)[0] | null>(null)
  const [bidDialogOpen, setBidDialogOpen] = useState(false)
  const walletBalance = 50.5 // Mock wallet balance

  const filteredDatasets = mockDatasets.filter((dataset) => {
    const matchesSearch = dataset.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || dataset.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleBidClick = (dataset: (typeof mockDatasets)[0]) => {
    setSelectedDataset(dataset)
    setBidDialogOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0E14] to-[#1A1F2E] flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Page header with Privote button */}
          <div className="mb-12 flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Data Marketplace</h1>
              <p className="text-[#A0AEC0]">
                Discover and bid on anonymized polling datasets from the Privote community
              </p>
            </div>
            <Link href="/">
              <Button className="bg-[#00D4AA] text-black hover:bg-[#00B894] font-semibold">Privote</Button>
            </Link>
          </div>

          {/* Search and filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {/* Search bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#718096]" size={20} />
              <Input
                placeholder="Search datasets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-[#1E2330] border-[#2D3748] text-white placeholder-[#718096]"
              />
            </div>

            {/* Category filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-48 bg-[#1E2330] border-[#2D3748] text-white">
                <Filter size={16} className="mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-[#1E2330] border-[#2D3748]">
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Research">Research</SelectItem>
                <SelectItem value="Trends">Trends</SelectItem>
                <SelectItem value="Finance">Finance</SelectItem>
                <SelectItem value="Governance">Governance</SelectItem>
                <SelectItem value="Sustainability">Sustainability</SelectItem>
                <SelectItem value="Development">Development</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Results count */}
          <div className="mb-6 text-sm text-[#718096]">
            Showing {filteredDatasets.length} dataset{filteredDatasets.length !== 1 ? "s" : ""}
          </div>

          {/* Marketplace grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredDatasets.map((dataset) => (
              <MarketplaceCard key={dataset.id} {...dataset} onBidClick={() => handleBidClick(dataset)} />
            ))}
          </div>

          {/* Empty state */}
          {filteredDatasets.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#A0AEC0] mb-4">No datasets found matching your criteria</p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                }}
                variant="outline"
                className="border-[#2D3748] text-white hover:bg-[#1E2330]"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>

      {/* Bid Dialog */}
      {selectedDataset && (
        <BidDialog
          open={bidDialogOpen}
          onOpenChange={setBidDialogOpen}
          currentBid={selectedDataset.currentBid}
          title={selectedDataset.title}
          walletBalance={walletBalance}
        />
      )}

      <Footer />
    </div>
  )
}
