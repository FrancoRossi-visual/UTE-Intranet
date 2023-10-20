import "../NavBar.css";

export default function SideNavBar({ currentSite }) {
  return (
    <div className="side-nav-bar">
      <ul className="side-nav-bar-options">
        <li>SG Formación</li>
        {/* {<li>Interno SG Formación</li>} */}
        <li
          className={
            currentSite === "Desarrollo de cursos" ? "current-page" : ""
          }
        >
          Ingreso de compras
        </li>
        <li>Centros de capacitación</li>
        <li>Topes de compra</li>
        <li>Instructores</li>
        <li>Inducción</li>
        {/* {usuario} */}
      </ul>
      <ul className="side-nav-bar-side-options">
        <li>
          <img src="src\assets\navIcons\side\sideSearch.svg" />
          Búsqueda avanzada
        </li>
        <li>
          <img src="src\assets\navIcons\side\sideContent.svg" /> Contenidos del
          sitio
        </li>
        <li>
          <img src="src\assets\navIcons\side\sidebin.svg" /> Papelera de
          Reciclaje
        </li>
      </ul>
    </div>
  );
}
