export async function getConverter(convert) {

  const URL = `https://economia.awesomeapi.com.br/${convert}`

  const response = await fetch(URL)
  const data = await response.json()
  return data
}
