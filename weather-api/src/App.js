import React from 'react'
import Weatherapp from './Weatherapp'


const App = () => {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const url = "https://api.open-meteo.com/v1/forecast?latitude=28.6407&longitude=77.3692&hourly=temperature_2m,relative_humidity_2m,rain,showers,cloud_cover&forecast_days=10";
  //     try {
  //       const response = await fetch(url);
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const result = await response.json();
  //       setData(result);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;
  // if (!data) return <p>No data available</p>;

  // // Get the current hour's data (first item in the hourly arrays)
  // const currentTemp = data.hourly.temperature_2m[0];
  // const currentHumidity = data.hourly.relative_humidity_2m[0];
  // const currentRain = data.hourly.rain[0];
  // const currentCloudCover = data.hourly.cloud_cover[0];

  return (
    <div>
      
      <Weatherapp/>
      {/* <h1>Weather Data</h1>
      <p>Temperature: {currentTemp} {data.hourly_units.temperature_2m}</p>
      <p>Relative Humidity: {currentHumidity} {data.hourly_units.relative_humidity_2m}</p>
      <p>Rain: {currentRain} {data.hourly_units.rain}</p>
      <p>Cloud Cover: {currentCloudCover} {data.hourly_units.cloud_cover}</p> */}
    </div>
  )
}

export default App
