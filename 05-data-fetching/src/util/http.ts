export async function get(url: string) {
  try {
    const response = await fetch(url, {})
    if (!response.ok) {
      throw new Error('Something went wrong')
    }
    const data = (await response.json()) as unknown
    return data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    } else {
      throw new Error('Failed to fetch')
    }
  }
}
