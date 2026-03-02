"use server"

import { getAllCertifications, getAllCourses } from "@/lib/api"

export const getCertificatesAction = async () => {
  const certificates = await getAllCertifications()
  return certificates
}

export const getCoursesAction = async () => {
  const courses = await getAllCourses()
  return courses
}
