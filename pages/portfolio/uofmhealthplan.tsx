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
      <div className="mt-16 border-b border-gray-200 pb-5 dark:border-white/10">
        <h3 className="text-center text-4xl font-semibold text-gray-900 dark:text-white">
          Projects
        </h3>
      </div>
      <div className="flex flex-col gap-2">
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow dark:divide-white/10 dark:bg-gray-800/50 dark:shadow-none dark:outline dark:outline-1 dark:-outline-offset-1 dark:outline-white/10">
          <div className="border-b border-gray-200 px-4 py-5 sm:px-6 dark:border-white/10">
            <h4 className="pb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Provider Directories
            </h4>
            <Stats stats={providerDirectoriesStats} />
          </div>
          <div className="px-4 py-5 sm:p-6">
            <h5 className="font-bold text-lg">Overview</h5>
            <p className="pb-2">
              As a point of compliance, health insurance companies are required
              to provide a directory of providers to members. U of M Health Plan
              had been sending a file of provider data to a third party and
              paying them to create provider directory PDFs from the data. If a
              member wanted a directory, they would submit a request in the
              member portal website and a print request would be sent to the
              same third party vendor, who would print and mail a hard copy to
              the member.
            </p>
            <h5 className="font-bold text-lg">Requirements</h5>
            <ul className="list-disc pl-4">
              <li>Output must be a file that can be downloaded by a member</li>
              <li>Themable branding based on line of business</li>
              <li>Pagination and Table of Contents</li>
              <li>
                Providers must be listed in multiple sections grouped by
                characteristics like location and languages spoken
              </li>
              <li>
                The process must be automated with as little human interaction
                as possible
              </li>
            </ul>
            <h5 className="font-bold text-lg">Solution</h5>
            <ul className="list-disc pl-4">
              <li>
                Query details about providers that are a part of the U of M
                Health Plan
              </li>
              <li>
                Group and order the query results in the business logic using
                custom data class objects
              </li>
              <li>
                Utilize Microsoft Word for document format because it has page
                number and Table of Contents object fields built in
              </li>
              <li>
                Build a document template with common content among directories,
                and then use EPP library to manipulate colors and inject
                content.
              </li>
            </ul>
          </div>
        </div>

        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow dark:divide-white/10 dark:bg-gray-800/50 dark:shadow-none dark:outline dark:outline-1 dark:-outline-offset-1 dark:outline-white/10">
          <div className="border-b border-gray-200 px-4 py-5 sm:px-6 dark:border-white/10">
            <h4 className="pb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Provider Incentive Program
            </h4>
            <Stats stats={pipStats} />
          </div>

          <div className="px-4 py-5 sm:p-6">
            <h5 className="font-bold text-lg">Overview</h5>
            <p className="pb-2">
              The Provider Incentive Program (or PIP) is a bonus payment made to
              providers based on overall provider performance. Providers receive
              a report every month detailing their measure calculations and
              their patient rosters, and then a report at the end of the program
              year with their payment dollars. These documents were being
              generated by Crystal Reports. The interface for adding to or
              updating reports was not user friendly, making any change to a
              report time consuming. Crystal Reports also dropped support for
              their Visual Studio integration years ago, making the program
              extremely unstable. As a result, it became impossible to make any
              changes to the reports.
            </p>
            <h5 className="font-bold text-lg">Requirements</h5>
            <ul className="list-disc pl-4">
              <li>Remove dependency on Crystal Reports</li>
              <li>
                Keep the original layout of the reports while increasing the
                ease of modifying reports in the future
              </li>
              <li>
                Generate PDFs for distribution to providers detailing their
                member visits
              </li>
              <li>Calculate incentive dollar payouts</li>
              <li>Create pie charts of key visit metrics</li>
            </ul>
            <h5 className="font-bold text-lg">Solution</h5>
            <ul className="list-disc pl-4">
              <li>
                Use a templating engine (Scriban) to reduce code redundency and
                increase maintainability
              </li>
              <li>
                Create html templates for the structure of the report, with CSS
                styling and JavaScript for charts
              </li>
              <li>
                Run calculations and inject variable data into template and
                render the template in a headless Chrome window using Puppeteer
              </li>
              <li>
                Capture the rendered html as a PDF and upload the file to the
                Member Portal
              </li>
            </ul>
          </div>
        </div>

        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow dark:divide-white/10 dark:bg-gray-800/50 dark:shadow-none dark:outline dark:outline-1 dark:-outline-offset-1 dark:outline-white/10">
          <div className="border-b border-gray-200 px-4 py-5 sm:px-6 dark:border-white/10">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
              Provider Data Automation
            </h4>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <ul className="list-disc pl-4">
              <li>Query source-of-truth database for provider data</li>
              <li>Send SOAP API requests to Facets endpoint</li>
            </ul>
          </div>
        </div>

        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow dark:divide-white/10 dark:bg-gray-800/50 dark:shadow-none dark:outline dark:outline-1 dark:-outline-offset-1 dark:outline-white/10">
          <div className="border-b border-gray-200 px-4 py-5 sm:px-6 dark:border-white/10">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
              HEDIS
            </h4>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <ul className="list-disc pl-4">
              <li>
                Add automated data integrity testing and file format testing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PortfolioPageTemplate>
  )
}

export default PHP
