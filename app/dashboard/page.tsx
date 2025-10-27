"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { TopBar } from "@/components/top-bar"
import { PollCard } from "@/components/poll-card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

const mockPolls = [
  {
    id: 1,
    title: "What is your preferred voting method?",
    category: "Governance",
    creator: "alice",
    participantCount: 245,
    endTime: "Ends in 2d 14h",
    status: "active" as const,
  },
  {
    id: 2,
    title: "Best blockchain for privacy?",
    category: "Research",
    creator: "bob",
    participantCount: 1203,
    endTime: "Ends in 5d 3h",
    status: "active" as const,
  },
  {
    id: 3,
    title: "Future of decentralized finance",
    category: "Trends",
    creator: "charlie",
    participantCount: 567,
    endTime: "Ended 2d ago",
    status: "ended" as const,
  },
  {
    id: 4,
    title: "Smart contract security preferences",
    category: "Development",
    creator: "diana",
    participantCount: 892,
    endTime: "Ends in 1d 8h",
    status: "active" as const,
  },
  {
    id: 5,
    title: "Community governance structure",
    category: "Governance",
    creator: "eve",
    participantCount: 156,
    endTime: "Draft",
    status: "draft" as const,
  },
  {
    id: 6,
    title: "Environmental impact of blockchain",
    category: "Sustainability",
    creator: "frank",
    participantCount: 2341,
    endTime: "Ends in 3d 12h",
    status: "active" as const,
  },
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("my-polls")

  return (
    <div className="flex h-screen bg-[#0A0E14]">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Tabs */}
            <div className="flex gap-8 mb-8 border-b border-[#2D3748]">
              <button
                onClick={() => setActiveTab("my-polls")}
                className={`pb-4 font-semibold transition-smooth ${
                  activeTab === "my-polls"
                    ? "text-[#00D4AA] border-b-2 border-[#00D4AA]"
                    : "text-[#A0AEC0] hover:text-white"
                }`}
              >
                My Polls
              </button>
              <button
                onClick={() => setActiveTab("participated")}
                className={`pb-4 font-semibold transition-smooth ${
                  activeTab === "participated"
                    ? "text-[#00D4AA] border-b-2 border-[#00D4AA]"
                    : "text-[#A0AEC0] hover:text-white"
                }`}
              >
                Participated
              </button>
            </div>

            {/* Poll Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockPolls.map((poll) => (
                <PollCard key={poll.id} {...poll} />
              ))}
            </div>
          </div>
        </main>

        {/* Floating Action Button */}
        <div className="fixed bottom-8 right-8">
          <Link href="/create">
            <Button className="bg-[#00D4AA] text-black hover:bg-[#00B894] rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
              <Plus size={24} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
