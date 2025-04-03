"use client";
import { useState } from "react";

export default function GetCity({ onSearch}) {
  const [city, setCity] = useState("");

  const APIKey = process.env.NEXT_PUBLIC_API_KEY;

  const fetchCityData = async () => {
    try {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${APIKey}`);
        const data = await response.json();
        console.log(data);
        onSearch(data);
        return data;
    }catch (error) {
        console.error("ERROR! cannot fetch city data", error);
        onSearch([]);
    };
  };

  const handleFetch = () => {
    if (city) fetchCityData();
  };

  return (
    <div>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter a City"/>
      <button onClick={handleFetch}>Search Weather</button>
    </div>
  );
}