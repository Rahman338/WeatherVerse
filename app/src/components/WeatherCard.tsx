
import { useWeather } from "../hooks/useWeather";
interface WeatherCardProps {
  city: string;
}

function WeatherCard({ city }: WeatherCardProps) {
  const { weather, loading, error } = useWeather(city);
  if (loading) {
    return <section className="weather-card">Loading weather...</section>;
  }
  
  if (error) {
    return <section className="weather-card">{error}</section>;
  }
  
  if (!weather) {
    return null;
  }
    return (
      <section className="weather-card">
  
        <div className="weather-top">
  
          <div className="weather-icon">
            🌤️
          </div>
  
          <div>
  
          <h1>{Math.round(weather.main.temp)}°C</h1>
  
          <h3>{weather.weather[0].main}</h3>
  
          <p>📍 {weather.name}</p>
  
          </div>
  
        </div>
  
        <div className="weather-details">
  
          <div className="detail">
            <span>💧 Humidity</span>
            <strong>{weather.main.humidity}%</strong>
          </div>
  
          <div className="detail">
            <span>🌬 Wind</span>
            <strong>{weather.wind.speed} km/h</strong>
          </div>
  
          <div className="detail">
            <span>🌡 Feels Like</span>
            <strong>{Math.round(weather.main.feels_like)}°C</strong>
          </div>
  
        </div>
  
        <div className="sun-times">
  
          <div>☀️ Sunrise 5:42 AM</div>
  
          <div>🌇 Sunset 7:18 PM</div>
  
        </div>
  
      </section>
    );
  }
  
  export default WeatherCard;