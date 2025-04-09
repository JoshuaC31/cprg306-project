"use client";

import GetCity from "./get-city";
import { useState } from "react";
import GetWeather from "./get-weather";

export default function Home(){

  const [cityData, setCityData] = useState([]);
  const [selectedLat, setSelectedLat] = useState("");
  const [selectedLon, setSelectedLon] = useState("");

  const manageCityData = (data) => {
    setCityData(data);
  }

  const manageCitySelect = (lat, lon) => {
    console.log({lat,lon});
    setSelectedLat(lat);
    setSelectedLon(lon);
  };

  return(
    <div className="bg-cover bg-gradient-to-l from-gray-950 to-gray-600 min-h-screen"> {/*bg style*/}
    {/*dont know yet might need it*/}
      <div className="flex flex-col">
         {/*name/title style*/}
        <div className="flex justify-end w-full p-12">
          <h1 className="">Weather App</h1>
        </div>
        {/*Search city style*/}
        <div className="flex justify-center w-full">
          <GetCity onSearch={manageCityData} onCitySelect={manageCitySelect}/>
        </div>
        {/* Search Weather style */}
        { selectedLat && selectedLon && (
        <div className="flex justify-center w-full">
          <GetWeather lat={selectedLat} lon={selectedLon}/>
        </div>
        )}
      </div>
    </div>
  )
}