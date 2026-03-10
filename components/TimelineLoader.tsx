"use client"

import { getTimelineItemsAction } from "@/app/actions"
import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/20/solid"
import { ReactNode, useEffect, useState } from "react"
import Skeleton from "./Skeleton"
import Timeline, { TimelineItemType } from "./Timeline"

const TimelineItemEventType: { [index: string]: ReactNode } = {
  Year: null,
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

export default function TimelineLoader() {
  const [timelineItems, setTimelineItems] = useState<TimelineItemType[]>()

  useEffect(() => {
    async function fetchData() {
      const timelineDataItems = await getTimelineItemsAction()

      const timelineItems: TimelineItemType[] | undefined =
        timelineDataItems?.map((item) => {
          return {
            order: item.order,
            title: item.title,
            content: item.content,
            icon: TimelineItemEventType[item.eventType],
          }
        })

      setTimelineItems(timelineItems)
    }
    fetchData()
  }, [])

  return timelineItems ? (
    <Timeline items={timelineItems}></Timeline>
  ) : (
    <div className="flex flex-col gap-6">
      <div className="flex gap-1">
        <Skeleton className="size-12 rounded-full" />
        <div className="flex flex-col gap-1 text-left">
          <Skeleton className="w-72 h-10" />
          <Skeleton className="w-96 h-6" />
        </div>
      </div>
      <div className="flex gap-1">
        <Skeleton className="size-12 rounded-full" />
        <div className="flex flex-col gap-1 text-left">
          <Skeleton className="w-72 h-10" />
          <Skeleton className="w-96 h-6" />
        </div>
      </div>
      <div className="flex gap-1">
        <Skeleton className="size-12 rounded-full" />
        <div className="flex flex-col gap-1 text-left">
          <Skeleton className="w-72 h-10" />
          <Skeleton className="w-96 h-6" />
        </div>
      </div>
    </div>
  )
}
