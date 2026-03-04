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
          cardTitle="Automated Deployments"
        >
          <Link href="/portfolio/automated-deployments">
            <Button className="bg-orange bg-opacity-10 cursor-pointer hover:bg-orange hover:text-white hover:opacity-100 dark:bg-orange dark:hover:bg-orange-400">
              Read more
            </Button>
          </Link>
        </Card>
        <Card
          className="w-full bg-gray-800 shadow-md lg:min-w-[250px] lg:w-auto hover:shadow-xl hover:transition-all"
          cardTitle="U of M Health Plan"
        >
          <Link href="/portfolio/uofmhealthplan">
            <Button className="bg-orange bg-opacity-10 cursor-pointer hover:bg-orange hover:text-white hover:opacity-100 dark:bg-orange dark:hover:bg-orange-400">
              Read more
            </Button>
          </Link>
        </Card>
        <Card
          className="w-full bg-gray-800 shadow-md lg:min-w-[250px] lg:w-auto hover:shadow-xl hover:transition-all"
          cardTitle="SPAX"
        >
          <Link href="/portfolio/spax">
            <Button className="bg-orange bg-opacity-10 cursor-pointer hover:bg-orange hover:text-white hover:opacity-100 dark:bg-orange dark:hover:bg-orange-400">
              Read more
            </Button>
          </Link>
        </Card>
        <Card
          className="w-full bg-gray-800 shadow-md lg:min-w-[250px] lg:w-auto hover:shadow-xl hover:transition-all"
          cardTitle="StockX"
        >
          <Link href="/portfolio/stockx">
            <Button className="bg-orange bg-opacity-10 cursor-pointer hover:bg-orange hover:text-white hover:opacity-100 dark:bg-orange dark:hover:bg-orange-400">
              Read more
            </Button>
          </Link>
        </Card>
        <Card
          className="w-full bg-gray-800 lg:min-w-[250px] lg:w-auto shadow-md hover:shadow-xl hover:transition-all"
          cardTitle="Jet's Pizza"
        >
          <Link href="/portfolio/jets-pizza">
            <Button className="bg-orange bg-opacity-10 cursor-pointer hover:bg-orange hover:text-white hover:opacity-100 dark:bg-orange dark:hover:bg-orange-400">
              Read more
            </Button>
          </Link>
        </Card>
        <Card
          className="w-full bg-gray-800 lg:min-w-[250px] lg:w-auto shadow-md hover:shadow-xl hover:transition-all"
          cardTitle="Lippincott"
        >
          <Link href="/portfolio/lippincott">
            <Button className="bg-orange bg-opacity-10 cursor-pointer hover:bg-orange hover:text-white hover:opacity-100 dark:bg-orange dark:hover:bg-orange-400">
              Read more
            </Button>
          </Link>
        </Card>
        <Card
          className="w-full bg-gray-800 lg:min-w-[250px] lg:w-auto shadow-md hover:shadow-xl hover:transition-all"
          cardTitle="CSW"
        >
          <Link href="/portfolio/csw">
            <Button className="bg-orange bg-opacity-10 cursor-pointer hover:bg-orange hover:text-white hover:opacity-100 dark:bg-orange dark:hover:bg-orange-400">
              Read more
            </Button>
          </Link>
        </Card>
        <Card
          className="w-full bg-gray-800 lg:min-w-[250px] lg:w-auto shadow-md hover:shadow-xl hover:transition-all"
          cardTitle="Preaching and Worship"
        >
          <Link href="/portfolio/pwp">
            <Button className="bg-orange bg-opacity-10 cursor-pointer hover:bg-orange hover:text-white hover:opacity-100 dark:bg-orange dark:hover:bg-orange-400">
              Read more
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  )
}
