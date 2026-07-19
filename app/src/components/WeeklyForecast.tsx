function WeeklyForecast() {
  const weeklyData = [
    { day: "Monday", icon: "🌤️", high: "31°", low: "24°" },
    { day: "Tuesday", icon: "🌧️", high: "29°", low: "22°" },
    { day: "Wednesday", icon: "☀️", high: "33°", low: "25°" },
    { day: "Thursday", icon: "🌦️", high: "30°", low: "23°" },
    { day: "Friday", icon: "⛅", high: "31°", low: "24°" },
    { day: "Saturday", icon: "🌩️", high: "28°", low: "21°" },
    { day: "Sunday", icon: "☀️", high: "34°", low: "25°" },
  ];

  return (
    <section className="weekly-card">
      <h2>7-Day Forecast</h2>

      <div className="weekly-list">
        {weeklyData.map((day) => (
          <div className="weekly-item" key={day.day}>
            <span className="weekly-day">{day.day}</span>

            <span className="weekly-icon">
              {day.icon}
            </span>

            <span className="weekly-temp">
              {day.high} / {day.low}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WeeklyForecast;