import PortfolioPageTemplate from "@/components/PortfolioPageTemplate"
import csw from "@/public/sparrow/hero.png"
import { NextPage } from "next/types"

const Sparrow: NextPage = () => {
  const pills = ["C#", "MSSQL", "T-SQL", "Oracle Database", "PL/SQL"]

  return (
    <>
      <PortfolioPageTemplate
        title="Physicians Health Plan (PHP)"
        heroImage={csw}
        pills={pills}
      ></PortfolioPageTemplate>
    </>
  )
}

export default Sparrow
