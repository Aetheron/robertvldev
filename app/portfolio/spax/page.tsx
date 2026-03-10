import PortfolioPageTemplate, {
  ScreenshotType,
} from "@/components/PortfolioPageTemplate"
import spax from "@/public/spax/hero.svg"
import about from "@/public/spax/spax_about.png"
import {
  faBugSlash,
  faCloudBolt,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import coatings from "@/public/spax/spax_coatings.png"
import { CardType } from "@/components/FlipCard"
import colorMatch from "@/public/spax/spax_color_match.png"
import whereToBuy from "@/public/spax/spax_where_to_buy.png"
import { WalletIcon } from "@heroicons/react/20/solid"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "SPAX - robertvl.dev",
}

export default function Spax() {
  const pills = [
    "React",
    "NextJS",
    "Radix",
    "Tailwind",
    "CraftCMS",
    "BigCommerce",
    "Meilisearch",
    "GraphQL",
    "C#",
    "Vercel",
    "Digital Ocean",
  ]

  const cards: CardType[] = [
    {
      title: "eCommerce",
      front: <WalletIcon className="w-full h-12" />,
      back: <p>Product detail pages with information on where to buy</p>,
    },
    {
      title: "Jamstack",
      front: (
        <FontAwesomeIcon
          className="w-full h-12"
          icon={faCloudBolt}
        ></FontAwesomeIcon>
      ),
      back: <p>Headless CMS, Static Site Generation, Server Side Rendering</p>,
    },
    {
      title: "Error Aggregation",
      front: (
        <FontAwesomeIcon
          className="w-full h-12"
          icon={faBugSlash}
        ></FontAwesomeIcon>
      ),
      back: <p>Advanced debugging with Sentry</p>,
    },
    {
      title: "Component Testing",
      front: (
        <FontAwesomeIcon
          className="w-full h-12"
          icon={faListCheck}
        ></FontAwesomeIcon>
      ),
      back: (
        <p>Enforcing UI standardization with component testing using Jest</p>
      ),
    },
  ]

  const screenshots: ScreenshotType[] = [
    { src: about, alt: "Spax About page screenshot" },
    // { src: coatings, alt: "Spax fastener coatings page screenshot" },
    { src: colorMatch, alt: "Spax fastener color match tool screenshot" },
    {
      src: whereToBuy,
      alt: "Spax Where To Buy map and locator page screenshot",
    },
  ]

  return (
    <>
      <PortfolioPageTemplate
        title="SPAX"
        heroImage={spax}
        pills={pills}
        cards={cards}
        screenshots={screenshots}
      ></PortfolioPageTemplate>
    </>
  )
}
