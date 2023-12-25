export const useFetchData = async (path: string): Promise<any> => {
  try {
    const res = await fetch(`https://comics-api.vercel.app${path}`, {
      cache: 'force-cache',
    })
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
