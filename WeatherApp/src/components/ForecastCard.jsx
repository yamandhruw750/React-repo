function ForecastCard({ day }) {
  const date = new Date(day.dt_txt);
  const dayName = date.toLocaleDateString("en-IN", {
    weekday: "short",
  });

  const iconMap = {
    "01d": "☀️",
    "01n": "🌙",
    "02d": "⛅",
    "02n": "☁️",
    "03d": "☁️",
    "03n": "☁️",
    "04d": "☁️",
    "04n": "☁️",
    "09d": "🌧",
    "09n": "🌧",
    "10d": "🌦",
    "10n": "🌧",
    "11d": "⛈",
    "11n": "⛈",
    "13d": "❄️",
    "13n": "❄️",
    "50d": "🌫",
    "50n": "🌫",
  };
  const iconCode = day.weather[0].icon;

  return (
    <div className="flex-col items-center justify-center gap-2 shadow p-4 rounded-2xl">
      <p>{dayName}</p>

      <p className="text-4xl">{iconMap[iconCode] || "❓"}</p>

      <p>{Math.round(day.main.temp)}°C</p>
    </div>
  );
}

export default ForecastCard;
