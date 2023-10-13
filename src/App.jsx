import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import SideNavBar from "./Components/NavBar/navComps/SideNavBar";

const usuario = "Rossi Vazquez, Franco";

function App() {
  const [currentPage, setCurrentPage] = useState("Desarrollo de cursos");
  // derivar el estado del sitio segun la página actual / url
  const currentSite = "Desarrollo de cursos";

  return (
    <>
      <NavBar usuario={usuario} currentSite={currentSite} />
      <div id="main">
        <SideNavBar usuario={usuario} currentSite={currentSite} />
        <PageContent />
      </div>
    </>
  );
}

function PageContent() {}
export default App;
