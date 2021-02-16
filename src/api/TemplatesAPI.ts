import { Template } from "../models/template"
import { get } from "./API"

const path = `/templates`

export const GetTemplates = async (): Promise<Template[]> => {
  const templates = await get<Template[]>(path)
  return templates
}
