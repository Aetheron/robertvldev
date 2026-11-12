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
    ></PortfolioPageTemplate>
  )
}
