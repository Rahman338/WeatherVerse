import "./App.css";

import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import HourlyForecast from "./components/HourlyForecast";
import WeeklyForecast from "./components/WeeklyForecast";
import IndiaMap from "./components/IndiaMap";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main>

        <div className="dashboard">

          <WeatherCard />

          <HourlyForecast />

          <WeeklyForecast />

          <IndiaMap />

</div>

      </main>

      <Footer />

    </>
  );
}

export default App;