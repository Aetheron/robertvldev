import PortfolioPageTemplate from "@/components/PortfolioPageTemplate"
import { NextPage } from "next/types"
import csw from "@/public/csw/hero.jpg"
import homepage from "@/public/csw/homepage.png"
import profileBuilder from "@/public/csw/profile_builder.png"
import performanceImprovements from "@/public/csw/performance_improvements.png"
import assessmentTools from "@/public/csw/assessment_tools.png"
import competencyComparison from "@/public/csw/competency_comparison.png"
import selfAssessment from "@/public/csw/self_assessment.png"

const CSW: NextPage = () => {
  const pills = ["Vue", "MongoDB", "Render"]

  const screenshots = [
    { src: homepage, alt: "CSW Homepage screenshot" },
    { src: profileBuilder, alt: "CSW Profile Builder screenshot" },
    {
      src: performanceImprovements,
      alt: "CSW Performance Improvements screenshot",
    },
    {
      src: assessmentTools,
      alt: "CSW Assessment Tools screenshot",
    },
    {
      src: competencyComparison,
      alt: "CSW Competency Comparison screenshot",
    },
    {
      src: selfAssessment,
      alt: "CSW Self Assessment screenshot",
    },
  ]

  return (
    <>
      <PortfolioPageTemplate
        title="Corporation for a Skilled Workforce (CSW)"
        heroImage={csw}
        pills={pills}
        screenshots={screenshots}
      ></PortfolioPageTemplate>
    </>
  )
}

export default CSW
