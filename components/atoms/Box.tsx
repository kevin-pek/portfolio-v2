import { FC, ReactNode } from "react"

interface BoxProps {
  children?: ReactNode
}

export const  Box: FC<BoxProps> = ({ children }) => {
  return (
    <div className="group relative">
      <div className="absolute inset-0 transition group-hover:bg-primary" />
      <div className="border-2 border-neutral bg-base-200 transition group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:border-primary">
        {children}
      </div>
    </div>
  )
}