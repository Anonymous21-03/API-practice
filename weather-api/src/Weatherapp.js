import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const Weatherapp = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://api.open-meteo.com/v1/forecast?latitude=28.6407&longitude=77.3692&hourly=temperature_2m,relative_humidity_2m,rain,showers,cloud_cover';
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  // Default location
  let location = { lat: 28.6407, lon: 77.3692 };

  if (data) {
    location = { lat: data.latitude, lon: data.longitude };
  }

  return (
    <div>
      <h1>Weather Report</h1>

      {loading ? (
        'Loading...'
      ) : (
        <>
          <p>Latitude: {location.lat}</p>
          <p>Longitude: {location.lon}</p>
          <p>Temperature: {data?.hourly.temperature_2m[0]}</p>

          {/* Google Maps */}
          <div style={{ height: '400px', width: '100%' }}>
            <LoadScript googleMapsApiKey="">
              <GoogleMap
                mapContainerStyle={{ height: '100%', width: '100%' }}
                center={{ lat: location.lat, lng: location.lon }}
                zoom={12}
              >
                <Marker position={{ lat: location.lat, lng: location.lon }} />
              </GoogleMap>
            </LoadScript>
          </div>
        </>
      )}
    </div>
  );
};

export default Weatherapp;
