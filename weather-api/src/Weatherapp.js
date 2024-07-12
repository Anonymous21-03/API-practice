import React, { useEffect, useState } from 'react';
import './Weatherapp.css';

const WeatherApp = () => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState('Delhi');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const cities = ['Delhi', 'London', 'New York', 'Tokyo', 'Sydney'];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [city]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="weather-container">
      <div className="weather-card">
        <h1>Weather Report</h1>
        <div className="city-selection">
          <select value={city} onChange={handleCityChange}>
            {cities.map((value) => (
              <option key={value} value={value}>{value}</option>
            ))}
          </select>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        {data && !loading && !error && (
          <div className="weather-data">
            <h2>{data.name}</h2>
            <img 
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
              alt={data.weather[0].description}
            />
            <p className="temperature">{Math.round(data.main.temp)}°C</p>
            <p className="description">{data.weather[0].description}</p>
            <div className="details">
              <p>Humidity: {data.main.humidity}%</p>
              <p>Wind: {data.wind.speed} m/s</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;