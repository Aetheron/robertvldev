"use client"

import { getTimelineItemsAction } from "@/app/actions"
import { TimelineItemType } from "@/lib/api"
import { useEffect, useState } from "react"
import Skeleton from "./Skeleton"
import Timeline from "./Timeline"

export default function TimelineLoader() {
  const [timelineItems, setTimelineItems] = useState<TimelineItemType[]>()

  useEffect(() => {
    async function fetchData() {
      const timelineItems = await getTimelineItemsAction()

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
