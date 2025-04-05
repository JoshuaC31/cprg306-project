"use client";
import { useState } from "react";


export default function GetWeather(cityData) {

const [weatherData, setWeatherData] = useState([]);
const APIKey = process.env.NEXT_PUBLIC_API_KEY;

const fetchWeatherData = async (lat, lon) => {
    try {
        const response = await fetch (`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${APIKey}`);
        const data = await response.json();
        console.log(data);
        setWeatherData(data);
        return data;
    } catch (error) {
        console.error("ERROR!! cannot fetch weather data", error);
        return[];
    };
};

return (
    <div>
        <h1></h1>
    </div>
);

};
