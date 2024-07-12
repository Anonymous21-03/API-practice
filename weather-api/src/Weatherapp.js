import React, { useEffect, useState } from 'react'

const Weatherapp = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY
      console.log('API Key:', process.env.REACT_APP_WEATHER_API_KEY)
      const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`
      const response = await fetch(url)
      const result = await response.json()
      setData(result)
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Weather Report</h1>
    {
      data?(
        <div>
          Latitude: {data.coord.lat}<br/>
          Longitude: {data.coord.lon}<br/>
          City name: {data.name}<br/>
          Temperature: {data.main.temp}<br/>
          Humidity: {data.main.humidity}<br/>
        </div>
      ):"no"
    }
    </div>
  )
}

export default Weatherapp
