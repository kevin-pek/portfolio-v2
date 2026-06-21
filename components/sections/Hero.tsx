/* eslint-disable react/no-unknown-property */
"use client"

import { FC, MouseEventHandler, useRef } from "react"
import { Particles } from "../atoms/Particle"
import { Accordion } from "../blocks/Accordion"

export const Hero: FC = () => {
  const mouse = useRef<[number, number]>([0, 0])
  const onMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    mouse.current = [e.clientX - window.innerWidth / 2, e.clientY - window.innerHeight / 2]
  }

  return (
    <div onMouseMove={onMouseMove}>
      <Particles color="#AAA" size={0.5} sizeVariance={2} speed={0.3} particleCount={30} />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-evenly gap-16 px-4 md:px-16 lg:mt-32 lg:flex-row lg:items-start">
        <div className="mt-40 flex flex-col justify-center gap-16 lg:m-0 lg:w-1/2">
          <div>
            <h1 className="mb-4 text-base-content">Hi! 👋 I&apos;m <b className="text-primary">Kevin Pek</b></h1>
            <p className="mt-6 text-neutral-content">I&apos;m currently a Software Engineer at Meta. Here you can find some of my random side projects. Occasionally I ramble about random things on my <a href="https://blog.kevinpek.com" className="hover:text-primary"><b>blog</b></a>.</p>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:w-1/2">
          <div>
            <h2 className="text-base-content">About Me</h2>
            <p className="mt-4 text-neutral-content">Born and raised in Singapore, I graduated from NUS at the end of 2024. I first learnt programming in 2013 to make video games, and that kickstarted my love for learning random knowledge and skills.</p>
            <p className="mt-3 text-neutral-content">I enjoy singing, art and movies, and I am always down to learn or experience something new.</p>
          </div>

          <section className="mt-8 flex flex-col gap-4">
            <h2 className="text-base-content">Skills & Interests</h2>
            <Accordion title="AI/ML" skills={[]}>
              <p>I started learning about this through the course &quot;Machine Learning A-Z&quot; on Udemy in 2021. Around this time I also came across <a href="https://blogs.nvidia.com/blog/gaugan-photorealistic-landscapes-nvidia-research/" className="hover:text-primary"><b>NVIDIA&apos;s GauGAN</b></a>, which started my fascination with Deep Learning and Generative AI.</p>
              <p className="mt-3">My undergraduate coursework and internships have given me a deeper understanding of this topic, and I also play with various AI models in my side projects too.</p>
            </Accordion>

            <Accordion title="Web Development" skills={[]}>
              <p>I started my journey into web development in 2021 from Harvard&apos;s CS50W course. Since then it has become a skill I use frequently for various side projects.</p>
            </Accordion>

            <Accordion title="Digital Art" skills={[]}>
              <p>I originally learnt blender and photoshop to make assets for the games I wanted to make. This ended up spinning off into a new hobby.</p>
              <p className="mt-3">Recently I have been learning to make interactive/generative art that mixes computer graphics with machine learning techniques.</p>
            </Accordion>
          </section>
        </div>
      </div>
    </div>
  )
}
