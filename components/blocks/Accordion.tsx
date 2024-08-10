import { FC, ReactNode } from "react"

interface AccordionProps {
    title: string
    skills: ({ name: string, tag?: string } | string)[]
    children?: ReactNode
}

export const Accordion: FC<AccordionProps> = ({ title, skills, children }) => {
  return (
    <div className="collapse collapse-arrow border-2 border-neutral bg-base-200 text-neutral-content">
      <input type="checkbox" name="skills-accordion" />
      <div className="collapse-title flex flex-col gap-2">
        <h3 className="text-base-content">{title}</h3>
        <ul className="pointer-events-none flex flex-row flex-wrap justify-start gap-2">
          {skills.map((s, i) => (
            typeof s === "string" ?
              <li key={i} className="badge bg-primary-content text-primary">{s}</li> :
              <li key={i} className={`badge bg-primary-content text-primary ${s.tag ? "indicator" : null}`}>{s.name}{s.tag ? <span className="badge indicator-item bg-error">{s.tag}</span> : null}</li>
          ))}
        </ul>
      </div>
      <div className="collapse-content border-t-2 border-neutral text-neutral-content">
        <div className="mt-4">
          {children}
        </div>
      </div>
    </div>
  )
}