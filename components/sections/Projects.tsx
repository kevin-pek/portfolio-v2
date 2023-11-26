import Image from "next/image"
import { Project } from "../blocks/Project"
import liftoff from "/public/media/liftoff.png"
import dashboard from "/public/media/quiz-platform/admin-dashboard.png"
import dashboard2 from "/public/media/quiz-platform/admin-dashboard-2.png"
import quiz from "/public/media/quiz-platform/manage-quiz.png"
import user from "/public/media/quiz-platform/manage-user.png"
import model from "/public/media/quiz-platform/manage-model.png"
import session from "/public/media/quiz-platform/quiz.png"

export const Projects = () => {
  return (
    <section className="flex flex-col items-center gap-12 px-4 text-base-content md:px-16 lg:px-24">
      <h1>Some Things I&apos;ve Built</h1>

      <div className="relative flex flex-col items-center lg:flex-row">
        <div className="hidden lg:block lg:w-3/4">
          <Image placeholder="blur" src={liftoff} alt="liftoff vs code theme" />
        </div>
        <div className="right-0 w-full lg:absolute lg:w-1/3">
          <a target="_blank" href="https://github.com/kevin-pek/liftoff-vscode" rel="noreferrer">
            <Project title="Liftoff VS Code Theme" subheading="A Dark Theme for Visual Studio Code" tags={["VS Code", "Theme"]}>
              <p>Taking inspiration from various other themes such as Embark and Rose Pine, I made a theme that is easy on the eyes, and well suited for late night coding sessions.</p>
              <Image placeholder="blur" src={liftoff} alt="liftoff vs code theme" className="lg:hidden" />
            </Project>
          </a>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-between lg:flex-row xl:justify-end">
        <div className="left-4 w-full lg:w-1/2 xl:absolute">
          <a target="_blank" href="https://github.com/kevin-pek/pix2latex" rel="noreferrer">
            <Project title="Pix2LaTeX" subheading="Menubar App for convenient OCR on math equations" tags={["Python", "OCR"]}>
              <p>As someone who takes notes using latex, I often find it troublesome to copy math equations.</p>
              <p>You can easily snap a portion of your screen by pressing <kbd className="kbd kbd-sm">cmd</kbd> + <kbd className="kbd kbd-sm">shift</kbd> + <kbd className="kbd kbd-sm">2</kbd>, and have the corresponding math expression expressed in latex copied to your clipboard. Toggle between native OCR and math OCR from the menubar.</p>
              <video className="mt-4 lg:hidden" loop muted autoPlay playsInline><source src="media/pix2latex.mp4" type="video/mp4" /></video>
            </Project>
          </a>
        </div>
        <div className="right-20 hidden w-1/2 border border-primary lg:block">
          <video loop muted autoPlay playsInline><source src="media/pix2latex.mp4" type="video/mp4" /></video>
        </div>
      </div>

      <div className="relative flex w-full flex-col items-center xl:flex-row">
        <div className="mockup-browser hidden bg-neutral xl:block xl:w-3/4">
          <div className="mockup-browser-toolbar"><div className="input">https://www.edtech-quiz-platform.com</div></div>
          <div className="carousel bg-base-200">
            <Image placeholder="blur" src={dashboard} alt="quiz platform" className="carousel-item" />
            <Image placeholder="blur" src={dashboard2} alt="quiz platform" className="carousel-item" />
            <Image placeholder="blur" src={user} alt="quiz platform" className="carousel-item" />
            <Image placeholder="blur" src={quiz} alt="quiz platform" className="carousel-item" />
            <Image placeholder="blur" src={model} alt="quiz platform" className="carousel-item" />
            <Image placeholder="blur" src={session} alt="quiz platform" className="carousel-item" />
          </div>
        </div>
        <div className="right-0 w-full xl:absolute xl:w-5/12">

          <Project title="Fullstack Quiz Platform" subheading="Quiz Platform with Intelligent Recommendation System using Multi Armed Bandits" tags={["Typescript", "Python", "React", "FastAPI", "Docker", "AWS", "Machine Learning"]}>
            <p className="text-justify">The frontend user and admin interface were made using Material UI and React, with a backend server written in Express. Both codebases were written in Typescript.</p>
            <p className="text-justify">I implemented machine learning algorithms, which were then deployed as a separate backend service using FastAPI, with an additional user interface to easily change algorithms.</p>
            <p className="text-justify">Services were containerised and deployed on an AWS EC2 instance using Docker, using an Nginx webserver and MySQL Database.</p>
            <div className="mockup-browser mt-4 bg-neutral xl:hidden xl:w-3/4">
              <div className="mockup-browser-toolbar"><div className="input">https://www.edtech-quiz-platform.com</div></div>
              <div className="carousel bg-base-200">
                <Image placeholder="blur" src={dashboard} alt="quiz platform" className="carousel-item" />
                <Image placeholder="blur" src={dashboard2} alt="quiz platform" className="carousel-item" />
                <Image placeholder="blur" src={user} alt="quiz platform" className="carousel-item" />
                <Image placeholder="blur" src={quiz} alt="quiz platform" className="carousel-item" />
                <Image placeholder="blur" src={model} alt="quiz platform" className="carousel-item" />
                <Image placeholder="blur" src={session} alt="quiz platform" className="carousel-item" />
              </div>
            </div>
          </Project>
        </div>
      </div>
    </section>
  )
}