import "./current-weather.css";
import { useState, useEffect } from "react";

const CurrentWeather = ({ data }) => {
  const rain1hValue = data.rain && "1h" in data.rain ? data.rain["1h"] : 0;
  const rain3hValue = data.rain && "3h" in data.rain ? data.rain["3h"] : 0;
  const maxRainValue = Math.max(rain1hValue, rain3hValue);

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDateTime = currentDateTime.toLocaleString(
    undefined,
    formatOptions
  );
  return (
    <>
      <div className="px-3 loc-time w-100">
        <div className="loc display-4 fw-bold">{data.city}</div>
        <div className="time fs-5">{formattedDateTime}</div>
      </div>
      <div className="p-3 current-weather w-100 text-center">
        <div className="row align-items-center justify-content-center text-center">
          <div className="weather-icon col-sm-3">
            <img
              src={`./icons/${data.weather[0].icon}.png`}
              alt="Weather Icon"
            ></img>
          </div>
          <div className="current-temp-description text-center col-sm-4">
            <div className="current-temp fw-bold display-1">
              {Math.round(data.main.temp)}°C
            </div>
            <div className="description fs-6 text-capitalize">
              {data.weather[0].description}
            </div>
          </div>
          <div className="current-weather-details col-sm-5">
            <div className="text-center">
              <div className="weather-details d-flex flex-column mb-3">
                <div className="row">
                  <div className="col-sm px-2 py-1">
                    <div className="value fw-bold">
                      {Math.round(data.main.temp_max)}°C
                    </div>
                    <div className="type">High</div>
                  </div>
                  <div className="col-sm px-2 py-1">
                    <div className="value fw-bold">
                      {Math.round(data.wind.speed)} mph
                    </div>
                    <div className="type">Wind</div>
                  </div>
                  <div className="col-sm px-2 py-1">
                    <div className="value fw-bold">
                      {Math.round(data.clouds.all)}%
                    </div>
                    <div className="type">Cloud</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm px-2 py-1">
                    <div className="value fw-bold">
                      {Math.round(data.main.temp_min)}°C
                    </div>
                    <div className="type">Low</div>
                  </div>
                  <div className="col-sm px-2 py-1">
                    <div className="value fw-bold">{maxRainValue} mm/hr</div>
                    <div className="type">Rain</div>
                  </div>
                  <div className="col-sm px-2 py-1">
                    <div className="value fw-bold">
                      {Math.round(data.main.humidity)}%
                    </div>
                    <div className="type">Humidity</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
