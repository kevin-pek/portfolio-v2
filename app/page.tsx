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
        <footer className="footer footer-center z-10 bg-base-200 p-10 text-base-content">
          <aside className="max-w-lg"><p>Designed and built by me using NextJs, TailwindCSS, DaisyUI, deployed using Vercel. Written in Typescript. Available on Github <a target="_blank" rel="noreferrer" href="https://github.com/kevin-pek/portfolio-v2" className="font-bold hover:text-primary">here</a>.</p></aside>
        </footer>
      </main>
    </>
  )
}
