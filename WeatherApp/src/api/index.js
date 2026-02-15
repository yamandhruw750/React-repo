const api_key = import.meta.env.VITE_OPENWEATHER_API_KEY;
const API_BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeatherDataForCity = async (city) => {
  if (!city) return;
  try {
    const url = `${API_BASE_URL}/weather?q=${city}&appid=${api_key}&units=metric`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

export const getForeCastDataForCity = async (city) => {
  if (!city) return;
  try {
    const url = `${API_BASE_URL}/forecast?q=${city}&appid=${api_key}&units=metric`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Forecast API error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching forecast data:", error);
  }
};
