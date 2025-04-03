"use client";
import { useState } from "react";


export default function GetWeather() {

const [weatherDate, setWeatherData] = useState([]);

const APIKey = process.env.NEXT_PUBLIC_API_KEY;

const fetchWeatherData = async () => {
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
        <h1>hello</h1>
    </div>
);

};
