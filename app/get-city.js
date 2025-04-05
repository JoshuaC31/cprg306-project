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
      <div className="bg-black/40 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-xl justify-items-center">
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter a City" className="text-2xl font-bold text-white mb-4"/>
        <button onClick={handleFetch} className="px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-md text-white text-sm">Search Weather</button>
      </div>
      <div>
        {results.map((cityData, id) => (
          <div key={id} className="bg-black/40 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-xl" onClick={() => onCitySelect(cityData.lat , cityData.lon)}>
            <h3>{cityData.name}</h3>
            <p className="text-white/80 mb-6">Country: {cityData.country}</p>
            <p className="text-white/80 mb-6">State: {cityData.state}</p>
            <p className="text-white/80 mb-6">Latitude: {cityData.lat}</p>
            <p className="text-white/80 mb-6">Longitude: {cityData.lon}</p>
          </div>
        ))}
      </div>
    </div>
  );
}