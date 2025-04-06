"use client";
import { useState } from "react";

export default function GetCity({ onSearch, onCitySelect}) {
  const [city, setCity] = useState("");
  const [results, setResults] =useState([]);

  const APIKey = process.env.NEXT_PUBLIC_API_KEY;

  const fetchCityData = async () => {
    try {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${APIKey}`);
        const data = await response.json();
        console.log(data);
        setResults(data);
        onSearch(data);
        return data;
    }catch (error) {
        console.error("ERROR! cannot fetch city data", error);
        setResults([]);
        onSearch([]);
    };
  };

  const handleFetch = () => {
    if (city) fetchCityData();
  };

  return (
    <div>
      <div className="">
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter a City" className=""/>
        <button onClick={handleFetch} className="">Search Weather</button>
      </div>
      <div>
        {results.map((cityData, id) => (
          <div key={id} className="" onClick={() => onCitySelect(cityData.lat , cityData.lon)}>
            <h3>{cityData.name}</h3>
            <p className="">Country: {cityData.country}</p>
            <p className="">State: {cityData.state}</p>
          </div>
        ))}
      </div>
    </div>
  );
}