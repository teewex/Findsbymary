"use client"
import { motion } from "framer-motion"

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Green circle */}
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-green-400/30 blur-xl"
        animate={{
          x: [0, 40, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{ top: "10%", left: "10%" }}
      />

      {/* Smaller circle */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-green-500/40 blur-lg"
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{ top: "30%", right: "15%" }}
      />

      {/* Gradient blob */}
      <motion.div
        className="absolute w-80 h-80 bg-gradient-to-r from-green-400/30 to-green-600/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{ bottom: "10%", right: "5%" }}
      />

      {/* Additional elements for more visibility */}
      <motion.div
        className="absolute w-40 h-40 rounded-full bg-green-300/30 blur-xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{ bottom: "30%", left: "20%" }}
      />

      <motion.div
        className="absolute w-24 h-24 rounded-full bg-green-600/30 blur-lg"
        animate={{
          x: [0, 20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{ top: "20%", right: "30%" }}
      />
    </div>
  )
}

