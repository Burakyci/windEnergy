import React, { useContext, useEffect } from "react";
import WeatherConpService from "../service/weatherService";
import { usePosition } from "use-position";
import { GlobalContext } from "../context/GlobalContext";
import Loading from "./Loading";

function Weather() {
  const watch = true;
  const { weatherConp, setWeatherConp } = useContext(GlobalContext);
  const { data, error, loading } = weatherConp;
  const { latitude, longitude } = usePosition(watch, {
    enableHighAccuracy: true,
  });

  const getByData = WeatherConpService;

  const getByWeather = async () => {
    setWeatherConp((prev) => ({
      ...prev,
      loading: true,
    }));
    const res = await getByData.getByDtata(latitude, longitude);
    setWeatherConp((prev) => ({
      ...prev,
      data: res,
      loading: false,
    }));
  };

  useEffect(() => {
    latitude && longitude && getByWeather();
  }, [latitude, longitude]);

  return (
    <div className="" style={{ color: "white" }}>
      {loading === false ? (
        <>
          {data && (
            <>
              <>
                <p className="m-2">{data.name}</p>
              </>
              <p className="m-3  mb-0">
                Sıcaklık:
                {data.main.temp}
                <span className="derece">°</span>
              </p>
              <p className="m-3  mb-0">
                Ruzgar:
                {data.wind.speed} m/s
                <span className="derece"></span>
              </p>

              {(() => {
                switch (data.weather[0].description) {
                  case "clear sky":
                    return (
                      <img
                        className="m-0"
                        style={{ width: "50px" }}
                        src="http://openweathermap.org/img/wn/01d@2x.png"
                        alt="acik hava"
                      />
                    );
                  case "few clouds":
                    return (
                      <img
                        className="m-0"
                        style={{ width: "50px" }}
                        src="http://openweathermap.org/img/wn/02d@2x.png"
                        alt="acik hava"
                      />
                    );
                  case "scattered clouds":
                    return (
                      <img
                        className="m-0"
                        style={{ width: "50px" }}
                        src="http://openweathermap.org/img/wn/03d@2x.png"
                        alt="acik hava"
                      />
                    );
                  case "broken clouds":
                  case "overcast clouds":
                    return (
                      <img
                        className="m-0"
                        style={{ width: "50px" }}
                        src="http://openweathermap.org/img/wn/04d@2x.png"
                        alt="acik hava"
                      />
                    );
                  case "shower rain":
                  case "light intensity drizzle":
                  case "drizzle":
                  case "heavy intensity drizzle":
                  case "light intensity drizzle rain":
                  case "drizzle rain":
                  case "heavy intensity drizzle rain":
                  case "heavy shower rain and drizzle":
                  case "shower drizzle":
                  case "shower rain and drizzle":
                  case "light intensity shower rain":
                    return (
                      <img
                        className="m-0"
                        style={{ width: "50px" }}
                        src="http://openweathermap.org/img/wn/09d@2x.png"
                        alt="acik hava"
                      />
                    );
                  case "rain":
                  case "light rain":
                    return (
                      <img
                        className="m-0"
                        style={{ width: "50px" }}
                        src="http://openweathermap.org/img/wn/10d@2x.png"
                        alt="acik hava"
                      />
                    );
                  case "snow":
                    return (
                      <img
                        className="m-0"
                        style={{ width: "50px" }}
                        src="http://openweathermap. org/img/wn/13d@2x.png"
                        alt="acik hava"
                      />
                    );
                  case "thunderstorm":
                  case "thunderstorm with light rain":
                  case "Thunderstorm	thunderstorm with rain":
                  case "thunderstorm with heavy rain":
                  case "light thunderstorm":
                  case "heavy thunderstorm":
                  case "ragged thunderstorm":
                  case "thunderstorm with heavy drizzle	":
                  case "thunderstorm with light drizzle":
                  case "thunderstorm with drizzle":
                    return (
                      <img
                        className="m-0"
                        style={{ width: "50px" }}
                        src="https://openweathermap.org/img/wn/11d@2x.png"
                        alt="acik hava"
                      />
                    );
                  case "mist":
                  case "smoke":
                  case "haze":
                  case "sand/dust whirls":
                  case "fog":
                  case "sand":
                  case "dust":
                  case "volcanic ash":
                  case "squalls":
                  case "tornado":
                    return (
                      <img
                        className="m-0"
                        style={{ width: "50px" }}
                        src="http://openweathermap.org/img/wn/50d@2x.png"
                        alt="acik hava"
                      />
                    );
                  default:
                    break;
                }
              })()}
            </>
          )}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Weather;

// const getByWeather = async () => {
//   setWeather((prev) => ({
//     ...prev,
//     loading: true,
//   }));
//   const res = await getByData.getByDtata(latitude, longitude);
//   setWeather((prev) => ({
//     ...prev,
//     data: res,
//     loading: false,
//   }));
// useEffect(() => {
//   latitude && longitude && getByWeather(); // if al
// }, [latitude, longitude]);
// };
