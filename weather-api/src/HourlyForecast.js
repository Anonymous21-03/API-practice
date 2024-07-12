import React, { useEffect, useState } from 'react'

const HourlyForecast = () => {
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
    fetchData();
  }, [city])

  const handleCityChange = (event) => {
    setCity(event.target.value)
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!data) return null

  return (
    <div>
      <h1>5 Day Forecast</h1>
      <select value={city} onChange={handleCityChange}>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      {data && (
        <div>
          <h2>{data.city.name}, {data.city.country}</h2>
          <ul>
            {data.list.slice(0, 5).map((forecast, index) => (
              <li key={index}>
                Date: {new Date(forecast.dt * 1000).toLocaleDateString()}, 
                Temp: {forecast.main.temp}°C, 
                Weather: {forecast.weather[0].description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default HourlyForecast