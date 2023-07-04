import CertificationItem from "@/components/CertificationItem"
import CourseItem from "@/components/CourseItem"
import { NextPage } from "next/types"

const Certifications: NextPage = () => {
  return (
    <main>
      <div>
        <h1 className="text-center">Certifications</h1>
        <div className="flex flex-wrap justify-center gap-5 my-4">
          <CertificationItem
            title="Become an SEO Expert"
            date="2019"
            issuer="LinkedIn Learning"
          />
          <CertificationItem
            title="Elements of SCRUM"
            date="2022"
            issuer="Agile Learning Labs"
          />
          <CertificationItem
            title="Stripe Architect"
            date="2023"
            issuer="Stripe"
          />
        </div>
        <h1 className="text-center">Courses</h1>
        <div className="flex flex-wrap justify-center gap-5 my-4">
          <CourseItem
            title="React Fundamentals"
            date="2022 - 2023"
            issuer="Kent C. Dodds"
          />
        </div>
      </div>
    </main>
  )
}

export default Certifications
