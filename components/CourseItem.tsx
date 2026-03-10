import Card from "@/components/Card"
import { CourseDataType } from "@/lib/api"
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function CourseItem({
  title,
  dateIssued,
  issuer,
}: CourseDataType) {
  return (
    <Card
      className="bg-gray-800 shadow-md hover:shadow-xl hover:transition-all"
      cardTitle={title}
    >
      <div className="flex flex-nowrap gap-5">
        <FontAwesomeIcon
          className="w-12 h-12"
          icon={faLaptopCode}
        ></FontAwesomeIcon>
        <div>
          <div>{dateIssued}</div>
          <div className="text-gray-400">{issuer}</div>
        </div>
      </div>
    </Card>
  )
}
