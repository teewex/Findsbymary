"use client"

import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import type { Container, Engine } from "tsparticles-engine"

export function AnimatedBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // console.log(container)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: "#4ADE80", // Bright green color
            },
            links: {
              color: "#4ADE80", // Bright green color
              distance: 150,
              enable: true,
              opacity: 0.5, // Increased opacity
              width: 1.5, // Thicker lines
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1.2, // Increased speed
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 600, // Reduced area = more particles
              },
              value: 80, // Doubled the number of particles
            },
            opacity: {
              value: 0.7, // Increased opacity
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 2, max: 5 }, // Larger particles
            },
            glow: {
              enable: true,
              color: "#4ADE80",
              frequency: 1,
              blur: 10,
            },
          },
          detectRetina: true,
        }}
        className="h-full w-full"
      />
    </div>
  )
}

