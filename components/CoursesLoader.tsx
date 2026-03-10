"use client"

import { getCoursesAction } from "@/app/actions"
import { CourseDataType } from "@/lib/api"
import { useEffect, useState } from "react"
import Card from "./Card"
import CourseItem from "./CourseItem"
import Skeleton from "./Skeleton"

export default function CoursesLoader() {
  const [courses, setCourses] = useState<CourseDataType[]>()

  useEffect(() => {
    async function fetchData() {
      const courses = await getCoursesAction()

      setCourses(courses)
    }
    fetchData()
  }, [])

  return courses ? (
    courses.map((course, i) => (
      <CourseItem
        key={i}
        title={course.title}
        dateIssued={course.dateIssued}
        issuer={course.issuer}
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
