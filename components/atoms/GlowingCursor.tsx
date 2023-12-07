"use client"

import { useEffect, useRef } from "react"

export const GlowingCursor = () => {
  const cursorGlowRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const cursorGlow = document.getElementById("cursorGlow") as HTMLDivElement
    cursorGlowRef.current = cursorGlow
  
    window.addEventListener("mousemove", (e) => {
      cursorGlow.style.translate = `${e.clientX - cursorGlow.clientWidth / 2}px ${e.clientY - cursorGlow.clientHeight / 2
      }px`
    })
  }, [])

  return <div id="cursorGlow" className="pointer-events-none fixed z-10 hidden h-64 w-64 rounded-full bg-primary opacity-20 blur-[120px] md:block" />
}