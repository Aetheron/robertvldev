import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function Custom404() {
  return (
    <div className="text-center">
      <FontAwesomeIcon
        className="text-amber-400 w-52 h-52"
        icon={faTriangleExclamation}
      />
      <p>Whoops. That page doesn&apos;t exist.</p>
      <p>
        Click <Link href="/">here</Link> to go back home.
      </p>
    </div>
  )
}
