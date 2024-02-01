import React from "react";
import "./WeatherApp.css";
import search_icons from "../Assets/search.png";
import clear_icons from "../Assets/clear.png";
import cloud_icons from "../Assets/cloud.png";
import drizzle_icons from "../Assets/drizzle.png";
import humidity_icons from "../Assets/humidity.png";
import rain_icons from "../Assets/rain.png";
import snow_icons from "../Assets/snow.png";
import wind_icons from "../Assets/wind.png";


function WeatherApp() {

    let Api_Key = "17248ba09addf5812cd4d7b2dcabe434";


    const search = async () => {
        let elements = document.getElementsByClassName("city-input")
    
        if (elements[0].value === "") {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${elements[0].value}&units=Metric&appid=${Api_Key}`

        let response = await fetch(url);
        let data = await response.json();

        const humidity = document.getElementsByClassName("humidity-percentage")
        const wind = document.getElementsByClassName("wind")
        const temperature = document.getElementsByClassName("weather-temp")
        const location = document.getElementsByClassName("weather-loc")
        const weather_icon = document.getElementsByClassName("weather-icon")

        humidity[0].innerHTML = data.main.humidity + "%";
        wind[0].innerHTML = data.wind.speed + " m/s";
        location[0].innerHTML = data.name;
        temperature[0].innerHTML = data.main.temp + "°C";

        // Icon Setting Remain
        weather_icon[0].innerHTML = data.weather.icon;
    }

  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          className="city-input"
          placeholder="Search Location"
        />
        <div className="search-icon" onClick={()=>{search()}}>
          <img src={search_icons} alt="" />
        </div>
      </div>

      <div className="weather-icon">
        <img src={cloud_icons} alt="" />
      </div>
      <div className="weather-temp">24°C</div>
      <div className="weather-loc">Colombo</div>
      <div className="data-container">
        <div className="elements">
          <img src={humidity_icons} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percentage">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="elements">
          <img src={wind_icons} alt="" className="icon" />
          <div className="data">
            <div className="wind">30 m/s</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
