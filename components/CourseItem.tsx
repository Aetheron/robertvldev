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
      className="shadow-md hover:shadow-xl"
      color="var(--color-background)"
      title={title}
    >
      <h3>
        <slot name="title"></slot>
      </h3>
      <div class="card-content">
        <FontAwesomeIcon
          className="w-12 h-12"
          icon={faLaptopCode}
        ></FontAwesomeIcon>
        <div>
          <div>{date}</div>
          <div className="text-[var(--gray)]">{issuer}</div>
        </div>
      </div>
    </Card>
  )
}
