import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreVertical, Users, Clock } from "lucide-react"

interface PollCardProps {
  title: string
  category: string
  creator: string
  participantCount: number
  endTime: string
  status: "active" | "ended" | "draft"
}

export function PollCard({ title, category, creator, participantCount, endTime, status }: PollCardProps) {
  const statusColors = {
    active: "bg-[#10B981]/20 text-[#10B981]",
    ended: "bg-[#718096]/20 text-[#718096]",
    draft: "bg-[#F59E0B]/20 text-[#F59E0B]",
  }

  return (
    <Card className="bg-[#1E2330] border-[#2D3748] p-6 hover:border-[#00D4AA]/50 transition-smooth hover:shadow-lg hover:shadow-[#00D4AA]/10 hover:-translate-y-1">
      <div className="flex justify-between items-start mb-4">
        <Badge variant="outline" className="bg-[#1A1F2E] border-[#2D3748]">
          {category}
        </Badge>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <MoreVertical size={16} />
        </Button>
      </div>

      <h3 className="text-lg font-bold mb-2 line-clamp-2">{title}</h3>
      <p className="text-sm text-[#718096] mb-4">By: @{creator}</p>

      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2 text-sm text-[#A0AEC0]">
          <Users size={16} />
          <span>{participantCount} participants</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-[#A0AEC0]">
          <Clock size={16} />
          <span>{endTime}</span>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Badge className={statusColors[status]}>{status.charAt(0).toUpperCase() + status.slice(1)}</Badge>
        <Button size="sm" className="bg-[#00D4AA] text-black hover:bg-[#00B894]">
          Vote
        </Button>
      </div>
    </Card>
  )
}
