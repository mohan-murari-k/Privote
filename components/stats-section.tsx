"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

const stats = [
  { label: "Total Polls", value: 1234, suffix: "" },
  { label: "Active Users", value: 50000, suffix: "+" },
  { label: "Data Transactions", value: 2500000, suffix: "+" },
  { label: "Avg. Privacy Score", value: 98, suffix: "%" },
]

export function StatsSection() {
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    const timers = stats.map((stat, index) => {
      const increment = stat.value / 50
      let current = 0
      return setInterval(() => {
        current += increment
        if (current >= stat.value) {
          current = stat.value
          clearInterval(timers[index])
        }
        setCounts((prev) => {
          const newCounts = [...prev]
          newCounts[index] = Math.floor(current)
          return newCounts
        })
      }, 30)
    })

    return () => timers.forEach((timer) => clearInterval(timer))
  }, [])

  return (
    <section id="stats" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#1A1F2E]/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-[#1E2330] border-[#2D3748] p-8 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#00D4AA] mb-2">
                {counts[index].toLocaleString()}
                {stat.suffix}
              </div>
              <div className="text-[#A0AEC0]">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
