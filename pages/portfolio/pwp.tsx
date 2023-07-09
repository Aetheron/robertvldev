import PortfolioPageTemplate from "@/components/PortfolioPageTemplate"
import { NextPage } from "next"
import pwp from "@/public/pwp/hero.png"
import oldHomepage from "@/public/pwp/old_homepage.png"
import newHomepage from "@/public/pwp/new_homepage.png"
import topicalStudies from "@/public/pwp/topical_studies.png"
import topicalStudy from "@/public/pwp/topical_study.png"

const pills = ["PHP", "Drupal", "Laravel", "Less", "MySQL"]

const screenshots = [
  {
    src: newHomepage,
    alt: "Screenshot of new Preaching and Worship homepage",
  },
  {
    src: topicalStudies,
    alt: "Screenshot of topical studies page",
  },
  {
    src: topicalStudy,
    alt: "Screenshot of topical study page about Grace",
  },
  {
    src: oldHomepage,
    alt: "Screenshot of old Preaching and Worship homepage",
  },
]

const PWP: NextPage = () => {
  return (
    <PortfolioPageTemplate
      title="Preaching and Worship"
      pills={pills}
      heroImage={pwp}
      screenshots={screenshots}
    ></PortfolioPageTemplate>
  )
}

export default PWP
