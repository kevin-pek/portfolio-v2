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
    <div className="min-h-screen" onMouseMove={onMouseMove}>
      <Particles color="#AAA" size={0.5} sizeVariance={2} speed={0.3} particleCount={30} />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-evenly px-4 md:gap-16 md:px-16 lg:flex-row">
        <div className="flex min-h-screen flex-col justify-center gap-16 sm:mt-48 sm:min-h-fit lg:m-0 lg:w-1/2">
          <div>
            <h1 className="text-base-content">Hi! 👋 I&apos;m <b className="text-primary">Kevin Pek</b></h1>
            <h3 className="text-neutral-content">Third year undergraduate, studying Data Science and Computer Science at the National University of Singapore.</h3>
            <p className="mt-4 text-neutral-content">Welcome to my personal website! Here you can find some of my works, which include my past experiments with <a href="" className="hover:text-primary"><b>digital art</b></a>, as well as my <a href="" className="hover:text-primary"><b>personal blog</b></a>.</p>
          </div>
          <div>
            <a target='_blank' href='files/resume.pdf' className="btn btn-outline btn-primary rounded-none">Resume</a>
          </div>
          <footer className="footer">
            <nav>
              <header className="footer-title">Social</header>
              <div className="grid grid-flow-col gap-4">
                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> 
                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
              </div>
            </nav>
          </footer>
        </div>

        <div className="flex flex-col gap-6 lg:w-1/2">
          <div>
            <h2 className="mb-3">About Me</h2>
            <p className="text-justify text-neutral-content">Back in 2013, I created my first terminal based game using C++. This led me down the rabbit hole into the world of programming and web development. I spent a good number of my early years focused on game development and interactive media on the web.</p>
          </div>

          <p className="text-justify text-neutral-content">Fast forward to today, I am an aspiring machine learning engineer, and am interested in bringing the power of mathematics to real world applications through high performance code.</p>

          <section className="mt-8 flex flex-col gap-4">
            <h2>My Interests</h2>

            <Accordion title="Programming Languages" skills={["Typescript/Javascript", "Python", "R", "Java", "C#", "C"]}>
              <p>These are the programming languages I have worked recently, through various university, project and work experiences.</p>
            </Accordion>

            <Accordion title="Web Development" skills={["Docker", "React", "Express", "FastAPI", "Flask", "Django", "Spring Boot"]}>
              <p>I have worked on several projects mainly using React (including React Native) and NextJs, using various libaries.</p>
            </Accordion>

            <Accordion title="Game Development" skills={["Unity", "Blender"]}>
              <p>Many of my past internship and countless past projects over the years have been done using the Unity Game Engine.</p>
            </Accordion>
          </section>
        </div>
      </div>
    </div>
  )
}