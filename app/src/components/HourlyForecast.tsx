function HourlyForecast() {
    const hourlyData = [
        { time: "Now", icon: "🌤️", temp: "31°", active: true },

        { time: "5 PM", icon: "🌤️", temp: "30°" },
      
        { time: "6 PM", icon: "☁️", temp: "29°" },
      
        { time: "7 PM", icon: "🌧️", temp: "28°" },
      
        { time: "8 PM", icon: "🌧️", temp: "27°" },
      
        { time: "9 PM", icon: "🌙", temp: "26°" },
      
        { time: "10 PM", icon: "🌙", temp: "25°" },
      
        { time: "11 PM", icon: "🌙", temp: "24°" },
      
        { time: "12 AM", icon: "🌙", temp: "23°" },
      
        { time: "1 AM", icon: "🌙", temp: "22°" },
      
        { time: "2 AM", icon: "🌙", temp: "22°" },
      
        { time: "3 AM", icon: "🌙", temp: "21°" },
    ];
  
    return (
      <section className="hourly-card">
        <h2>Hourly Forecast</h2>
  
        <div className="hourly-scroll">
          {hourlyData.map((hour) => (
            <div 
            className={`hour-item ${hour.active ? "active-hour" : ""}`}
            key={hour.time}
          >
              <p>{hour.time}</p>
              <span>{hour.icon}</span>
              <strong>{hour.temp}</strong>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default HourlyForecast;