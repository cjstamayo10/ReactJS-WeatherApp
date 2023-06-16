const DailyWeather = ({data}) => {
    return (
      <div className="p-3 daily-weather w-100">
        <div className="title-wrapper fw-bold fs-3">3-hour Weather</div>
        <div className="row justify-content-center align-items-center">
          <div className="card text-center m-2">
            <div className="card-body">
              <div className="card-title mb-3">3am</div>
              <div className="icon mb-3">
                <img
                  src={`./icons/${data.list[0].weather[0].icon}.png`}
                  alt="Weather Icon"
                ></img>
              </div>
              <div className="temp">{Math.round(data.list[0].main.temp)}°C</div>
            </div>
          </div>
          <div className="card text-center m-2">
            <div className="card-body">
              <div className="card-title mb-3">6am</div>
              <div className="icon mb-3">
                <img
                  src={`./icons/${data.list[1].weather[0].icon}.png`}
                  alt="Weather Icon"
                ></img>
              </div>
              <div className="temp">{Math.round(data.list[1].main.temp)}°C</div>
            </div>
          </div>
          <div className="card text-center m-2">
            <div className="card-body">
              <div className="card-title mb-3">9am</div>
              <div className="icon mb-3">
                <img
                  src={`./icons/${data.list[2].weather[0].icon}.png`}
                  alt="Weather Icon"
                ></img>
              </div>
              <div className="temp">{Math.round(data.list[2].main.temp)}°C</div>
            </div>
          </div>
          <div className="card text-center m-2">
            <div className="card-body">
              <div className="card-title mb-3">12pm</div>
              <div className="icon mb-3">
                <img
                  src={`./icons/${data.list[3].weather[0].icon}.png`}
                  alt="Weather Icon"
                ></img>
              </div>
              <div className="temp">{Math.round(data.list[3].main.temp)}°C</div>
            </div>
          </div>
          <div className="card text-center m-2">
            <div className="card-body">
              <div className="card-title mb-3">3pm</div>
              <div className="icon mb-3">
                <img
                  src={`./icons/${data.list[4].weather[0].icon}.png`}
                  alt="Weather Icon"
                ></img>
              </div>
              <div className="temp">{Math.round(data.list[4].main.temp)}°C</div>
            </div>
          </div>
          <div className="card text-center m-2">
            <div className="card-body">
              <div className="card-title mb-3">6pm</div>
              <div className="icon mb-3">
                <img
                  src={`./icons/${data.list[5].weather[0].icon}.png`}
                  alt="Weather Icon"
                ></img>
              </div>
              <div className="temp">{Math.round(data.list[5].main.temp)}°C</div>
            </div>
          </div>
          <div className="card text-center m-2">
            <div className="card-body">
              <div className="card-title mb-3">9pm</div>
              <div className="icon mb-3">
                <img
                  src={`./icons/${data.list[6].weather[0].icon}.png`}
                  alt="Weather Icon"
                ></img>
              </div>
              <div className="temp">{Math.round(data.list[6].main.temp)}°C</div>
            </div>
          </div>
          <div className="card text-center m-2">
            <div className="card-body">
              <div className="card-title mb-3">12am</div>
              <div className="icon mb-3">
                <img
                  src={`./icons/${data.list[7].weather[0].icon}.png`}
                  alt="Weather Icon"
                ></img>
              </div>
              <div className="temp">{Math.round(data.list[7].main.temp)}°C</div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default DailyWeather;