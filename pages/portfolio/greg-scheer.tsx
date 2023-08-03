import PortfolioPageTemplate, {
  ScreenshotType,
} from "@/components/PortfolioPageTemplate"
import {
  faBugSlash,
  faCloudBolt,
  faWallet,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NextPage } from "next"
import greg from "@/public/greg-scheer/greg.jpg"
import { CardType } from "@/components/FlipCard"

const GregScheer: NextPage = () => {
  const pills = ["WordPress", "Security"]

  return (
    <>
      <PortfolioPageTemplate
        title="Greg Scheer"
        heroImage={greg}
        pills={pills}
      ></PortfolioPageTemplate>
    </>
  )
}

export default GregScheer
