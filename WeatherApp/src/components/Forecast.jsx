import ForecastCard from "./ForecastCard";
import { useWeather } from "../context/weatherContext";

function Forecast() {
  const { forecastData } = useWeather();
  if (!forecastData || forecastData.length === 0) {
    return null;
  }

  const dailyForecast = forecastData.list.filter((item) => {
    return item.dt_txt.includes("12:00:00");
  });

  

  return (
    <div className="flex items-center justify-center gap-4">
      {dailyForecast.map((day, index) => (
        <ForecastCard key={index} day={day} />
      ))}
    </div>
  );
}

export default Forecast;
