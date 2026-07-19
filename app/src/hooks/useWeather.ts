import { useEffect, useState } from "react";
import { getCurrentWeather } from "../services/weatherApi";
import type { WeatherData } from "../types/weather";
export function useWeather(city: string) {
  

const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);


        const data = await getCurrentWeather(city);

        setWeather(data);
        setError("");
      } catch (err) {
        setError("Unable to fetch weather data.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return {
    weather,
    loading,
    error,
  };
}