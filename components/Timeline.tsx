"use client"

import { TimelineItemDataType } from "@/lib/api"
import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/20/solid"
import clsx from "clsx"
import { ReactNode } from "react"

export type TimelineType = TimelineItemDataType[]

const TimelineItemEventType: { [index: string]: ReactNode } = {
  Year: (
    <div className="size-1.5 rounded-full bg-orange-100 ring-3 ring-orange-300 dark:bg-orange-700 dark:ring-orange-500" />
  ),
  Education: (
    <div className="justify-items-center content-center size-8 rounded-full bg-orange-100 ring-3 ring-orange-300 dark:bg-orange-700 dark:ring-orange-500">
      <AcademicCapIcon className="size-6" />
    </div>
  ),
  Employment: (
    <div className="justify-items-center content-center size-8 rounded-full bg-orange-100 ring-3 ring-orange-300 dark:bg-orange-700 dark:ring-orange-500">
      <BriefcaseIcon className="size-6" />
    </div>
  ),
}

export default function Timeline({ items }: { items: TimelineItemDataType[] }) {
  return (
    <div className="flow-root">
      <ul role="list" className="space-y-6">
        {items.map((item, id) => (
          <li key={id} className="relative flex gap-x-4">
            <div
              className={clsx(
                id === items.length - 1 ? "h-6" : "-bottom-6",
                "absolute left-2 top-0 flex w-6 justify-center"
              )}
            >
              <div className="w-px bg-orange-600 dark:bg-orange-500" />
            </div>
            <div className="relative flex size-10 flex-none items-center justify-center">
              {TimelineItemEventType[item.eventType]}
            </div>

            <div>
              <h3 className="text-gray-200 dark:text-gray-100">{item.title}</h3>
              <div className="text-gray-400 dark:text-gray-300">
                {item.content}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
