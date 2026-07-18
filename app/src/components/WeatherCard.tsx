function WeatherCard() {
    return (
      <section className="weather-card">
  
        <div className="weather-top">
  
          <div className="weather-icon">
            🌤️
          </div>
  
          <div>
  
            <h1>31°C</h1>
  
            <h3>Partly Cloudy</h3>
  
            <p>📍 New Delhi, India</p>
  
          </div>
  
        </div>
  
        <div className="weather-details">
  
          <div className="detail">
            <span>💧 Humidity</span>
            <strong>68%</strong>
          </div>
  
          <div className="detail">
            <span>🌬 Wind</span>
            <strong>12 km/h</strong>
          </div>
  
          <div className="detail">
            <span>🌡 Feels Like</span>
            <strong>34°C</strong>
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