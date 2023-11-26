import { FC, ReactNode } from "react"
import { Box } from "../atoms/Box"

interface ProjectProps {
  title: string
  subheading: string
  tags: string[]
  children?: ReactNode
}

export const Project: FC<ProjectProps> = ({title, subheading, tags, children}: ProjectProps) => {
  return (
    <Box>
      <div className="group flex flex-col gap-4 px-6 pb-8 pt-10 text-neutral-content">
        <h2 className="text-base-content group-hover:text-primary">{title}</h2>
        <h3 className="text-base-content">{subheading}</h3>
        <ul className="mb-2 flex w-2/3 flex-row flex-wrap justify-start gap-2 text-base-content">
          {tags.map((s, i) => <li key={i} className={"badge badge-neutral group-hover:border-primary group-hover:bg-primary-content group-hover:text-primary"}>{s}</li>)}
        </ul>
        {children}
      </div>
    </Box>
  )
}