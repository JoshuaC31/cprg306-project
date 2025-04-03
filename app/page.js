"use client";

import GetCity from "./get-city";
import { useState } from "react";
import GetWeather from "./get-weather";

export default function Home(){

  const [cityData, setCityData] = useState([]);

  const manageCityData = (data) => {
    setCityData(data[0]);
  }
  return(
    <div className="bg-[url('https://wallpapercave.com/wp/wp7714748.jpg')] bg-bannerImg bg-repeat relative h-screen bg-cover bg-center">
      <main>
      <div className="relative z-10 w-full max-w-full rounded-xl overflow-hidden justify-items-center">
        <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-white/10 shadow-xl mt-4">
          <h1 className="text-8xl font-bold font-sans text-white mb-4 tracking-wide">Weather App</h1>
        </div>
        <div>
          <GetCity onSearch={manageCityData}/>
        </div>
      </div>
      </main>
    </div>
  )
}