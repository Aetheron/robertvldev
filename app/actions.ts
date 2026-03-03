"use server"

import {
  getAllCertifications,
  getAllCourses,
  getAllTimelineItems,
} from "@/lib/api"

export const getCertificatesAction = async () => {
  const certificates = await getAllCertifications()
  return certificates
}

export const getCoursesAction = async () => {
  const courses = await getAllCourses()
  return courses
}

export const getTimelineItemsAction = async () => {
  const timelineItems = await getAllTimelineItems()
  return timelineItems
}
