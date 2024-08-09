import Image from "next/image"
import { Project } from "../blocks/Project"
import liftoff from "/public/media/liftoff.png"
import dashboard from "/public/media/quiz-platform/admin-dashboard.png"
import dashboard2 from "/public/media/quiz-platform/admin-dashboard-2.png"
import quiz from "/public/media/quiz-platform/manage-quiz.png"
import user from "/public/media/quiz-platform/manage-user.png"
import model from "/public/media/quiz-platform/manage-model.png"
import session from "/public/media/quiz-platform/quiz.png"
import pdf1 from "/public/media/pdfsearch/pdfsearch-1.png"
import pdf2 from "/public/media/pdfsearch/pdfsearch-2.png"
import pdf3 from "/public/media/pdfsearch/pdfsearch-3.png"

export const Projects = () => {
  return (
    <section className="flex flex-col items-center gap-12 px-4 text-base-content md:px-16 lg:px-24">
      <h1>Other Things I&apos;ve Made</h1>

      <div className="relative flex flex-col items-center lg:flex-row">
        <div className="hidden lg:block lg:w-3/4">
          <div className="right-20 hidden border border-primary lg:block">
            <div className="carousel bg-base-200">
              <Image placeholder="blur" src={pdf3} alt="pdfsearch" className="carousel-item" />
              <Image placeholder="blur" src={pdf2} alt="pdfsearch" className="carousel-item" />
              <Image placeholder="blur" src={pdf1} alt="pdfsearch" className="carousel-item" />
            </div>
          </div>
        </div>
        <div className="right-0 w-full lg:absolute lg:w-1/3">
          <a target="_blank" href="https://github.com/kevin-pek/pdfsearch" rel="noreferrer">
            <Project title="PDFSearch" subheading="Open Source Raycast Extension" tags={["Typescript", "React", "NodeJS", "Swift", "SearchKit"]}>
              <p>Create collections of PDF/text files and search through all of them at once.</p>
              <div className="carousel bg-base-200 lg:hidden">
                <Image placeholder="blur" src={pdf3} alt="pdfsearch" className="carousel-item" />
                <Image placeholder="blur" src={pdf2} alt="pdfsearch" className="carousel-item" />
                <Image placeholder="blur" src={pdf1} alt="pdfsearch" className="carousel-item" />
              </div>
            </Project>
          </a>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-between lg:flex-row xl:justify-end">
        <div className="left-4 w-full lg:w-1/2 xl:absolute">
          <a target="_blank" href="https://github.com/kevin-pek/pix2latex" rel="noreferrer">
            <Project title="Pix2LaTeX" subheading="Menubar App for convenient OCR on math equations" tags={["Python", "OCR"]}>
              <p>Menubar app for OCR using <kbd className="kbd kbd-sm">cmd</kbd> + <kbd className="kbd kbd-sm">shift</kbd> + <kbd className="kbd kbd-sm">2</kbd> to have math expression in latex copied to clipboard. Toggle between native OCR and math OCR from the menubar.</p>
              <video className="mt-4 lg:hidden" loop muted autoPlay playsInline><source src="media/pix2latex.mp4" type="video/mp4" /></video>
            </Project>
          </a>
        </div>
        <div className="right-20 hidden w-1/2 border border-primary lg:block">
          <video loop muted autoPlay playsInline><source src="media/pix2latex.mp4" type="video/mp4" /></video>
        </div>
      </div>

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
    </section>
  )
}