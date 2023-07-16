import PortfolioPageTemplate, {
  ScreenshotType,
} from "@/components/PortfolioPageTemplate"
import { NextPage } from "next/types"
import lippincott from "@/public/lippincott/hero.jpg"
import podcastDesktop from "@/public/lippincott/Lippincott_screenshot_desktop.png"
import podcastMobile from "@/public/lippincott/Lippincott_screenshot_mobile.png"

const Lippincott: NextPage = () => {
  const pills = [
    "PHP",
    "Wordpress",
    "Advanced Custom Fields",
    "MySQL",
    "Ansible",
  ]
  const screenshots: ScreenshotType[] = [
    { src: podcastDesktop, alt: "StockX About Buying screenshot" },
    { src: podcastMobile, alt: "StockX How it Works screenshot" },
  ]

  return (
    <>
      <PortfolioPageTemplate
        title="Lippincott"
        heroImage={lippincott}
        pills={pills}
        screenshots={screenshots}
      ></PortfolioPageTemplate>
    </>
  )
}

export default Lippincott
