"use client";

import { useState } from "react";

export default function getCity(city) {


    return(
        <div>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter a City"></input>
        </div>
    )
}