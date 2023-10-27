import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import SideNavBar from "./Components/NavBar/navComps/SideNavBar";
import Breadcrumb from "./Components/NavBar/Breadcrumb";
import SearchBar from "./Components/NavBar/SearchBar";
import DesarrolloDeCursos from "./Components/pages/DesarrolloDeCursos/DesarrolloDeCursos";

function App() {
  const [currentPage, setCurrentPage] = useState("Desarrollo de cursos");
  const [usuario, setUsuario] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // derivar el estado del sitio segun la página actual / url

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(`src/mockData/user.json`);
        const userData = await response.json();
        setUsuario(userData.user);
        setIsLoading(false);
      } catch (error) {
        console.log(error, "there was an error");
      }
    }
    fetchUser();
  }, [setUsuario]);

  const currentSite = "Desarrollo de cursos";

  return (
    <>
      {isLoading ? (
        <h2>loading</h2>
      ) : (
        <>
          <NavBar
            usuario={`${usuario.name}, ${usuario.lastName}`}
            currentSite={currentSite}
          />
          <div id="main">
            <SideNavBar currentSite={currentSite} />
            <div id="page">
              <div id="breadcrumb-search">
                <Breadcrumb />
                <SearchBar />
              </div>
              <PageContent>
                {currentPage === "Desarrollo de cursos" && (
                  <DesarrolloDeCursos usuario={usuario} />
                )}
              </PageContent>
            </div>
          </div>
        </>
      )}
    </>
  );
}

function PageContent({ children }) {
  return <div id="page-content">{children}</div>;
}

export default App;
