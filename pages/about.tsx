import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  ISbStoryData,
  StoryblokComponentType,
  getStoryblokApi,
} from "@storyblok/react"
import Head from "next/head"
import type { NextPage } from "next/types"
import { Timeline } from "primereact/timeline"
import React, { useEffect, useState } from "react"
import type { ISbLinkURLObject } from "storyblok-js-client"
import { render } from "storyblok-rich-text-react-renderer"

interface SBStoryType {
  cv: number
  links: (ISbStoryData | ISbLinkURLObject)[]
  rels: ISbStoryData[]
  story: ISbStoryData
}
interface SBComponentType
  extends StoryblokComponentType<string>,
    TimelineEvent {}
interface TimelineEvent {
  content: any
  icon?: string
  color?: string
  position?: string
}
interface TimelineItem {
  content: React.ReactNode
  icon: React.ReactNode | null
}
const TimelineIcon: { [index: string]: React.ReactNode } = {
  graduation_cap: <FontAwesomeIcon icon={faGraduationCap} />,
  briefcase: <FontAwesomeIcon icon={faBriefcase} />,
}

const About: NextPage = () => {
  const [timelineItems, setTimelineItems] = useState<TimelineItem[]>()
  useEffect(() => {
    async function fetchData() {
      let timelineItems: TimelineItem[] = []

      const storyblokApi = getStoryblokApi()
      const { data }: { data: SBStoryType } = await storyblokApi.get(
        "cdn/stories/about",
        {
          version:
            process.env.VERCEL_ENV == "production" ? "published" : "draft",
        }
      )
      console.log(process.env.VERCEL_ENV)
      data.story.content.body.map((item: SBComponentType) => {
        if (item.component == "timeline_event") {
          timelineItems.push({
            content: render(item.content),
            icon: item.icon ? TimelineIcon[item.icon] : null,
          })
        }
      })
      setTimelineItems(timelineItems)
    }
    fetchData()
  }, [])

  return (
    <>
      <Head>
        <title>About - robertvl.dev</title>
      </Head>
      <main>
        <div className="flex flex-col items-center">
          <h1 className="w-full text-center mb-4">About Bob</h1>
          <Timeline
            className="w-full"
            align="alternate"
            value={timelineItems}
            marker={(item) => {
              if (item.icon) {
                return (
                  <span
                    className="flex w-10 h-10 items-center justify-center text-white border-circle border-2 rounded-full z-1 shadow-1"
                    style={{ backgroundColor: "var(--orange)" }}
                  >
                    {item.icon}
                  </span>
                )
              }
            }}
            content={(item) => item.content}
          ></Timeline>
        </div>
      </main>
    </>
  )
}

export default About
