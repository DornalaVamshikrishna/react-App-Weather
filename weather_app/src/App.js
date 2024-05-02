import Weather from './components/weather';
import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [data, setData] = useState(null);
  const apikey = '3793d1218cd010e6644b4f24ed38ebd8';

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the user's geolocation
        navigator.geolocation.getCurrentPosition(position => {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        }, error => {
          console.error('Error fetching geolocation:', error);
        });

        // Check if latitude and longitude are available
        if (lat !== null && lon !== null) {
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`;
          const response = await fetch(apiUrl);
          if (!response.ok) {
            throw new Error('Failed to fetch weather data');
          }
          console.log(response);
          const weatherData = await response.json();
          setData(weatherData);
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [lat, lon]); // Fetch data when lat or lon changes

  return (
    <div className="App">
      {data ? (
        <Weather weatherData={data} />
      
      ) : (
        <div>Loading weather data...</div>
      )}
    </div>
  );
}

export default App;
