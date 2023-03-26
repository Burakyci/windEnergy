import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Loading from "./Loading";

function Weather() {
  const { weatherData, setWeatherData } = useContext(GlobalContext);
  const { loading, data } = weatherData;
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

              <img
                className="m-0"
                style={{ width: "50px" }}
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt={data.weather[0].main}
              />
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
