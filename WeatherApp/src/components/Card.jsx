import React from "react";
import { Wind, Droplet, ThermometerIcon, MapPin } from "lucide-react";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import Forecast from "./Forecast";
import { useWeather } from "@/context/weatherContext";
import LoadingSkeleton from "./LoadingSkeleton";

function MainCard() {
  const { data, formatDate } = useWeather();

  if (!formatDate()) {
    return <div>Error</div>;
  }

  if (!data) {
    return (
      <div>
        <LoadingSkeleton />
      </div>
    );
  }

  const Date = formatDate();

  return (
    <div>
      <Card className="m-auto">
        <CardHeader className="flex justify-around py-4">
          <CardTitle className="flex gap-1.5 items-center shadow p-2 rounded-2xl">
            <MapPin />
            {data.cityname}
          </CardTitle>
          <CardDescription className="shadow rounded-2xl p-2">
            {Date.date}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center gap-8 shadow p-10 w-xl m-auto rounded-2xl">
            <ThermometerIcon />
            <h1 className="text-9xl  relative pr-14 ">
              {data.temp}
              <span className="text-6xl  absolute top-2 right-0 ">°C</span>
              <div className="text-4xl text-center mt-6 m-auto ">
                {data.condition}
              </div>
            </h1>

            <div className="relative">
              <h2 className="">
                <Wind />
                {data.wind}
              </h2>

              <h2>
                <Droplet />
                {`${data.humidity}%`}
              </h2>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex-col mt-20  w-full justify-center items-center gap-2">
            <h1 className="text-2xl font-bold text-center mb-10">
              5 Day Forecast
            </h1>
            <Forecast />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default MainCard;
