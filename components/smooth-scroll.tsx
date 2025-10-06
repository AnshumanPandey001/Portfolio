"use client"

import type React from "react"

import { useEffect } from "react"
import Lenis from "lenis"

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth ease-out
      smoothWheel: true,
      wheelMultiplier: 1,
    })

    let rafId = 0
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      // @ts-expect-error dispose not typed on all versions
      lenis?.destroy?.()
    }
  }, [])

  return <>{children}</>
}
