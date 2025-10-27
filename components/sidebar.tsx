"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Plus, ShoppingCart, User, Vote, Settings } from "lucide-react"

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Plus, label: "Create Poll", href: "/create" },
  { icon: ShoppingCart, label: "Marketplace", href: "/marketplace" },
  { icon: User, label: "Profile", href: "/profile" },
  { icon: Vote, label: "Governance", href: "/governance" },
  { icon: Settings, label: "Settings", href: "/settings" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-[#1A1F2E] border-r border-[#2D3748]">
      {/* Logo */}
      <div className="p-6 border-b border-[#2D3748]">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <div className="w-8 h-8 bg-[#00D4AA] rounded-lg flex items-center justify-center">
            <span className="text-black font-bold">P</span>
          </div>
          <span>Privote</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-smooth ${
                isActive ? "bg-[#00D4AA]/10 text-[#00D4AA]" : "text-[#A0AEC0] hover:bg-[#2D3748] hover:text-white"
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-[#2D3748]">
        <div className="text-xs text-[#718096]">
          <p className="font-semibold mb-1">Reputation</p>
          <p>⭐⭐⭐ Gold (8,450)</p>
        </div>
      </div>
    </aside>
  )
}
