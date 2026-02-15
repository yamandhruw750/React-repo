import { getForeCastDataForCity, getWeatherDataForCity } from "@/api";
import { createContext, useContext, useState, useEffect } from "react";

const STORAGE_KEY = "weatherapp-city";

const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [searchCity, setSearchCity] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || "Raipur";
    } catch {
      return "Raipur";
    }
  });

  const handleSearchCity = (city) => {
    setSearchCity(city);
    try {
      localStorage.setItem(STORAGE_KEY, city);
    } catch {}
  };

  const fetchData = async () => {
    const response = await getWeatherDataForCity(searchCity);
    setData({
      cityname: response.name,
      temp: Math.floor(response.main.temp),
      humidity: response.main.humidity,
      wind: response.wind.speed,
      condition: response.weather[0].main,
    });
    setSearchCity("");
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchForeData = async () => {
    const response = await getForeCastDataForCity(searchCity);
    setForecastData(response);
  };

  useEffect(() => {
    fetchForeData();
  }, []);

  const handleClick = () => {
    if (!searchCity.trim()) {
      alert("Please Enter City Name");
    }
    fetchData();
    fetchForeData();
  };

  const formatDate = () => {
    const today = new Date();

    const day = today.toLocaleDateString("en-IN", {
      weekday: "long",
    });

    const date = today.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    return { day, date };
  };

  return (
    <WeatherContext.Provider
      value={{
        searchCity,
        data,
        forecastData,
        setData,
        setSearchCity: handleSearchCity,
        fetchData,
        formatDate,
        fetchForeData,
        handleClick,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
