"use client"

import { FC, useEffect, useState } from "react"

export const Navbar: FC = () => {
  const [theme, setTheme] = useState<string>()
  
  useEffect(() => {
    if ("theme" in localStorage) {
      if (localStorage.theme === "dark") {
        setTheme("dark")
      } else {
        setTheme("light")
      }
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark")
      } else {
        setTheme("light")
      }
    }
  }, [])
  
  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme)
      document.documentElement.setAttribute("data-theme", theme)
      // Update manifest theme color
      const manifest = document.querySelector("link[rel=\"manifest\"]")
      if (manifest) {
        fetch(manifest.href)
          .then((response) => response.json())
          .then((data) => {
            data.theme_color = theme === "dark" ? "#000000" : "#ffffff"
            const blob = new Blob([JSON.stringify(data)], { type: "application/json" })
            const url = URL.createObjectURL(blob)
            manifest.href = url
          })
      }
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark")
  }

  return (
    // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
    <div className="fixed inset-x-0 z-40 mx-auto w-full border border-neutral bg-neutral bg-opacity-50 font-semibold sm:mt-4 sm:w-fit sm:rounded-full" style={{ backdropFilter: "blur(16px)" }}>
      {/* hidden checkbox that controls the drawer */}
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />

      {/* Desktop device */}
      <ul className="menu menu-horizontal flex w-full flex-row items-center justify-between p-0 pl-2 text-base-content" style={{ paddingRight: "-4px" }}>
        <label htmlFor="nav-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost sm:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-6 w-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
          
        <li className="hidden sm:block"><a href="https://www.kevinpek.com" className="rounded-full hover:bg-transparent hover:text-primary">About</a></li>
        {/* <li className="hidden sm:block"><a href="https://www.kevinpek.com/gallery" className="rounded-full hover:bg-transparent hover:text-primary">Gallery</a></li> */}
        <li className="hidden sm:block"><a href="https://blog.kevinpek.com" className="rounded-full hover:bg-transparent hover:text-primary">Blog</a></li>

        {/* dark mode button - stays for all screen sizes */}
        <label className="btn swap border-none bg-transparent hover:text-primary sm:rounded-full sm:bg-neutral">
          {/* hidden checkbox controlling state */}
          <input type="checkbox" onClick={toggleTheme} />
          
          {theme === "light" ?
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 fill-current">
              <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 fill-current">
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
          }
        </label>
      </ul>

      {/* only shows on small/mobile */}
      <div className="drawer-side text-base-content">
        <label htmlFor="nav-drawer" aria-label="close sidebar" className="drawer-overlay"></label> 
        <ul className="menu min-h-full w-80 bg-base-200 p-4 pt-8 text-2xl">
          {/* Sidebar content here */}
          <li><a href="https://www.kevinpek.com">About</a></li>
          {/* <li><a href="https://www.kevinpek.com/gallery">Gallery</a></li> */}
          <li><a href="https://blog.kevinpek.com">Blog</a></li>
        </ul>
      </div>
    </div>
  )
}