import { useState } from "react";
import "./App.css";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";
import Footer from "./components/footer/footer";
import DailyWeather from "./components/daily-weather/daily-weather";


function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="bg-img d-flex flex-column align-items-center justify-content-center">
      <div className="container">
        <Search onSearchChange={handleOnSearchChange} />
        <div className="bg-blur-container p-5 rounded shadow-lg container d-flex align-items-center justify-content-center ">
          <div className="w-100 d-flex flex-column align-items-center justify-content-center">
            {currentWeather && <CurrentWeather data={currentWeather} />}
            {forecast && <DailyWeather data={forecast} />}
            {forecast && <Forecast data={forecast} />}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
