"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimationControls } from "framer-motion"

interface IndustryTickerProps {
  industries: string[]
}

export function IndustryTicker({ industries }: IndustryTickerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimationControls()

  // Duplicate the industries to create a seamless loop
  const allIndustries = [...industries, ...industries]

  useEffect(() => {
    const startAnimation = async () => {
      if (!containerRef.current) return

      const containerWidth = containerRef.current.offsetWidth

      await controls.start({
        x: -containerWidth,
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        },
      })
    }

    startAnimation()
  }, [controls])

  return (
    <div className="overflow-hidden relative w-full py-6">
      <div ref={containerRef} className="flex whitespace-nowrap">
        <motion.div className="flex space-x-8" animate={controls}>
          {allIndustries.map((industry, index) => (
            <div
              key={`${industry}-${index}`}
              className="flex-shrink-0 px-6 py-4 bg-background rounded-lg border shadow-sm"
            >
              <h3 className="font-bold text-white">{industry}</h3>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

