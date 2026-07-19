import indiaMap from "../assets/maps/india.svg";

function IndiaMap() {
  return (
    <section className="india-map-card">
      <h2>India Weather Map</h2>

      <div className="india-map-container">
        <img
          src={indiaMap}
          alt="India Map"
          className="india-map"
        />
      </div>
    </section>
  );
}

export default IndiaMap;