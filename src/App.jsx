import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";

const usuario = "Rossi Vazquez, Franco";

function App() {
  const [currentSite, setCurrentSite] = useState("Desarrollo de cursos");
  return (
    <>
      <NavBar usuario={usuario} currentSite={currentSite} />
    </>
  );
}

export default App;
