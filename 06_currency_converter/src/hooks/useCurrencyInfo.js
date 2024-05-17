import {useEffect, useState } from 'react'

function useCurrencyInfo(currency){
  const [data, setData] = useState({})
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.min.json`)
    .then((res) => res.json())
    .then((res) => setData(res[currency]))
    console.table(data)
  }, [currency])             //automatically fetch call ho jayega
  console.log(data)
  return data
}

export default useCurrencyInfo