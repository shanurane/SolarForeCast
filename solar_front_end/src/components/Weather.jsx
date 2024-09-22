import React from "react";
import { useState } from "react";

const api = {
  key: "7e3cac9c1cfbf248f913bcef52361971",
  base: "https://api.openweathermap.org/data/2.5/",
};

const newAPI = {
  base: "https://api.open-meteo.com/v1/",
};

const Weather = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = async () => {
    await fetch(`${api.base}weather?q=${search}&APPID=${api.key}`)
      .then((res) => res.json())
      .then(async (result) => {
        await fetch(
          `${newAPI.base}forecast?latitude=${result.coord.lat}&longitude=${result.coord.lon}&hourly=temperature_2m,relative_humidity_2m,precipitation,cloud_cover`
        )
          .then((res) => res.json())
          .then((newResult) => {
            setWeather(newResult);
            // console.log(weather);
          });
      });
  };

  return (
    <div className="weather">
      <header className="weather-header">
        {/* Header */}
        <h1>Weather App</h1>

        {/* Search Box */}
        <div>
          <input
            type="text"
            placeholder="Enter City"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>
        {typeof weather.hourly !== "undefined" ? (
          <div>
            {/* Location */}
            {/* <p>{weather.city.name}</p> */}

            {/* Temperature */}
            <div className="flex justify-around">
              <div>
                <p className="font-bold">Temperature</p>
                {weather.hourly.temperature_2m
                  .slice(0, 24)
                  .map((item, index) => (
                    <p key={index}>{item}</p> // Render only the first 5 items
                  ))}
              </div>{" "}
              <div>
                <p className="font-bold">Humidity</p>
                {weather.hourly.relative_humidity_2m
                  .slice(0, 24)
                  .map((item, index) => (
                    <p key={index}>{item}</p> // Render only the first 5 items
                  ))}
              </div>{" "}
              <div>
                <p className="font-bold">Precipitation</p>
                {weather.hourly.precipitation
                  .slice(0, 24)
                  .map((item, index) => (
                    <p key={index}>{item}</p> // Render only the first 5 items
                  ))}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
};

export default Weather;
