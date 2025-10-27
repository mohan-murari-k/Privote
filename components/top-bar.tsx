"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, Search, Settings } from "lucide-react"

export function TopBar() {
  return (
    <div className="border-b border-[#2D3748] bg-[#1A1F2E] px-6 py-4">
      <div className="flex items-center justify-between gap-4">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#718096]" size={18} />
            <Input
              placeholder="Search polls..."
              className="pl-10 bg-[#0A0E14] border-[#2D3748] text-white placeholder:text-[#718096]"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#EF4444] rounded-full" />
          </Button>
          <Button variant="ghost" size="sm">
            <Settings size={20} />
          </Button>
          <div className="w-10 h-10 rounded-full bg-[#00D4AA] flex items-center justify-center font-bold text-black">
            A
          </div>
        </div>
      </div>
    </div>
  )
}
