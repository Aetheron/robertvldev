import clsx from "clsx"
import { HTMLAttributes, ReactNode } from "react"

export type CardType = {
  cardTitle?: ReactNode
} & HTMLAttributes<HTMLElement>

export default function Card({ cardTitle, className, children }: CardType) {
  return (
    <div
      className={clsx(
        "divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow dark:divide-white/10 dark:bg-gray-800/50 dark:shadow-none dark:outline dark:outline-1 dark:-outline-offset-1 dark:outline-white/10",
        className
      )}
    >
      {cardTitle && (
        <div className="px-4 py-5 sm:px-6">
          <h3>{cardTitle}</h3>
        </div>
      )}
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  )
}
