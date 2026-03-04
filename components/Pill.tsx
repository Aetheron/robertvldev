import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

export default function Pill({
  className,
  children,
}: HTMLAttributes<HTMLElement>) {
  return (
    <span
      className={
        `inline-flex items-center rounded-full ` +
        twMerge(
          "bg-indigo-100 px-4 py-2 text-xs font-medium text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-400",
          className
        )
      }
    >
      {children}
    </span>
  )
}
