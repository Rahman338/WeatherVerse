function Header() {
    return (
      <header className="header">
  
        <div className="logo">
          🌦️ <span>WeatherVerse</span>
        </div>
  
        <input
          type="text"
          placeholder="Search city or state..."
        />
  
        <div className="actions">
  
          <button>🌙</button>
  
          <button>⚙️</button>
  
        </div>
  
      </header>
    );
  }
  
  export default Header;