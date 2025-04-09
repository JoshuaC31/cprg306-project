"use client";
import { useState } from "react";

export default function GetCity({ onSearch, onCitySelect}) {
  const [city, setCity] = useState("");
  const [results, setResults] =useState([]);

  const APIKey = process.env.NEXT_PUBLIC_API_KEY;

  const fetchCityData = async () => {
    try {
        const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${APIKey}`);
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
    <div className="flex flex-col items-center w-full p-12">
      <div className="flex justify-center">
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter a City" className="max-w-3xl bg-transparent border-2 rounded-md placeholder-white placeholder:text-center text-sm text-white py-1 px-3 mr-10 "/>
        <button onClick={handleFetch} className="bg-gray-950 text-white border border-gray-400 border-b-4 font-medium overflow-hidden relative px-3 py-1 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">Search City</button>
      </div>
      <div className="flex items-center flex-row flex-wrap gap-16 w-full p-12">
        {results.map((cityData, id) => (
          <div key={id} className="flex-shrink-0 w-64 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 cursor-pointer hover:bg-gray-800 transition-colors duration-200 hover:border-gray-500" onClick={() => onCitySelect(cityData.lat , cityData.lon)}>
            <h3 className="text-white text-lg font-medium mb-2">{cityData.name}</h3>
            <p className="text-gray-300 text-sm">Country: {cityData.country}</p>
            <p className="text-gray-300 text-sm">State: {cityData.state}</p>
          </div>
        ))}
      </div>
    </div>
  );
}