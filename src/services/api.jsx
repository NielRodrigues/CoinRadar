export async function getConverter(convert) {

  const URL = `https://economia.awesomeapi.com.br/last/${convert}`

  const response = await fetch(URL)
  const data = await response.json()
  console.log('Oi')
  console.log(data)
  return data
}
