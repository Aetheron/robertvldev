import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid"
import { HtmlHTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

export type StatsDataType = {
  name: string
  value: string
  unit?: string
  delta?: number
}

export type StatsType = {
  heading?: string | ReactNode
  stats: StatsDataType[]
} & HtmlHTMLAttributes<HTMLElement>

export default function Stats({ className, heading, stats }: StatsType) {
  return (
    <div
      className={twMerge(
        "rounded-lg py-24 sm:py-32 bg-white dark:bg-gray-900",
        className
      )}
    >
      {heading && <h2 className="text-center text-5xl pb-12">{heading}</h2>}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat, i) => (
            <div key={i} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 font-normal text-gray-600 dark:text-gray-400">
                {stat.name}
              </dt>
              <dd className="justify-items-center order-first text-3xl font-semibold text-gray-900 sm:text-5xl dark:text-white">
                <div className="flex flex-row items-baseline">
                  {stat.value}
                  {stat.unit && (
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      {stat.unit}
                    </span>
                  )}
                  {stat.delta && (
                    <p
                      className={`${
                        stat.delta > 0
                          ? "text-green-600 dark:text-green-400"
                          : "text-red-600 dark:text-red-400"
                      } ml-4 flex items-baseline text-sm font-semibold`}
                    >
                      {stat.delta > 0 ? (
                        <ArrowUpIcon
                          aria-hidden="true"
                          className="size-5 shrink-0 self-center text-green-500 dark:text-green-400"
                        />
                      ) : (
                        <ArrowDownIcon
                          aria-hidden="true"
                          className="size-5 shrink-0 self-center text-red-500 dark:text-red-400"
                        />
                      )}
                      {stat.delta}
                      {stat.unit}
                    </p>
                  )}
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
