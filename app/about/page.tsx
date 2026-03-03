import TimelineLoader from "@/components/TimelineLoader"
import type { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "About - robertvl.dev",
}

export default function About() {
  return (
    <main>
      <div className="flex flex-col items-center">
        <h1 className="w-full text-center mb-4">About Bob</h1>
        <TimelineLoader
        // className="w-full"
        // align="alternate"
        // value={timelineItems}
        // marker={(item) => {
        //   if (item.icon) {
        //     return (
        //       <span
        //         className="flex w-10 h-10 items-center justify-center text-white border-circle border-2 rounded-full z-1 shadow-1"
        //         style={{ backgroundColor: "var(--orange)" }}
        //       >
        //         {item.icon}
        //       </span>
        //     )
        //   }
        // }}
        // content={(item) => item.content}
        ></TimelineLoader>
      </div>
    </main>
  )
}
