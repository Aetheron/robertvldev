import { CardType } from "@/components/FlipCard"
import PortfolioPageTemplate from "@/components/PortfolioPageTemplate"
import Stats, { StatsData } from "@/components/Stats"
import umhp from "@/public/umhp/hero.svg"
import {
  faCubes,
  faFilePrescription,
  faFlask,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NextPage } from "next/types"

const PHP: NextPage = () => {
  const pills = [
    "C#",
    "ASP.NET MVC",
    "MSSQL",
    "T-SQL",
    "EPP / OfficeOpenXml",
    "xUnit",
    "Oracle Database",
    "PL/SQL",
  ]

  const cards: CardType[] = [
    {
      title: "Health Insurance",
      front: (
        <FontAwesomeIcon
          className="w-full h-12"
          icon={faFilePrescription}
        ></FontAwesomeIcon>
      ),
      back: (
        <p>
          HIPAA regulation compliance, HITECH Act compliance, CSF certification
          offered by HITRUST
        </p>
      ),
    },
    {
      title: "Microsoft Graph API",
      front: (
        <FontAwesomeIcon
          className="w-full h-12"
          icon={faCubes}
        ></FontAwesomeIcon>
      ),
      back: <p>Interact with cloud resources using Microsoft Graph API</p>,
    },
    {
      title: "Automated Testing",
      front: (
        <FontAwesomeIcon
          className="w-full h-12"
          icon={faFlask}
        ></FontAwesomeIcon>
      ),
      back: (
        <p>
          Run data integrity tests, unit tests, and integration tests
          automatically
        </p>
      ),
    },
  ]

  const providerDirectoriesStats: StatsData[] = [
    { name: "saved", value: "$18,000", unit: "/year" },
    { name: "paper saved", value: "~300,000", unit: "pages/year" },
    { name: "directories generated", value: "84", unit: "/year" },
  ]

  const pipStats: StatsData[] = [
    { name: "reports generated", value: "~400", unit: "/month" },
    // { name: "developer hours saved", value: "", unit: "/report" },
  ]

  const pdaStats: StatsData[] = [
    { name: "time saved", value: "", unit: "hours/" },
  ]

  return (
    <PortfolioPageTemplate
      title="University of Michigan Health Plan"
      heroImage={umhp}
      pills={pills}
      cards={cards}
    >
      <div className="border-b border-gray-200 pb-5 dark:border-white/10">
        <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">
          Projects
        </h3>
      </div>
      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
        Provider Directories
      </h4>
      <Stats stats={providerDirectoriesStats} />
      {/* <h5 className="text-base font-semibold text-gray-900 dark:text-white">
        Problem: 
      </h5> */}
      <ul className="list-disc pl-4">
        <li>
          Query details about providers that are a part of the U of M Health
          Plan
        </li>
        <li>Build a Table of Contents with page numbers</li>
        <li>
          Create document sections with different orderings of provider data
        </li>
      </ul>

      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
        Provider Incentive Plan
      </h4>
      <Stats stats={pipStats} />
      <h5 className="text-base font-semibold text-gray-900 dark:text-white">
        Problem: The software to build the reports is outdated and no longer
        runs.
      </h5>
      <ul className="list-disc pl-4">
        <li>
          Generate PDFs for distribution to providers detailing their member
          visits
        </li>
        <li>Calculate incentive dollar payouts</li>
        <li>Create pie charts of key visit metrics</li>
        <li>
          Use a templating engine to reduce code redundency and increase
          maintainability
        </li>
      </ul>
      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
        Provider Data Automation
      </h4>
      <ul className="list-disc pl-4">
        <li>Query source-of-truth database for provider data</li>
        <li>Send SOAP API requests to Facets endpoint</li>
      </ul>
      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
        HEDIS
      </h4>
      <ul className="list-disc pl-4">
        <li>Add automated data integrity testing and file format testing</li>
      </ul>
    </PortfolioPageTemplate>
  )
}

export default PHP
