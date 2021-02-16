export async function get<T>(urlPath: string): Promise<T> {
  const url = `${process.env.GATSBY_API_URL}${urlPath}`
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return await (response.json() as Promise<T>)
}
