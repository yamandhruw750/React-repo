import React from "react";
import {
  Wind,
  Droplets,
  ThermometerIcon,
  MapPin,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { useWeather } from "@/context/weatherContext";
import HourlyForecast from "./Hourly";

function MainCard() {
  const { weatherData, formatHour } = useWeather();

  if (!weatherData) return null;

  const {
    location: { name, localtime },
    current: { temp_c, wind_kph, humidity, mintemp_c, maxtemp_c },
    condition: { text },
  } = weatherData;

  return (
    <div>
      <Card className="m-auto container mt-10">
        <CardHeader className="flex justify-around py-4">
          <CardTitle className="flex gap-1.5 items-center">
            <MapPin />
            {name}
          </CardTitle>
          <CardDescription>
            {formatHour(localtime)}
          </CardDescription>
        </CardHeader>
        <Card className="w-md flex items-center justify-center relative px-4 mx-7">
          <ThermometerIcon className="absolute left-32 top-30" />
          <h1 className="text-9xl  relative pr-14 ">
            {temp_c.toFixed(0)}
            <span className="text-6xl  absolute top-2 right-0 ">°C</span>
            <div className="text-4xl text-center mt-6 m-auto ">{text}</div>
          </h1>

          <div className="relative flex space-x-4 items-center justify-around  w-full">
            <h2>
              <Wind />
              {wind_kph.toFixed(0)}KmH
            </h2>

            <h2>
              <Droplets />
              {humidity}
            </h2>
            <h2>
              <ChevronDown />
              {mintemp_c}°C
            </h2>
            <h2>
              <ChevronUp />
              {maxtemp_c}°C
            </h2>
          </div>
        </Card>
        <CardFooter>
          <div className="flex-col mt-20  w-full justify-center items-center gap-2 ">
            <HourlyForecast hourly={weatherData.hourly} />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default MainCard;
