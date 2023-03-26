import { createContext, useEffect, useState } from "react";
import weatherService from "../service/weatherService";
import Power from "../service/calculator";
import { usePosition, enableHighAccuracy } from "use-position";

export const GlobalContext = createContext();

export const ContextProvider = (props) => {
  const watch = true;
  const [weatherData, setWeatherData] = useState({
    loading: false,
    success: false,
    data: null,
  });
  const { loading, data } = weatherData;

  const { latitude, longitude } = usePosition(watch, {
    enableHighAccuracy: true,
  });

  const getData = async () => {
    setWeatherData({
      loading: false,
      success: false,
      data: null,
    });
    const data = await weatherService.getByDtata(latitude, longitude);
    setWeatherData({
      loading: false,
      success: false,
      data: data,
    });
  };

  useEffect(() => {
    if (latitude && longitude) {
      getData();
    }
  }, [latitude, longitude]);

  const bigData = {
    weatherData,
    setWeatherData,
  };
  return (
    <GlobalContext.Provider value={bigData}>
      {props.children}
    </GlobalContext.Provider>
  );
};
