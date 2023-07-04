import React from "react"
import { Card } from "primereact/card"

export interface CertificateItemProps {
  title: string
  date: string
  issuer: string
}

export default function CertificationItem({
  title,
  date,
  issuer,
}: CertificateItemProps) {
  return (
    <Card
      className="bg-gray-800 shadow-md hover:shadow-xl hover:transition-all"
      title={title}
    >
      <div className="flex flex-nowrap gap-5">
        <svg
          className="w-12 h-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
        >
          <title>certificate-outline</title>
          <path d="M13 21L15 20L17 21V14H13M17 9V7L15 8L13 7V9L11 10L13 11V13L15 12L17 13V11L19 10M20 3H4A2 2 0 0 0 2 5V15A2 2 0 0 0 4 17H11V15H4V5H20V15H19V17H20A2 2 0 0 0 22 15V5A2 2 0 0 0 20 3M11 8H5V6H11M9 11H5V9H9M11 14H5V12H11Z" />
        </svg>
        <div>
          <div>{date}</div>
          <div className="text-gray-400">{issuer}</div>
        </div>
      </div>
    </Card>
  )
}
