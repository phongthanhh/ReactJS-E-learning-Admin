import { GROUP_CODE } from 'constant'
import {
  ICourse, CourseCategory, CourseQuery, CourseToCreate, ListResponse, SearchParams
} from 'models'
import queryString from 'query-string'
import axiosClient from './api'
import { Endpoint } from './endpoint.api'

const getCoursesWithPagApi = (queryParams: SearchParams):
Promise<ListResponse<ICourse>> => {
  const newQueryParams = { MaNhom: GROUP_CODE, ...queryParams }
  if (newQueryParams.tenKhoaHoc === '') {
    delete newQueryParams.tenKhoaHoc
  }
  const q = queryString.stringify(newQueryParams)
  const url = `${Endpoint.GET_COURSE_WITH_PAG}?${q}`
  return axiosClient.get(url)
}

const createCourseApi = (data: CourseToCreate) => {
  const url = Endpoint.CREATE_COURSE
  return axiosClient.post(url, data)
}

const getCourseCategoryApi = (): Promise<CourseCategory[]> => {
  const url = Endpoint.GET_COURSE_CATEGORY
  return axiosClient.get(url)
}

const updateCourseApi = (data: CourseToCreate) => {
  const url = Endpoint.UPDATE_COURSE
  return axiosClient.put(url, data)
}

const getCourseDetailApi = (queryParams: CourseQuery): Promise<ICourse> => {
  const q = queryString.stringify(queryParams)
  const url = `${Endpoint.GET_COURSE_DETAIL}?${q}`
  return axiosClient.get(url)
}

export {
  getCoursesWithPagApi, createCourseApi, getCourseCategoryApi, updateCourseApi, getCourseDetailApi
}
