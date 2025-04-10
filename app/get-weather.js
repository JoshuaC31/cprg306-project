"use client";
import { useEffect, useState } from "react";
import WeatherInfoCard from "./weather-info-card";


export default function GetWeather( {lat , lon}) {

const [weatherData, setWeatherData] = useState([]);
const APIKey = process.env.NEXT_PUBLIC_API_KEY_WEATHER;

const fetchWeatherData = async (lati, long) => {
    try {
        console.log("fetching weather", lati, long)
        const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=${APIKey}`);
        const data = await response.json();
        console.log(data);
        setWeatherData(data);
        return data;
    } catch (error) {
        console.error("ERROR!! cannot fetch weather data", error);
        return[];
    };
};

useEffect (() => {
    fetchWeatherData(lat, lon);
}, [lat, lon]);

return (
    <div>
      {weatherData ? (
        <>
          <WeatherInfoCard weatherData={weatherData}/>
        </>
      ) : (
        <p>No weather data available</p>
      )}
    </div>
);

};
