import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "404 - robertvl.dev",
}

export default function Notfound() {
  return (
    <div className="text-center">
      <FontAwesomeIcon
        className="text-amber-400 w-52 h-52 mx-auto"
        icon={faTriangleExclamation}
      />
      <p>Whoops. That page doesn&apos;t exist.</p>
      <p>
        Click{" "}
        <Link className="text-orange-500" href="/">
          here
        </Link>{" "}
        to go back home.
      </p>
    </div>
  )
}
