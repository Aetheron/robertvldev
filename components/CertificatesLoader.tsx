"use client"

import { getCertificatesAction } from "@/app/actions"
import { useEffect, useState } from "react"
import Card from "./Card"
import CertificationItem, { CertificateItemProps } from "./CertificationItem"
import Skeleton from "./Skeleton"

export default function CertificatesLoader() {
  const [certifications, setCertifications] = useState<CertificateItemProps[]>()

  useEffect(() => {
    async function fetchData() {
      const certifications = await getCertificatesAction()

      setCertifications(certifications)
    }
    fetchData()
  }, [])

  return certifications ? (
    certifications.map((certificate, i) => (
      <CertificationItem
        key={i}
        title={certificate.title}
        dateIssued={certificate.dateIssued}
        issuer={certificate.issuer}
      />
    ))
  ) : (
    <Card className="w-56" cardTitle={<Skeleton className="h-8 w-40" />}>
      <div className="flex flex-nowrap gap-5 mt-2">
        <Skeleton className="h-12 w-12" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-5 w-10" />
          <Skeleton className="h-5 w-16" />
        </div>
      </div>
    </Card>
  )
}
