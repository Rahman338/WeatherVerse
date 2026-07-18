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

        <WeatherCard />

        <HourlyForecast />

        <WeeklyForecast />

        <IndiaMap />

      </main>

      <Footer />

    </>
  );
}

export default App;