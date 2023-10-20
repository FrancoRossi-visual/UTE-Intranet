import { useState } from "react";
import "./NavBar.css";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="search-bar">
      <input
        type="text"
        name=""
        id=""
        placeholder="Buscar este sitio..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button id="icn-drop">
        <img src="src\assets\dropArrow.svg" alt="droparrow" />
      </button>
      <button id="icn-src">
        <img
          src="src\assets\navIcons\side\sideSearch.svg"
          alt="search button"
        />
      </button>
    </div>
  );
}
