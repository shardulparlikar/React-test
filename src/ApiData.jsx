/* eslint-disable react/prop-types */
import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from './Card'


export const ApiData = () => {
  const [apiResponse, setApiResponse] = useState([])
  const [filteredResponse, setfilteredResponse] = useState([])

  function setInput (element) {
    const input = element.target.value.trim().toLowerCase()
    console.log(input)
    const filteredArr = apiResponse.filter((sinlePlant) => {
      return input === sinlePlant.name.toLowerCase().trim()
    })
    console.log(filteredArr, 'filtered')
    setfilteredResponse(filteredArr)
  }

  useEffect(() => {
    const fetchRes = async () => {
      try {
        const res = await axios.get('https://lza4vi7uuvokxmbo5kmt4ou7i40nzhbg.lambda-url.us-east-1.on.aws')
        setApiResponse(res.data)
        setfilteredResponse(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchRes()
  }, [])

  return (
    <>
      <div>ApiData</div>
      <input type="text" onChange={setInput} />
      {filteredResponse.map((ele) => {
        return <Card plantType={ele.category} plantName={ele.name} price={ele.price} key={ele.id}></Card>
      })}
    </>
  )
}
