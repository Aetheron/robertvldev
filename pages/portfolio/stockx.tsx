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
import { CardType } from "@/components/FlipCard"
import { faDollyBox, faLanguage } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { icon } from "@fortawesome/fontawesome-svg-core"

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

  const cards: CardType[] = [
    {
      title: "Translation",
      front: (
        <FontAwesomeIcon
          className="w-12 h-12"
          icon={faLanguage}
        ></FontAwesomeIcon>
      ),
      back: (
        <p>
          Custom translation solution using Wordpress i18n, Smartling, and
          custom Wordpress plugin
        </p>
      ),
    },
    {
      title: "Replatform",
      front: (
        <FontAwesomeIcon
          className="w-12 h-12"
          icon={faDollyBox}
        ></FontAwesomeIcon>
      ),
      back: (
        <p>
          Moved the sites from WPEngine to Render, increasing stability and
          reliability.
        </p>
      ),
    },
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
        cards={cards}
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
              Implemented custom translation system
              <ul className="ml-4 list-disc">
                <li>
                  Automatic text submission and retrieval from translation
                  software API using custom Wordpress plugin
                </li>
                <li>Smartling human translation workflow</li>
                <li>Intrgrated into Wordpress i18n translation library</li>
              </ul>
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
