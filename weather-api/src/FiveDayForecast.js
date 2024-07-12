import React, { useEffect, useState } from 'react'
import './FiveDayForecast.css'

const FiveDayForecast = () => {
  const [data, setData] = useState(null)
  const [city, setCity] = useState('Delhi')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const cities = ['Delhi', 'London', 'New York', 'Tokyo', 'Sydney']

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY
        const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const result = await response.json()
        setData(result)
        console.log(result)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [city])

  const handleCityChange = event => {
    setCity(event.target.value)
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!data) return null

  return (
    <div className='fiveday-container'>
      <div className='heading'><h1>5 Day Forecast</h1></div>
      <select value={city} onChange={handleCityChange}>
        {cities.map(city => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      {data && (
        <div className='details-container'>
          <h2>
            {data.city.name}, {data.city.country}
          </h2>
          <div className='card-container'>
            <ul>
              {data.list.slice(0, 5).map((forecast, index) => (
                <div className='card' key={index}>
                  <li>
                    <span>Date:</span> {new Date(forecast.dt * 1000).toLocaleDateString()}
                    <br />
                    <span>Temp:</span> {forecast.main.temp}°C
                    <br />
                    <span>Weather:</span> {forecast.weather[0].description}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default FiveDayForecast
