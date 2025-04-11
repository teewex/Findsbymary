"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedValueCardProps {
  icon: ReactNode
  title: string
  description: string
  delay: number
}

export function AnimatedValueCard({ icon, title, description, delay }: AnimatedValueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: delay * 0.2,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 0 20px rgba(74, 222, 128, 0.4)",
      }}
      className="flex flex-col p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-green-500/30 shadow-sm"
    >
      <div className="h-12 w-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-primary">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>
    </motion.div>
  )
}

