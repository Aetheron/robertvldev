import PortfolioPageTemplate, {
  ScreenshotType,
} from "@/components/PortfolioPageTemplate"
import { NextPage } from "next/types"
import Image from "next/image"
import stockx from "@/public/stockx/hero.jpg"
import buying from "@/public/stockx/stockx_buying.png"
import hiw from "@/public/stockx/stockx_hiw.png"
import blog from "@/public/stockx/stockx_blog.png"
import news from "@/public/stockx/stockx_newsroom_ko_kr.png"

const StockX: NextPage = () => {
  const pills = [
    "PHP",
    "Wordpress",
    "Advanced Custom Fields",
    "Custom Wordpress Plugins",
    "MySQL",
    "Smartling",
    "Render",
  ]

  const screenshots: ScreenshotType[] = [
    { src: buying, alt: "StockX About Buying screenshot" },
    { src: hiw, alt: "StockX How it Works screenshot" },
    { src: blog, alt: "StockX Blog screenshot" },
    {
      src: news,
      alt: "StockX Newsroom translated into Korean screenshot",
    },
  ]

  return (
    <>
      <PortfolioPageTemplate
        title="StockX"
        heroImage={stockx}
        pills={pills}
        screenshots={screenshots}
      >
        <div className="m-4 text-lg">
          <h3 className="mb-2 font-bold">Features</h3>
          <ul className="ml-4 list-disc">
            <li>
              Managed hosting infrastructure on Render (moved from WPEngine)
            </li>
            <li>
              Built modular page layouts, dynamic product data display, and
              improved user experience using Advanced Custom Fields and RESTful
              APIs
            </li>
            <li>
              Implemented custom translation system including automatic text
              submission and retrieval from translation software API using
              custom Wordpress plugin
            </li>
            <li>Improved site stability and uptime</li>
            <li>
              Worked with client marketing team to set up Segment analytics
            </li>
          </ul>
        </div>
      </PortfolioPageTemplate>
    </>
  )
}

export default StockX
