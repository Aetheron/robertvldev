import Button from "@/components/Button"
import Card from "@/components/Card"
import Link from "next/link"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "Portfolio - robertvl.dev",
}

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="flex flex-wrap gap-3 mt-4">
        <Card
          className="w-full bg-gray-800 shadow-md lg:min-w-[250px] lg:w-auto hover:shadow-xl hover:transition-all"
          title="Automated Deployments"
        >
          <Link href="/portfolio/automated-deployments">
            <Button
              className="bg-orange bg-opacity-10 hover:bg-orange hover:text-white hover:opacity-100 dark:bg-orange dark:hover:bg-orange"
              secondary
            >
              Read more
            </Button>
          </Link>
        </Card>
        <Card
          className="w-full bg-gray-800 shadow-md lg:min-w-[250px] lg:w-auto hover:shadow-xl hover:transition-all"
          title="Physicians Health Plan"
        >
          <Link href="/portfolio/uofmhealthplan">
            <Button
              className="bg-orange bg-opacity-10 hover:bg-orange hover:text-white hover:opacity-100 dark:bg-orange dark:hover:bg-orange"
              primary
            >
              Read more
            </Button>
          </Link>
        </Card>
        <Card
          className="w-full bg-gray-800 shadow-md lg:min-w-[250px] lg:w-auto hover:shadow-xl hover:transition-all"
          title="SPAX"
        >
          <Link href="/portfolio/spax">
            <Button
              className="bg-orange bg-opacity-10 hover:bg-orange hover:text-white hover:opacity-100 dark:bg-orange dark:hover:bg-orange"
              outlined
            >
              Read more
            </Button>
          </Link>
        </Card>
        <Card
          className="w-full bg-gray-800 shadow-md lg:min-w-[250px] lg:w-auto hover:shadow-xl hover:transition-all"
          title="StockX"
        >
          <Link href="/portfolio/stockx">
            <Button
              className="bg-orange bg-opacity-10 hover:bg-orange hover:text-white hover:opacity-100 dark:bg-orange dark:hover:bg-orange"
              outlined
            >
              Read more
            </Button>
          </Link>
        </Card>
        <Card
          className="w-full bg-gray-800 lg:min-w-[250px] lg:w-auto shadow-md hover:shadow-xl hover:transition-all"
          title="Jet's Pizza"
        >
          <Link href="/portfolio/jets-pizza">
            <Button
              className="bg-orange bg-opacity-10 hover:bg-orange hover:text-white hover:opacity-100 dark:bg-orange dark:hover:bg-orange"
              outlined
            >
              Read more
            </Button>
          </Link>
        </Card>
        <Card
          className="w-full bg-gray-800 lg:min-w-[250px] lg:w-auto shadow-md hover:shadow-xl hover:transition-all"
          title="Lippincott"
        >
          <Link href="/portfolio/lippincott">
            <Button
              className="bg-orange bg-opacity-10 hover:bg-orange hover:text-white hover:opacity-100 dark:bg-orange dark:hover:bg-orange"
              outlined
            >
              Read more
            </Button>
          </Link>
        </Card>
        <Card
          className="w-full bg-gray-800 lg:min-w-[250px] lg:w-auto shadow-md hover:shadow-xl hover:transition-all"
          title="CSW"
        >
          <Link href="/portfolio/csw">
            <Button
              className="bg-orange bg-opacity-10 hover:bg-orange hover:text-white hover:opacity-100 dark:bg-orange dark:hover:bg-orange"
              outlined
            >
              Read more
            </Button>
          </Link>
        </Card>
        <Card
          className="w-full bg-gray-800 lg:min-w-[250px] lg:w-auto shadow-md hover:shadow-xl hover:transition-all"
          title="Preaching and Worship"
        >
          <Link href="/portfolio/pwp">
            <Button
              className="bg-orange bg-opacity-10 hover:bg-orange hover:text-white hover:opacity-100 dark:bg-orange dark:hover:bg-orange"
              outlined
            >
              Read more
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  )
}
