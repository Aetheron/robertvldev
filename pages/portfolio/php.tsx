import { CardType } from "@/components/FlipCard"
import PortfolioPageTemplate from "@/components/PortfolioPageTemplate"
import csw from "@/public/sparrow/hero.png"
import {
  faCubes,
  faFilePrescription,
  faFlask,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NextPage } from "next/types"

const PHP: NextPage = () => {
  const pills = ["C#", "MSSQL", "T-SQL", "xUnit", "Oracle Database", "PL/SQL"]

  const cards: CardType[] = [
    {
      title: "Health Insurance",
      front: (
        <FontAwesomeIcon
          className="w-full h-12"
          icon={faFilePrescription}
        ></FontAwesomeIcon>
      ),
      back: <p>HIPPA regulation compliance</p>,
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

  return (
    <>
      <PortfolioPageTemplate
        title="Physicians Health Plan (PHP)"
        heroImage={csw}
        pills={pills}
        cards={cards}
      ></PortfolioPageTemplate>
    </>
  )
}

export default PHP
