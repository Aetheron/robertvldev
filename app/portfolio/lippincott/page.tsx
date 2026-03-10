import PortfolioPageTemplate, {
  ScreenshotType,
} from "@/components/PortfolioPageTemplate"
import podcastDesktop from "@/public/lippincott/Lippincott_screenshot_desktop.png"
import podcastMobile from "@/public/lippincott/Lippincott_screenshot_mobile.png"
import lippincott from "@/public/lippincott/hero.jpg"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "Lippincott - robertvl.dev",
}

export default function Lippincott() {
  const pills = [
    "PHP",
    "Wordpress",
    "Advanced Custom Fields",
    "MySQL",
    "Ansible",
  ]
  const screenshots: ScreenshotType[] = [
    {
      src: podcastDesktop,
      alt: "Lippincott podcast page screenshot on a desktop device",
    },
    {
      src: podcastMobile,
      alt: "Lippincott podcast page screenshot on a mobile device",
    },
  ]

  return (
    <>
      <PortfolioPageTemplate
        title="Lippincott"
        heroImage={lippincott}
        pills={pills}
        screenshots={screenshots}
      >
        <div className="m-4 text-lg">
          <h3 className="mb-2 font-bold">Features</h3>
          <ul className="ml-4 list-disc">
            <li>Deployment with Ansible</li>
            <li>Animated search result images</li>
            <li>Custom mp3 player for podcast episodes</li>
            <li>
              Dynamic content size and arrangement adjustments based on screen
              size
            </li>
          </ul>
        </div>
      </PortfolioPageTemplate>
    </>
  )
}
