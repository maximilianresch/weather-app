import React, { useState } from "react";
import "./App.css";
import config from './config';
//import Date from "./components/Date";

const apiKey = config.WEATHERAPI_KEY

const api = {
  key: apiKey,
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          setWeather(result);
          console.log(result);
        });
    }
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 15
            ? "App warm"
            : "App"
          : "App"
      }
    >
      <main>
        <div className="search-box">
        {/* create new input with geosuggest or google autocomplete */}
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
            </div>
            
            {/* <Date /> */}
            <div className="weather-box">
              <div className="temp">{Math.floor(weather.main.temp)}°C</div>
              {/* <div className="feels-like">Feels like {weather.main.feels_like}</div> */}
              <div className="weather">{weather.weather[0].description}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
