import { useState } from "react";
import "../NavBar.css";

export default function LocalNavigation() {
  const [desarrolloIsOpen, setDesarrolloIsOpen] = useState(false);
  const [desarrolloOpenSubTab, setDesarrolloOpenSubTab] = useState("none");

  const dropArrow = (
    <img
      className="icn-small"
      src="src\assets\dropArrow.svg"
      alt="flecha descendente"
    />
  );

  const dropArrowHor = (
    <img
      className="icn-small ver-arrow"
      src="src\assets\dropArrow.svg"
      alt="flecha descendente"
    />
  );

  return (
    <div className="local-nav-container">
      <ul className="local-nav">
        <li>Gestión Humana</li>
        <li
          className="active"
          onMouseEnter={() => setDesarrolloIsOpen(true)}
          onMouseLeave={() => setDesarrolloIsOpen(false)}
        >
          G.S Desarrollo de Personas {dropArrow}
          {desarrolloIsOpen && (
            <ul
              className="local-nav vertical"
              id="menu-gs-desarollo-de-personas"
            >
              <li
                onMouseEnter={() => setDesarrolloOpenSubTab("menu-formación")}
                onMouseLeave={() => setDesarrolloOpenSubTab("none")}
              >
                Formacion {dropArrowHor}
                {desarrolloOpenSubTab === "menu-formación" && (
                  <ul className="local-nav vertical" id="menu-formacion">
                    <li>Educación Corporativa</li>
                    <li>Listas de cursos</li>
                    <li>Material inducción</li>
                    <li>Buenas prácticas</li>
                    <li>Sitio interno</li>
                  </ul>
                )}
              </li>

              <li>Gestión de Desempeño</li>
              <li
                onMouseEnter={() =>
                  setDesarrolloOpenSubTab("menu-seleccion-y-promocion")
                }
                onMouseLeave={() => setDesarrolloOpenSubTab("none")}
              >
                Selección y Promoción {dropArrowHor}
                {desarrolloOpenSubTab === "menu-seleccion-y-promocion" && (
                  <ul
                    className="local-nav vertical"
                    id="menu-seleccion-y-promocion"
                  >
                    <li>Asignaciones de concursos</li>
                    <li>Normativa de Promociones</li>
                    <li>Solicitud de cobertura interna</li>
                    <li>Prueba de conocimientos</li>
                  </ul>
                )}
              </li>

              <li
                onMouseEnter={() =>
                  setDesarrolloOpenSubTab("menu-relaciones-internas")
                }
                onMouseLeave={() => setDesarrolloOpenSubTab("none")}
              >
                Relaciones Internas {dropArrowHor}
                {desarrolloOpenSubTab === "menu-relaciones-internas" && (
                  <ul
                    className="local-nav vertical"
                    id="menu-relaciones-internas"
                  >
                    <li>Revista SOMOS</li>
                    <li>Muestra Artística</li>
                    <li>Concurso 110 años de UTE</li>
                    <li>Participaciones a concurso</li>
                    <li>Encuetas</li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
        <li>G.S Gestión de Plantilla</li>
        <li>G.S Salud y Bienestar Integral</li>
      </ul>
    </div>
  );
}
