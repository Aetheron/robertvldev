import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function Custom404() {
  return (
    <div className="text-center">
      <FontAwesomeIcon
        className="text-red-600 w-52 h-52"
        icon={faCircleExclamation}
      />
      <p>A server error occurred.</p>
      <p>
        Try refreshing the page or click <Link href="/">here</Link> to go back
        home.
      </p>
    </div>
  )
}
