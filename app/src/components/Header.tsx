interface HeaderProps {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

function Header({  searchText,
  setSearchText,
  setCity, }: HeaderProps) {
  return (
    <header className="header">
      <div className="logo">  
        🌦️ <span>WeatherVerse</span>
      </div>

      <input
        type="text"
        placeholder="Search city or state..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setCity(searchText.trim());
          }
        }}
      />

      <div className="actions">
        <button>🌙</button>
        <button>⚙️</button>
      </div>
    </header>
  );
}

export default Header;