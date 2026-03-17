import PortfolioPageTemplate, {
  ScreenshotType,
} from "@/components/PortfolioPageTemplate"
import cover from "@/public/luyh/cover.jpg"
import luyh from "@/public/luyh/hero.svg"
import info from "@/public/luyh/info.jpg"
import lectionary from "@/public/luyh/lectionary.jpg"
import score from "@/public/luyh/score.jpg"
import search from "@/public/luyh/search.jpg"

export default function LUYH() {
  const pills = ["Objective-C / Cocoa"]
  const screenshots: ScreenshotType[] = [
    {
      src: cover,
      alt: "Cover of the Lift Up Your Hearts Hymnal displayed in the app.",
    },
    {
      src: lectionary,
      alt: "A screenshot showing the lectionary dropdown in the interface of the app. The smaller window contains a date picker and a list of hymns the lectionary recommends for the selected day.",
    },
    {
      src: search,
      alt: "A screenshot showing the search dropdown in the interface of the app. A smaller window contains a search bar with the entry 'John' typed in. Results for the search appear below and include entries categorized by scripture, topic, and person.",
    },
    {
      src: score,
      alt: "A view of the sheet music for the hymn 'All Creatures of Our God and King.",
    },
    {
      src: info,
      alt: "An informational page showing detals about the hymn 'All Creatures of Our God and King'. There is a graph showing usage of the hymn in hymnals over time and a paragraph of background information.",
    },
  ]

  return (
    <PortfolioPageTemplate
      title="Lift Up Your Hearts Hymnal App"
      heroImage={luyh}
      pills={pills}
      screenshots={screenshots}
    ></PortfolioPageTemplate>
  )
}
