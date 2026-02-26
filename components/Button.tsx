import clsx from "clsx"
import { ButtonHTMLAttributes } from "react"

export type ButtonType = {
  primary?: boolean
  secondary?: boolean
  outlined?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({
  primary,
  secondary,
  outlined,
  className,
  children,
}: ButtonType) {
  return (
    <button
      type="button"
      className={clsx(
        "rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500",
        secondary &&
          "bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-white/10 dark:text-white dark:shadow-none dark:ring-white/5 dark:hover:bg-white/20",
        outlined &&
          "bg-transparent dark:bg-transparent hover:bg-white/10 dark:hover:bg-white/20 border-2",
        className
      )}
    >
      {children}
    </button>
  )
}
