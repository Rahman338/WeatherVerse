import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import HourlyForecast from "./components/HourlyForecast";
import WeeklyForecast from "./components/WeeklyForecast";
import IndiaMap from "./components/IndiaMap";
import Footer from "./components/Footer";

function App() {
  const [city, setCity] = useState("Delhi");
  const [searchText, setSearchText] = useState("Delhi");
  return (
    <>
      <Header  searchText={searchText}
  setSearchText={setSearchText}
  setCity={setCity} />

      <main>

        <div className="dashboard">

        <WeatherCard city={city} />

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