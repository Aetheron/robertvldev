import Head from "next/head"
import Link from "next/link"
import { NextPage } from "next/types"
import { Button } from "primereact/button"
import { Card } from "primereact/card"

const Portfolio: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <div>
        <h1>Portfolio</h1>
        <div className="flex flex-wrap gap-3 mt-4">
          <Card
            className="w-full bg-gray-800 shadow-md lg:min-w-[250px] lg:w-auto hover:shadow-xl hover:transition-all"
            title="Automated Deployments"
          >
            <Link href="/portfolio/automated-deployments">
              <Button
                className="bg-orange bg-opacity-10 hover:bg-orange hover:text-white hover:opacity-100"
                outlined
              >
                Read more
              </Button>
            </Link>
          </Card>
          <Card
            className="w-full bg-gray-800 shadow-md lg:min-w-[250px] lg:w-auto hover:shadow-xl hover:transition-all"
            title="Spax"
          >
            <Link href="/portfolio/spax">
              <Button
                className="bg-orange bg-opacity-10 hover:bg-orange hover:text-white hover:opacity-100"
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
                className="bg-orange bg-opacity-10 hover:bg-orange hover:text-white hover:opacity-100"
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
                className="bg-orange bg-opacity-10 hover:bg-orange hover:text-white hover:opacity-100"
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
                className="bg-orange bg-opacity-10 hover:bg-orange hover:text-white hover:opacity-100"
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
                className="bg-orange bg-opacity-10 hover:bg-orange hover:text-white hover:opacity-100"
                outlined
              >
                Read more
              </Button>
            </Link>
          </Card>
          <Card
            className="w-full bg-gray-800 lg:min-w-[250px] lg:w-auto shadow-md hover:shadow-xl hover:transition-all"
            title="PWP"
          >
            <Link href="/portfolio/pwp">
              <Button
                className="bg-orange bg-opacity-10 hover:bg-orange hover:text-white hover:opacity-100"
                outlined
              >
                Read more
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Portfolio
