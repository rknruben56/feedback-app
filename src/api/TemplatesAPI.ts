import { Template } from "../models/template"
import { axiosInstance } from "./API"

const path = `/v1/templates`

// TODO: Figure out what to do during catch statements

export const GetTemplates = async (): Promise<Template[]> => {
  try {
    const response = await axiosInstance.get<Template[]>(path)
    return response.data
  } catch (error) {
    console.log(error)
    return [] as Template[]
  }
}

export const CreateTemplate = async (template: Template): Promise<Template> => {
  try {
    const response = await axiosInstance.post<Template>(path, template)
    return response.data
  } catch (error) {
    console.log(error)
    return { id: `error`, class: `error`, content: `error` }
  }
}

export const DeleteTemplate = async (templateId: string): Promise<string> => {
  try {
    const deletePath = `${path}/${templateId}`
    await axiosInstance.delete(deletePath)
    return ``
  } catch (error) {
    console.log(error)
    return error
  }
}
