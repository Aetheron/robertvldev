import { faHandPointer } from "@fortawesome/free-regular-svg-icons"
import {
  faBolt,
  faCloudArrowUp,
  faDatabase,
  faGlobe,
  faListCheck,
  faRocket,
  faRotate,
  faTag,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NextPage } from "next"
import { Fahkwang } from "next/font/google"
import { Chip } from "primereact/chip"
import { Timeline } from "primereact/timeline"

interface TimelineEvent {
  content: JSX.Element
  icon?: JSX.Element
  color?: string
}

const AutomatedDeployments: NextPage = () => {
  const events: TimelineEvent[] = [
    {
      content: (
        <div>
          <h3>Click the deploy button</h3>
          <p className="text-gray-300">in CraftCMS admin UI</p>
        </div>
      ),
      icon: <FontAwesomeIcon icon={faHandPointer} />,
    },
    {
      content: <h3>Trigger GitHub action using api request</h3>,
      icon: <FontAwesomeIcon icon={faBolt} />,
    },
    {
      content: <h3>Back up staging and production databases</h3>,
      icon: <FontAwesomeIcon icon={faCloudArrowUp} />,
    },
    {
      content: <h3>Create git tag</h3>,
      icon: <FontAwesomeIcon icon={faTag} />,
    },
    {
      content: <h3>Create new production database</h3>,
      icon: <FontAwesomeIcon icon={faDatabase} />,
    },
    {
      content: <h3>Create new production web container</h3>,
      icon: <FontAwesomeIcon icon={faGlobe} />,
    },
    {
      content: <h3>Update production backup cron</h3>,
      icon: <FontAwesomeIcon icon={faRotate} />,
    },
    {
      content: (
        <div>
          <h3>Point Varnish</h3>
          <p className="text-gray-300">
            to the new production web container after it&apos;s finished
            building
          </p>
        </div>
      ),
      icon: <FontAwesomeIcon icon={faRocket} />,
    },
    {
      content: <h3>Update production queue listener</h3>,
      icon: <FontAwesomeIcon icon={faListCheck} />,
    },
    {
      content: <h3>Trigger Render deployment</h3>,
      icon: <FontAwesomeIcon icon={faTerminal} />,
    },
  ]

  return (
    <div>
      <h1>Automated Deployments</h1>
      <div className="mt-4 flex flex-wrap justify-center gap-5 lg:justify-start keywords-chips">
        <Chip className="bg-orange" label="CraftCMS"></Chip>
        <Chip className="bg-orange" label="Render"></Chip>
        <Chip className="bg-orange" label="GitHub Actions"></Chip>
        <Chip className="bg-orange" label="Golang"></Chip>
      </div>
      <a href="https://pkg.go.dev/github.com/fusionary/go-render">
        <pre>go-render</pre>
        package
      </a>
      <Timeline
        align="alternate"
        value={events}
        marker={(item) => {
          if (item.icon) {
            return (
              <span
                className="flex w-10 h-10 items-center justify-center text-white border-circle border-2 rounded-full z-1 shadow-1"
                style={{ backgroundColor: "var(--orange)" }}
              >
                {item.icon}
              </span>
            )
          }
        }}
        content={(item) => item.content}
      ></Timeline>
    </div>
  )
}

export default AutomatedDeployments
