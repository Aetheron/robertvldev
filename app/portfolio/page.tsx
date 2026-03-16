import PortfolioListItem, {
  PortfolioImageCardType,
} from "@/components/PortfolioImageCard"
import csw from "@/public/csw/hero.svg"
import render from "@/public/events-list-deploys.png"
import jets from "@/public/jets/hero.svg"
import lippincott from "@/public/lippincott/hero.jpg"
import pwp from "@/public/pwp/new_homepage.png"
import spax from "@/public/spax/hero.svg"
import stockx from "@/public/stockx/hero.svg"
import umhp from "@/public/umhp/hero.svg"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "Portfolio - robertvl.dev",
}

export default function Portfolio() {
  const links: PortfolioImageCardType[] = [
    // {
    //   title: "Formulary Maintenance Tool",
    //   type: "Project",
    //   link: "/portfolio/formulary-maintenance-tool",
    //   image: fmt,
    // },
    {
      title: "University of Michigan Health Plan",
      type: "Client",
      link: "/portfolio/uofmhealthplan",
      image: umhp,
    },
    {
      title: "Automated Deployments",
      type: "Project",
      link: "/portfolio/automated-deployments",
      image: render,
      position: "left",
    },
    {
      title: "SPAX",
      type: "Client",
      link: "/portfolio/spax",
      image: spax,
    },
    {
      title: "StockX",
      type: "Client",
      link: "/portfolio/stockx",
      image: stockx,
    },
    {
      title: "Jet's Pizza",
      type: "Client",
      link: "/portfolio/jets-pizza",
      image: jets,
    },
    {
      title: "Lippincott",
      type: "Client",
      link: "/portfolio/lippincott",
      image: lippincott,
    },
    {
      title: "CSW",
      type: "Client",
      link: "/portfolio/csw",
      image: csw,
    },
    {
      title: "Preaching and Worship",
      type: "Project",
      link: "/portfolio/pwp",
      image: pwp,
    },
  ]

  return (
    <div>
      <h1>Portfolio</h1>
      <div className="flex flex-wrap gap-3 mt-4">
        {links &&
          links.map((link) => (
            <PortfolioListItem key={link.title} item={link} />
          ))}
      </div>
    </div>
  )
}
