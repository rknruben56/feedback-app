import { Template } from "../models/template"
import { axiosInstance } from "./API"

const path = `/v1/templates`

export const GetTemplates = async (): Promise<Template[]> => {
  try {
    const response = await axiosInstance.get<Template[]>(path)
    return response.data
  } catch (error) {
    console.log(error)
    return [] as Template[]
  }
}
