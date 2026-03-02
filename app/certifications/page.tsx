import CertificatesLoader from "@/components/CertificatesLoader"
import CoursesLoader from "@/components/CoursesLoader"
import type { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "Certifications - robertvl.dev",
}

export default function Certifications() {
  return (
    <>
      <main>
        <div>
          <h1 className="text-center">Certifications</h1>
          <div className="flex flex-wrap justify-center gap-5 my-4">
            <CertificatesLoader />
          </div>
          <h1 className="text-center">Courses</h1>
          <div className="flex flex-wrap justify-center gap-5 my-4">
            <CoursesLoader />
          </div>
        </div>
      </main>
    </>
  )
}
