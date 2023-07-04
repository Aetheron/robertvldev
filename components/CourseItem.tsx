import React from "react"
import { Card } from "primereact/card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons"

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
        <FontAwesomeIcon
          className="w-12 h-12"
          icon={faLaptopCode}
        ></FontAwesomeIcon>
        <div>
          <div>{date}</div>
          <div className="text-gray-400">{issuer}</div>
        </div>
      </div>
    </Card>
  )
}
