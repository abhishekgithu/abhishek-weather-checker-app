import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';

function Weather() {
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState('');
  const [humidity, setHumidity] = useState(0);
  const [speed,setSpeed] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=8b41381362f9ba7593dda58955cd5666&units=metric`;
      const response = await axios.get(url);
      setWeatherData(response.data.main.temp.toFixed());
      setCity(response.data.name);
      setHumidity(response.data.main.humidity);
      setSpeed(response.data.wind.speed.toFixed());
      setWeather(response.data.weather[0].main);
    // 
      console.log(response.data);
    });
  }, []);


  return (
    <>
    <div className="weather-container">
         <h1 className='city'>{city}</h1>
      <p className="temp">{weatherData} °C</p>
     
      <p> {weather} </p>
      <div className="bott">
            <h1 className='p1'>Humidity - {humidity}%</h1>
            <h1 className='p1'>Wind Speed - {speed} m/s</h1>
        </div>
        
    </div>
  
    </>
  );
}

export default Weather;