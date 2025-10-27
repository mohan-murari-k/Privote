"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle } from "lucide-react"

interface BidDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  currentBid: number
  title: string
  walletBalance: number
}

export function BidDialog({ open, onOpenChange, currentBid, title, walletBalance }: BidDialogProps) {
  const [bidAmount, setBidAmount] = useState(currentBid + 0.5)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate bid submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    onOpenChange(false)
  }

  const isInsufficientBalance = bidAmount > walletBalance
  const isValidBid = bidAmount > currentBid

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#1E2330] border-[#2D3748] text-white">
        <DialogHeader>
          <DialogTitle>Place Bid</DialogTitle>
          <DialogDescription className="text-[#A0AEC0]">{title}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Current bid info */}
          <div className="bg-[#0A0E14] rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-[#718096]">Current Bid</span>
              <span className="text-lg font-bold text-[#00D4AA]">{currentBid.toFixed(1)} ALGO</span>
            </div>
          </div>

          {/* Bid input */}
          <div className="space-y-2">
            <Label htmlFor="bid-amount" className="text-white">
              Your Bid (ALGO)
            </Label>
            <Input
              id="bid-amount"
              type="number"
              step="0.1"
              min={currentBid + 0.1}
              value={bidAmount}
              onChange={(e) => setBidAmount(Number.parseFloat(e.target.value) || 0)}
              className="bg-[#0A0E14] border-[#2D3748] text-white placeholder-[#718096]"
              placeholder="Enter bid amount"
            />
            {!isValidBid && <p className="text-xs text-[#EF4444]">Bid must be higher than current bid</p>}
          </div>

          {/* Wallet balance */}
          <div className="bg-[#0A0E14] rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-[#718096]">Wallet Balance</span>
              <span className="text-lg font-bold text-white">{walletBalance.toFixed(1)} ALGO</span>
            </div>
          </div>

          {/* Insufficient balance warning */}
          {isInsufficientBalance && (
            <div className="flex items-center gap-2 bg-[#EF4444]/10 border border-[#EF4444]/30 rounded-lg p-3">
              <AlertCircle size={16} className="text-[#EF4444]" />
              <span className="text-sm text-[#EF4444]">Insufficient balance</span>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="border-[#2D3748] text-white hover:bg-[#0A0E14]"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!isValidBid || isInsufficientBalance || isSubmitting}
            className="bg-[#00D4AA] text-black hover:bg-[#00B894] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Placing Bid..." : "Confirm Bid"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
