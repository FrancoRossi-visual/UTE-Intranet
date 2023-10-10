import { useState } from "react";
import RibbonSettingsDropdown from "./RibbonSettingsDropdown";
import "./ribbonDropdown.css";
import "./Ribbon.css";

const dropArrow = (
  <svg
    height=".3rem"
    viewBox="0 0 7 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3.5 4L0.468911 0.25L6.53109 0.25L3.5 4Z" fill="#7A7A7A" />
  </svg>
);

export default function NavegarComp({ currentSite, usuario }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="lowerNavBar">
      <div>
        <img className="logo" src="src\assets\ute-logo.svg" alt="logo de UTE" />
        <h1>{currentSite}</h1>
      </div>

      <ul>
        <li>
          <img src="src\assets\navIcons\icnLaEmpresa.svg" alt="" />
        </li>
        <li>
          <img src="src\assets\navIcons\icnUTEenInternet.svg" alt="" />
        </li>
        <li>
          <img src="src\assets\navIcons\icnMapa.svg" alt="" />
        </li>
        <li>
          <span onClick={handleToggle}>
            {usuario} <span>{dropArrow}</span>
          </span>
          {isOpen && (
            <RibbonSettingsDropdown
              onClose={handleToggle}
              id={"lowerNavBarDropdown"}
            >
              <li>Acerca de mi</li>
              <li>Cerrar sesión</li>
              <hr />
              <li>Personalizar esta página</li>
            </RibbonSettingsDropdown>
          )}
        </li>
      </ul>
    </div>
  );
}
