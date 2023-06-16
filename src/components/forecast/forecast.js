const Forecast = ({ data }) => {
  const maxRainValues = [];

  for (let i = 7; i <= 39; i += 8) {
    const rain1hValue =
      data.list[i].rain && "1h" in data.list[i].rain
        ? data.list[i].rain["1h"]
        : 0;
    const rain3hValue =
      data.list[i].rain && "3h" in data.list[i].rain
        ? data.list[i].rain["3h"]
        : 0;
    const maxRainValue = Math.max(rain1hValue, rain3hValue);
    maxRainValues.push(maxRainValue);
  }

  const maxRainValueDay1 = maxRainValues[0];
  const maxRainValueDay2 = maxRainValues[1];
  const maxRainValueDay3 = maxRainValues[2];
  const maxRainValueDay4 = maxRainValues[3];
  const maxRainValueDay5 = maxRainValues[4];

  function displayTime() {
    var forecastWeekShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var forecastDateTime = new Date();
    var forecastDay = forecastDateTime.getDay();

    var dayValues = [];
    for (let i = 0; i < 5; i++) {
      let day = (forecastDay + i + 1) % 7;
      dayValues.push(day);
    }

    var shortDayViews = dayValues.map((day) => forecastWeekShort[day]);

    document.getElementById("dayShort").innerHTML = shortDayViews[0];
    document.getElementById("dayShortTwo").innerHTML = shortDayViews[1];
    document.getElementById("dayShortThree").innerHTML = shortDayViews[2];
    document.getElementById("dayShortFour").innerHTML = shortDayViews[3];
    document.getElementById("dayShortFive").innerHTML = shortDayViews[4];
  }

  setInterval(displayTime, 10);

  return (
    <div className="p-3 next-days-weather h-100 w-100 d-flex flex-column align-items-center justify-content-center">
      <div className="w-100 title-wrapper fw-bold fs-3 border-bottom border-light border-opacity-50">
        Next 5 days
      </div>
      <div className="w-100 row pb-2">
        <div className="col">
          <div className="row border-bottom border-light border-opacity-50 justify-content-center align-items-center text-center">
            <div className="col-sm px-2 py-1">
              <div className="value fw-bold" id="dayShort"></div>
            </div>
            <div className="col-sm px-2 py-1">
              <div className="value">
                <img
                  src={`./icons/${data.list[7].weather[0].icon}.png`}
                  alt="Weather Icon"
                ></img>
              </div>
            </div>
            <div className="col-sm px-2 py-1">
              <div className="value fw-bold">
                {Math.round(data.list[7].main.temp_min)}°C
              </div>
              <div className="type">Low</div>
            </div>
            <div className="col-sm px-2 py-1">
              <div className="value fw-bold">
                {Math.round(data.list[7].main.temp_max)}°C
              </div>
              <div className="type">High</div>
            </div>
            <div className="col-sm px-2 py-1">
              <div className="value fw-bold">
                {Math.round(data.list[7].wind.speed)} mph
              </div>
              <div className="type">Wind</div>
            </div>
            <div className="col-sm px-2 py-1">
              <div className="value fw-bold">{maxRainValueDay1} mm/hr</div>
              <div className="type">Rain</div>
            </div>
          </div>
          <div className="row border-bottom border-light border-opacity-50 justify-content-center align-items-center text-center">
            <div className="col-sm px-2 py-1">
              <div className="value fw-bold" id="dayShortTwo"></div>
            </div>
            <div className="col-sm px-2 py-1">
              <div className="value">
                <img
                  src={`./icons/${data.list[15].weather[0].icon}.png`}
                  alt="Weather Icon"
                ></img>
              </div>
            </div>
            <div className="col-sm px-2 py-1">
              <div className="value fw-bold">
                {Math.round(data.list[15].main.temp_min)}°C
              </div>
              <div className="type">Low</div>
            </div>
            <div className="col-sm px-2 py-1">
              <div className="value fw-bold">
                {Math.round(data.list[15].main.temp_max)}°C
              </div>
              <div className="type">High</div>
            </div>
            <div className="col-sm px-2 py-1">
              <div className="value fw-bold">
                {Math.round(data.list[15].wind.speed)} mph
              </div>
              <div className="type">Wind</div>
            </div>
            <div className="col-sm px-2 py-1">
              <div className="value fw-bold">{maxRainValueDay2} mm/hr</div>
              <div className="type">Rain</div>
            </div>
          </div>
          <div className="row border-bottom border-light border-opacity-50 justify-content-center align-items-center text-center">
            <div className="col-sm px-2 py-1">
              <div className="value fw-bold" id="dayShortThree"></div>
            </div>
            <div className="col-sm px-2 py-1">
              <div className="value">
                <img
                  src={`./icons/${data.list[23].weather[0].icon}.png`}
                  alt="Weather Icon"
                ></img>
              </div>
            </div>
            <div className="col-sm px-2 py-1">
              <div className="value fw-bold">
                {Math.round(data.list[23].main.temp_min)}°C
              </div>
              <div className="type">Low</div>
            </div>
            <div className="col-sm px-2 py-1">
              <div className="value fw-bold">
                {Math.round(data.list[23].main.temp_max)}°C
              </div>
              <div className="type">High</div>
            </div>
            <div className="col-sm px-2 py-1">
              <div className="value fw-bold">
                {Math.round(data.list[23].wind.speed)} mph
              </div>
              <div className="type">Wind</div>
            </div>
            <div className="col-sm px-2 py-1">
              <div className="value fw-bold">{maxRainValueDay3} mm/hr</div>
              <div className="type">Rain</div>
            </div>
          </div>
          <div className="row border-bottom border-light border-opacity-50 justify-content-center align-items-center text-center">
            <div className="col-sm px-2 py-1">
              <div className="value fw-bold" id="dayShortFour"></div>
            </div>
            <div className="col-sm px-2 py-1">
              <div className="value">
                <img
                  src={`./icons/${data.list[31].weather[0].icon}.png`}
                  alt="Weather Icon"
                ></img>
              </div>
            </div>
            <div className="col-sm px-2 py-1">
              <div className="value fw-bold">
                {Math.round(data.list[31].main.temp_min)}°C
              </div>
              <div className="type">Low</div>
            </div>
            <div className="col-sm px-2 py-1">
              <div className="value fw-bold">
                {Math.round(data.list[31].main.temp_max)}°C
              </div>
              <div className="type">High</div>
            </div>
            <div className="col-sm px-2 py-1">
              <div className="value fw-bold">
                {Math.round(data.list[31].wind.speed)} mph
              </div>
              <div className="type">Wind</div>
            </div>
            <div className="col-sm px-2 py-1">
              <div className="value fw-bold">{maxRainValueDay4} mm/hr</div>
              <div className="type">Rain</div>
            </div>
          </div>
          <div className="row border-bottom border-light border-opacity-50 justify-content-center align-items-center text-center">
            <div className="col-sm px-2 py-1">
              <div className="value fw-bold" id="dayShortFive"></div>
            </div>
            <div className="col-sm px-2 py-1">
              <div className="value">
                <img
                  src={`./icons/${data.list[39].weather[0].icon}.png`}
                  alt="Weather Icon"
                ></img>
              </div>
            </div>
            <div className="col-sm px-2 py-1">
              <div className="value fw-bold">
                {Math.round(data.list[39].main.temp_min)}°C
              </div>
              <div className="type">Low</div>
            </div>
            <div className="col-sm px-2 py-1">
              <div className="value fw-bold">
                {Math.round(data.list[39].main.temp_max)}°C
              </div>
              <div className="type">High</div>
            </div>
            <div className="col-sm px-2 py-1">
              <div className="value fw-bold">
                {Math.round(data.list[39].wind.speed)} mph
              </div>
              <div className="type">Wind</div>
            </div>
            <div className="col-sm px-2 py-1">
              <div className="value fw-bold">{maxRainValueDay5} mm/hr</div>
              <div className="type">Rain</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
