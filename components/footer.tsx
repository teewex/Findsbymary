import Link from "next/link"
import { Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-pink-900 via-pink-950 to-background border-t border-pink-900/30">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="https://www.linkedin.com/in/maryirondi/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:text-primary transition-colors"
        >
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </Link>
        <p className="text-white text-sm">© {new Date().getFullYear()} Finds By Mary</p>
      </div>
    </footer>
  )
}

