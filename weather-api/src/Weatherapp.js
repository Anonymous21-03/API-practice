// import { response } from 'express'
import React, { useEffect, useState } from 'react'

const Weatherapp = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  let location = { lat: null, lon: null }
  let temp = null

  useEffect(() => {
    const fetchData = async () => {
      const url =
        'https://api.open-meteo.com/v1/forecast?latitude=28.6407&longitude=77.3692&hourly=temperature_2m,relative_humidity_2m,rain,showers,cloud_cover'
      const response = await fetch(url)
      const result = await response.json()
      setData(result)
      setLoading(false)
      console.log(result)
    }
    fetchData()
  }, [])
  if (data) {
    location = { lat: data.latitude, lon: data.longitude }
    temp = data.hourly.temperature_2m[0]
  }

  return (
    <div>
      <h1>Weather Report</h1>

      {loading ? (
        'Loading...'
      ) : (
        <>
          Lantitude:{location.lat}
          <br />
          Longitude:{location.lon}
          <br />
          Temp: {temp}
        </>
      )}
    </div>
  )
}

export default Weatherapp
