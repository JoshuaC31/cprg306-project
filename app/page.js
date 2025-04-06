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
    <div className="">
      <main>
      <div className="">
        <div className="">
          <h1 className="">Weather App</h1>
        </div>
        <div>
          <GetCity onSearch={manageCityData} onCitySelect={manageCitySelect}/>
        </div>
        { selectedLat && selectedLon && (
          <div>
            <GetWeather lat={selectedLat} lon={selectedLon}/>
          </div>
        )}
      </div>
      </main>
    </div>
  )
}