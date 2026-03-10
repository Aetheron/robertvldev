import BreadCrumb from "@/components/Breadcrumbs"
import Pill from "@/components/Pill"
import Timeline, { TimelineType } from "@/components/Timeline"
import { faHandPointer } from "@fortawesome/free-regular-svg-icons"
import {
  faBolt,
  faCloudArrowUp,
  faDatabase,
  faExternalLink,
  faGlobe,
  faListCheck,
  faRocket,
  faRotate,
  faTag,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "Automated Deployments - robertvl.dev",
}

export default function AutomatedDeployments() {
  const timelineItems: TimelineType = [
    {
      order: 1,
      title: "Click the deploy button",
      content: <p className="text-gray-300">in CraftCMS admin UI</p>,
      icon: <FontAwesomeIcon icon={faHandPointer} className="p-2" />,
    },
    {
      order: 2,
      title: "Trigger GitHub action using API request",
      icon: <FontAwesomeIcon icon={faBolt} className="p-2" />,
    },
    {
      order: 3,
      title: "Back up staging and production databases",
      icon: <FontAwesomeIcon icon={faCloudArrowUp} className="p-2" />,
    },
    {
      order: 4,
      title: "Create git tag",
      icon: <FontAwesomeIcon icon={faTag} className="p-2" />,
    },
    {
      order: 5,
      title: "Create new production database",
      icon: <FontAwesomeIcon icon={faDatabase} className="p-2" />,
    },
    {
      order: 6,
      title: "Create new production web container",
      icon: <FontAwesomeIcon icon={faGlobe} className="p-2" />,
    },
    {
      order: 7,
      title: "Update production backup cron",
      icon: <FontAwesomeIcon icon={faRotate} className="p-2" />,
    },
    {
      order: 8,
      title: "Point Varnish",
      content: (
        <p className="text-gray-300">
          to the new production web container after it&apos;s finished building
        </p>
      ),
      icon: <FontAwesomeIcon icon={faRocket} className="p-2" />,
    },
    {
      order: 9,
      title: "Update production queue listener",
      icon: <FontAwesomeIcon icon={faListCheck} className="p-2" />,
    },
    {
      order: 10,
      title: "Trigger Render deployment",
      icon: <FontAwesomeIcon icon={faTerminal} className="p-2" />,
    },
  ]

  return (
    <>
      <div>
        <BreadCrumb
          className="mb-4"
          currentPageTitle="Automated Deployments"
          links={[{ title: "Portfolio", href: "/portfolio" }]}
        />
        <h1>Automated Deployments</h1>
        <div className="mt-4 flex flex-wrap justify-center gap-5 lg:justify-start keywords-chips">
          <Pill className="bg-orange dark:bg-orange text-white dark:text-white text-sm">
            CraftCMS
          </Pill>
          <Pill className="bg-orange dark:bg-orange text-white dark:text-white text-sm">
            Render
          </Pill>
          <Pill className="bg-orange dark:bg-orange text-white dark:text-white text-sm">
            GitHub Actions
          </Pill>
          <Pill className="bg-orange dark:bg-orange text-white dark:text-white text-sm">
            Golang
          </Pill>
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
        <Timeline items={timelineItems}></Timeline>
      </div>
    </>
  )
}
