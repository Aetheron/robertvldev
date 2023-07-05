import PortfolioPageTemplate from "@/components/PortfolioPageTemplate"
import {
  faHome,
  faPenRuler,
  faWallet,
  faWrench,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NextPage } from "next"
import { BreadCrumb } from "primereact/breadcrumb"
import spax from "@/public/spax/hero.jpg"

const Spax: NextPage = () => {
  const pills = [
    "React",
    "NextJS",
    "Radix",
    "Tailwind",
    "CraftCMS",
    "BigCommerce",
    "GraphQL",
    "C#",
    "Vercel",
    "Digital Ocean",
  ]

  return (
    <>
      <PortfolioPageTemplate title="Spax" heroImage={spax} pills={pills}>
        {/* <template #cards>
      <ClientDetailsCard title="Active Development">
        <template #icon
          ><FontAwesomeIcon
            icon={faWrench}
            style="width: 100px; height: 100px; padding-top: 10px"
        /></template>
        This site is in active development. Due to this, no screenshots or
        mockups can be shown.
      </ClientDetailsCard>
      <ClientDetailsCard title="New Site">
        <template #icon
          ><FontAwesomeIcon
            icon={faPenRuler}
            style="width: 100px; height: 100px; padding-top: 10px"
        /></template>
        Decided on the tech stack with the client and built from the ground up.
      </ClientDetailsCard>
      <ClientDetailsCard title="eCommerce">
        <template #icon
          ><FontAwesomeIcon
            icon={faWallet}
            style="width: 100px; height: 100px; padding-top: 10px"
        /></template>
        Product detail pages with information on where to buy
      </ClientDetailsCard>
    </template> */}
      </PortfolioPageTemplate>
    </>
  )
}

export default Spax
