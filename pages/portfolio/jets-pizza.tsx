import PortfolioPageTemplate, {
  ScreenshotType,
} from "@/components/PortfolioPageTemplate"
import { NextPage } from "next/types"
import jets from "@/public/jets/hero.jpg"
import comingSoon from "@/public/jets/Jets_coming_soon.png"
import mapDesktop from "@/public/jets/Jets_map_desktop.png"
import mapListDesktop from "@/public/jets/Jets_map_list_desktop.png"
import mapListMobile from "@/public/jets/Jets_map_list_mobile.png"
import mapMobile from "@/public/jets/Jets_map_mobile.png"

const JetsPizza: NextPage = () => {
  const pills = [
    "PHP",
    "Wordpress",
    "React",
    "Advanced Custom Fields",
    "Custom Wordpress Plugins",
    "MySQL",
    "Mapbox",
    "Push Notifications",
    "WPEngine",
  ]

  const screenshots: ScreenshotType[] = [
    { src: mapDesktop, alt: "Jet's Pizza Location Map screenshot" },
    { src: mapListDesktop, alt: "Jet's Pizza Locations List screenshot" },
    {
      src: mapListMobile,
      alt: "Jet's Pizza Locations List Mobile screenshot",
    },
    {
      src: mapMobile,
      alt: "Jet's Pizza Location Map Mobile screenshot",
    },
    { src: comingSoon, alt: "Jet's Pizza coming soon screenshot" },
  ]

  return (
    <>
      <PortfolioPageTemplate
        title="Jet's Pizza"
        heroImage={jets}
        pills={pills}
        screenshots={screenshots}
      ></PortfolioPageTemplate>
    </>
  )
}

export default JetsPizza
