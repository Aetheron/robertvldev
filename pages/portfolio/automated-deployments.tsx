import { faHandPointer } from "@fortawesome/free-regular-svg-icons"
import {
  faBolt,
  faCloudArrowUp,
  faDatabase,
  faExternalLink,
  faGlobe,
  faHome,
  faListCheck,
  faRocket,
  faRotate,
  faTag,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NextPage } from "next"
import Head from "next/head"
import { BreadCrumb } from "primereact/breadcrumb"
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
      icon: <FontAwesomeIcon icon={faHandPointer} className="p-2" />,
    },
    {
      content: <h3>Trigger GitHub action using API request</h3>,
      icon: <FontAwesomeIcon icon={faBolt} className="p-2" />,
    },
    {
      content: <h3>Back up staging and production databases</h3>,
      icon: <FontAwesomeIcon icon={faCloudArrowUp} className="p-2" />,
    },
    {
      content: <h3>Create git tag</h3>,
      icon: <FontAwesomeIcon icon={faTag} className="p-2" />,
    },
    {
      content: <h3>Create new production database</h3>,
      icon: <FontAwesomeIcon icon={faDatabase} className="p-2" />,
    },
    {
      content: <h3>Create new production web container</h3>,
      icon: <FontAwesomeIcon icon={faGlobe} className="p-2" />,
    },
    {
      content: <h3>Update production backup cron</h3>,
      icon: <FontAwesomeIcon icon={faRotate} className="p-2" />,
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
      icon: <FontAwesomeIcon icon={faRocket} className="p-2" />,
    },
    {
      content: <h3>Update production queue listener</h3>,
      icon: <FontAwesomeIcon icon={faListCheck} className="p-2" />,
    },
    {
      content: <h3>Trigger Render deployment</h3>,
      icon: <FontAwesomeIcon icon={faTerminal} className="p-2" />,
    },
  ]

  const items = [
    { label: "Portfolio", url: "/portfolio" },
    { label: "Automated Deployments" },
  ]

  return (
    <>
      <Head>
        <title>Automated Deployments - robertvl.dev</title>
      </Head>
      <div>
        <BreadCrumb
          className="bg-gray-800 mb-4"
          home={{
            icon: <FontAwesomeIcon icon={faHome} className="w-5 h-5" />,
            url: "/",
          }}
          model={items}
        />
        <h1>Automated Deployments</h1>
        <div className="mt-4 flex flex-wrap justify-center gap-5 lg:justify-start keywords-chips">
          <Chip className="bg-orange" label="CraftCMS"></Chip>
          <Chip className="bg-orange" label="Render"></Chip>
          <Chip className="bg-orange" label="GitHub Actions"></Chip>
          <Chip className="bg-orange" label="Golang"></Chip>
        </div>
        <div className="py-4">
          <h2>Render</h2>
          <a
            href="https://pkg.go.dev/github.com/fusionary/go-render"
            target="_blank"
            className="inline-flex gap-1 items-center"
          >
            <pre className="inline">go-render</pre> package
            <FontAwesomeIcon
              icon={faExternalLink}
              className="w-3 h-3"
            ></FontAwesomeIcon>
          </a>
          <p>
            Golang package to make API requests to Render, allowing programmatic
            creation, manipulation, and status checking of jobs, deployments,
            and services.
          </p>
        </div>

        <h2>Automated Deployment Pipeline</h2>
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
    </>
  )
}

export default AutomatedDeployments
