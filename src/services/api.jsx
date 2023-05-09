export async function getConverterUSDBRL() {

  const URL = `https://economia.awesomeapi.com.br/last/USD-BRL`

  const response = await fetch(URL)
  const data = await response.json()
  return data.USDBRL
}

export async function getConverterEURBRL() {

  const URL = `https://economia.awesomeapi.com.br/last/EUR-BRL`

  const response = await fetch(URL)
  const data = await response.json()
  return data.EURBRL
}

export async function getConverterBTCBRL() {

  const URL = `https://economia.awesomeapi.com.br/last/BTC-BRL`

  const response = await fetch(URL)
  const data = await response.json()
  return data.BTCBRL
}
