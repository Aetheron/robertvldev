import { Timeline } from "primereact/timeline"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons"
import type { NextPage } from "next/types"

interface TimelineEvent {
  content: JSX.Element
  icon?: JSX.Element
  color?: string
}

const About: NextPage = () => {
  const events: TimelineEvent[] = [
    {
      content: <p>2009</p>,
    },
    {
      content: (
        <div>
          <h3>Calvin University</h3>
          <p className="max-w-96 ml-auto">
            Bachelor of Science in Engineering, concentration in Electrical and
            Computer Engineering
          </p>
        </div>
      ),
      icon: <FontAwesomeIcon icon={faGraduationCap} />,
    },
    {
      content: <p>2013</p>,
    },
    {
      content: (
        <div>
          <h3>Calvin Theological Seminary</h3>
          <p className="max-w-96 ml-auto">
            Master of Arts in Missions and Evangelism
          </p>
        </div>
      ),
      icon: <FontAwesomeIcon icon={faGraduationCap} />,
    },
    {
      content: <p>2016</p>,
    },
    {
      content: (
        <div>
          <h3>Christian Classics Ethereal Library</h3>
          <p className="max-w-96 ml-auto">Web Developer</p>
        </div>
      ),
      icon: <FontAwesomeIcon icon={faBriefcase} />,
    },
    {
      content: <p>2020</p>,
    },
    {
      content: (
        <div>
          <h3>Fusionary</h3>
          <p className="max-w-96 ml-auto">Web Developer and DevOps Engineer</p>
        </div>
      ),
      icon: <FontAwesomeIcon icon={faBriefcase} />,
    },
    {
      content: <p>2023</p>,
    },
  ]

  return (
    <main>
      <div className="flex flex-col items-center">
        <h2 className="w-full text-center">About Bob</h2>
        <Timeline
          className="w-full"
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
    </main>
  )
}

export default About
