import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: process.env.GATSBY_API_URL,
  headers: { Accept: `application/json` },
})
