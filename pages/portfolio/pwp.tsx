import PortfolioPageTemplate, {
  ScreenshotType,
} from "@/components/PortfolioPageTemplate"
import { NextPage } from "next"
import pwp from "@/public/pwp/hero.png"
import oldHomepage from "@/public/pwp/old_homepage.png"
import newHomepage from "@/public/pwp/new_homepage.png"
import topicalStudies from "@/public/pwp/topical_studies.png"
import topicalStudy from "@/public/pwp/topical_study.png"

const pills = ["PHP", "Drupal", "Laravel", "Less", "MySQL"]

const screenshots: ScreenshotType[] = [
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
      title="Preaching and Worship (PWP)"
      pills={pills}
      heroImage={pwp}
      screenshots={screenshots}
    >
      <div className="m-4 text-lg">
        <h3 className="mb-2 font-bold">Features</h3>
        <ul className="ml-4 list-disc">
          <li>Search engine site built on Sphinx</li>
          <li>Drupal framework for site functionality and theming</li>
          <li>Database management and querying using Laravel ORM</li>
        </ul>
      </div>
    </PortfolioPageTemplate>
  )
}

export default PWP
