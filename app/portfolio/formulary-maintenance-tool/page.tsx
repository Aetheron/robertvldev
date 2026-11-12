import { CardType } from "@/components/FlipCard"
import PortfolioPageTemplate, {
  ScreenshotType,
} from "@/components/PortfolioPageTemplate"
import fmtcompareimport from "@/public/fmt/fmt-compare-import.png"
import fmtcompareindividualfield from "@/public/fmt/fmt-compare-individual-field.png"
import fmtcompare from "@/public/fmt/fmt-compare.png"
import fmtdashboard from "@/public/fmt/fmt-dashboard.png"
import fmtnewdrug from "@/public/fmt/fmt-new-drug.png"
import hero from "@/public/fmt/hero.svg"
import { CloudIcon, UserGroupIcon } from "@heroicons/react/24/outline"

export default function FormularyMaintenanceTool() {
  const pills = [
    "NextJS",
    "Typescript",
    "Supabase",
    "Postgres",
    "Tailwind",
    "Cypress",
    "Deno",
    "Zustand",
  ]
  const cards: CardType[] = [
    {
      title: "SaaS",
      front: <CloudIcon className="h-12 w-full" />,
      back: <p>Subscription based highly-available web app</p>,
    },
    {
      title: "User accounts and organizations",
      front: <UserGroupIcon className="h-12 w-full" />,
      back: (
        <p>
          Users are members of one or more organizations with organization
          dashboard switching, invitations, and user management
        </p>
      ),
    },
  ]
  const screenshots: ScreenshotType[] = [
    {
      src: fmtdashboard,
      alt: "",
    },
    {
      src: fmtnewdrug,
      alt: "",
    },
    {
      src: fmtcompareimport,
      alt: "",
    },
    {
      src: fmtcompare,
      alt: "",
    },
    {
      src: fmtcompareindividualfield,
      alt: "",
    },
  ]

  return (
    <PortfolioPageTemplate
      title="Formulary Maintenance Tool"
      heroImage={hero}
      pills={pills}
      cards={cards}
      screenshots={screenshots}
    >
      <div className="mt-16 border-b border-gray-200 pb-5 dark:border-white/10">
        <h3 className="text-center text-4xl font-semibold text-gray-900 dark:text-white">
          Project Overview
        </h3>
      </div>
      <div className="flex flex-col gap-2">
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm dark:divide-white/10 dark:bg-gray-800/50 dark:shadow-none dark:outline-1 dark:-outline-offset-1 dark:outline-white/10 dark:outline-solid">
          <div className="border-b border-gray-200 px-4 py-5 sm:px-6 dark:border-white/10">
            <h4 className="pb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Background
            </h4>
            {/* <Stats className="py-8 sm:py-4" stats={providerDirectoriesStats} /> */}
          </div>
          <div className="px-4 py-5 sm:p-6">
            <p className="pb-2">
              University of Michigan Health Plan, as one if its many operations,
              maintains several formularies of drugs that are covered by the
              plan. The formulary is a list of drugs that are approved for use
              and are covered by a plan tier offered by the health plan.
            </p>
            <p className="pb-2">
              U of M Health Plan has a pharmacy team that maintains these
              formulary lists and ensures that they match what third party
              perscription benefit managers (PBMs) have in their systems. If
              there is a discrepancy between the internal formulary and the PBM,
              the difference must be reconciled or else members may be denied
              coverage for a drug that is covered by the plan or may be offereed
              a drug that is not covered.
            </p>
            <p className="pb-2">
              The pharmacy team was using an internal web tool to maintain
              formularies and perform comparisons with PBM data, but the tool
              was never fully completed and team members frequently encountered
              bugs and errors.
            </p>
            <p className="pb-2">
              When discussing fixes and upgrades to the internal tool, there was
              interest in rebuilding it as a SaaS application that could be used
              by other health plans and provide an additional revenue stream to
              the Health Plan. The new tool would be built with modern
              technologies and would be more robust and reliable than the
              internal tool.
            </p>
          </div>
          <div className="border-b border-gray-200 px-4 py-5 sm:px-6 dark:border-white/10">
            <h4 className="pb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Requirements
            </h4>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <ul className="list-disc pl-4">
              <li>Overview of all formularies and their current status</li>
              <li>Ability to manually add new drugs to a formulary</li>
              <li>Ability to edit existing drugs in a formulary</li>
              <li>
                Ability to view all drugs in a formulary and their details
              </li>
              <li>
                A file upload feature to import a spreadsheet of drugs exported
                from a PBM
              </li>
              <li>
                Perform a comparison between the internal formulary and the PBM
                export data, highlight any differences, and resolve them in the
                UI
              </li>
              <li>Export formulary changes over a date range for reporting</li>
              <li>Search functionality to find drugs by name, or NDC</li>
            </ul>
          </div>
          <div className="border-b border-gray-200 px-4 py-5 sm:px-6 dark:border-white/10">
            <h4 className="pb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Solution
            </h4>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <p className="pb-2">
              The new Formulary Maintenance Tool was built with NextJS and
              Supabase.
            </p>
            <p className="pb-2">
              NextJS offers some helpful routing functionality like dynamic
              segments that make generating pages for each formulary and drug
              easier. NextJS server functions also allow for server-side logic
              to be written, offloading API calls and other asynchronous
              processing from the browser and keeping secrets hidden from the
              client. This improves security and performance of the application.
            </p>
            <p className="pb-2">
              Supabase is a backend-as-a-service that provides a Postgres
              database, authentication, and storage. It also provides edge
              functions that can be used to run data-intensive and long-running
              processes outside of the client. This allows for the comparison of
              large files to be done without blocking the UI or causing
              timeouts.
            </p>
          </div>
        </div>
      </div>
    </PortfolioPageTemplate>
  )
}
