"use client";

export default function WeatherInfoCard({ weatherData }) {

  //this is to convert the temps and render it to celsius
  const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(1);

  const data = {
    location: weatherData?.name || "Unknown Location",
    country: weatherData?.sys?.country || "N/A",
    description: weatherData?.weather?.[0]?.description || "N/A",
    temp: weatherData?.main?.temp ? kelvinToCelsius(weatherData.main.temp) : "N/A",
    feelsLike: weatherData?.main?.feels_like ? kelvinToCelsius(weatherData.main.feels_like) : "N/A",
    humidity: weatherData?.main?.humidity || "N/A",
    windSpeed: weatherData?.wind?.speed || "N/A",
    rain: weatherData?.rain?.["1h"] || "None",
    clouds: weatherData?.clouds?.all || "N/A",
  };

  return (
    <div className="flex items-center flex-row flex-wrap gap-16 w-full p-12">
      <div className="flex-shrink-0 w-64 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
        <h2>{data.location} ({data.country})</h2>
        <p><strong>Weather:</strong> {data.description}</p>
        <p><strong>Temperature:</strong> {data.temp}°C</p>
        <p><strong>Feels Like:</strong> {data.feelsLike}°C</p>
        <p><strong>Humidity:</strong> {data.humidity}%</p>
        <p><strong>Wind Speed:</strong> {data.windSpeed} m/s</p>
        <p><strong>Rain (1h):</strong> {data.rain} mm</p>
        <p><strong>Cloud Cover:</strong> {data.clouds}%</p>
      </div>
    </div>
  );
}