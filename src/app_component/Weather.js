import React, { useState, useEffect } from "react";

function Weather() {
  const [weather, setWeather] = useState({
    location: "",
    city: "",
    condition: "",
    icon: "https://cdn.weatherapi.com/weather/64x64/night/116.png",
  });
  const location = weather.location;
  const city = weather.city;
  const condition = weather.condition;
  const icon = weather.icon;
  const [searchInput, setSearchInput] = useState("");
  const [weatherNow, setWeatherNow] = useState([]);
  // const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=3865367567c643ad88e11112200910&q=${searchInput}`
    )
      .then((response) => response.json())
      .then((data) => setWeatherNow(data))
      .catch(err => console.log("Error Display!"));
  }, [searchInput]);


  function getWeatherInfo(e) {
    console.log(searchInput);
    if (searchInput === "") {
      console.log("Empty");
    } else {
      setWeather((prevState) => {
        return {
          ...prevState,
          location: weatherNow.location.country,
          city: weatherNow.location.name,
          condition: weatherNow.current.condition["text"],
          icon: weatherNow.current.condition["icon"],
        };
      });
      // setLoader(true);
    }
    e.preventDefault();
  }

  return (
    <div>
      <h1>Weather App</h1>
      <div className="weather-content">
        <form>
          <input
            type="text"
            placeholder="Search Country"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </form>
        {searchInput === "" ? <p>Please enter a country</p> : null}
        <button onClick={getWeatherInfo}>Search</button>
        <div className="weather-info">
          <div>
            <p>
              Country: <span>{location}</span>
            </p>
            <p>
              City: <span>{city}</span>
            </p>
            <p>
              Condition: <span>{condition}</span>
            </p>
            <img src={icon} alt="weather icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
