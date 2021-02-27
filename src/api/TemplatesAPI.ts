import { Template } from "../models/template"
import { get } from "./API"

const path = `/v1/templates`

export const GetTemplates = async (): Promise<Template[]> => {
  try {
    const templates = await get<Template[]>(path)
    return templates
  } catch (error) {
    console.log
    return []
  }
}
