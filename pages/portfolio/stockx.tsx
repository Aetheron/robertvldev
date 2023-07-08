import PortfolioPageTemplate from "@/components/PortfolioPageTemplate"
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

  const screenshots = [
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
      ></PortfolioPageTemplate>
    </>
  )
}

export default StockX
