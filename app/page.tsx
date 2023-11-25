import { Hero } from "@/components/sections/Hero"
import { GlowingCursor } from "@/components/atoms/GlowingCursor"
import React from "react"
import { Navbar } from "@/components/sections/Navbar"
import { Projects } from "@/components/sections/Projects"
import { Experiences } from "@/components/sections/Experiences"

export default function Home() {
  return (
    <>
      <Navbar />
      <GlowingCursor />
      <main className="flex min-h-screen flex-col gap-16 bg-base-100">
        <Hero />
        <Projects />
        <Experiences />
      </main>
    </>
  )
}
