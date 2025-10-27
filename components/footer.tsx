import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-[#2D3748] bg-[#0A0E14] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-4">
              <div className="w-8 h-8 bg-[#00D4AA] rounded-lg flex items-center justify-center">
                <span className="text-black font-bold">P</span>
              </div>
              <span>Privote</span>
            </div>
            <p className="text-[#718096] text-sm">Privacy-first polling on Algorand</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-[#A0AEC0]">
              <li>
                <Link href="#" className="hover:text-[#00D4AA] transition-smooth">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#00D4AA] transition-smooth">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#00D4AA] transition-smooth">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-[#A0AEC0]">
              <li>
                <Link href="#" className="hover:text-[#00D4AA] transition-smooth">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#00D4AA] transition-smooth">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#00D4AA] transition-smooth">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-[#A0AEC0]">
              <li>
                <Link href="#" className="hover:text-[#00D4AA] transition-smooth">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#00D4AA] transition-smooth">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#00D4AA] transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#2D3748] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#718096] text-sm">© 2025 Privote. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-[#718096] hover:text-[#00D4AA] transition-smooth">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="text-[#718096] hover:text-[#00D4AA] transition-smooth">
              <Github size={20} />
            </Link>
            <Link href="#" className="text-[#718096] hover:text-[#00D4AA] transition-smooth">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
