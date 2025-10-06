"use client"

import { useEffect, useState } from "react"

const phrases = [
  "Building delightful UIs.",
  "Crafting fast web apps.",
  "Transforming ideas into products.",
  "Frontend, polished and scalable.",
]

export function AnimatedText() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length)
    }, 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <p className="text-balance text-center text-base leading-relaxed text-muted-foreground md:text-lg">
      <span key={index} className="inline-block animate-fadeIn text-primary">
        {phrases[index]}
      </span>
    </p>
  )
}
