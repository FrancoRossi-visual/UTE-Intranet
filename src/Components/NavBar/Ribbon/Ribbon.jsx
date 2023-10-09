import { useState } from "react";
import "./Ribbon.css";

const gearIcon = (
  <svg
    height="100%"
    viewBox="0 0 153 159"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M151.046 98.6056L137.319 90.7197C138.704 83.2826 138.704 75.6532 137.319 68.2162L151.046 60.3303C152.625 59.4327 153.334 57.5735 152.818 55.8424C149.241 44.4304 143.151 34.1082 135.192 25.5171C133.968 24.2028 131.97 23.8823 130.423 24.7798L116.696 32.6657C110.929 27.729 104.291 23.9143 97.105 21.4139V5.67427C97.105 3.87912 95.8483 2.30836 94.0761 1.92368C82.2504 -0.704939 70.1346 -0.576714 58.8889 1.92368C57.1167 2.30836 55.86 3.87912 55.86 5.67427V21.446C48.7065 23.9784 42.0687 27.7931 36.2686 32.6978L22.574 24.8119C20.995 23.9143 19.0295 24.2028 17.805 25.5492C9.846 34.1082 3.75591 44.4304 0.179197 55.8745C-0.368589 57.6055 0.372533 59.4648 1.95144 60.3624L15.6783 68.2482C14.2927 75.6853 14.2927 83.3147 15.6783 90.7518L1.95144 98.6376C0.372533 99.5352 -0.336366 101.394 0.179197 103.126C3.75591 114.538 9.846 124.86 17.805 133.451C19.0295 134.765 21.0273 135.086 22.574 134.188L36.3008 126.302C42.0687 131.239 48.7066 135.054 55.8922 137.554V153.326C55.8922 155.121 57.1489 156.692 58.9211 157.076C70.7469 159.705 82.8626 159.577 94.1083 157.076C95.8805 156.692 97.1372 155.121 97.1372 153.326V137.554C104.291 135.022 110.929 131.207 116.729 126.302L130.455 134.188C132.034 135.086 134 134.797 135.224 133.451C143.183 124.892 149.274 114.57 152.85 103.126C153.334 101.362 152.625 99.5031 151.046 98.6056ZM76.4825 105.113C62.2723 105.113 50.7044 93.6048 50.7044 79.4679C50.7044 65.3311 62.2723 53.8229 76.4825 53.8229C90.6927 53.8229 102.261 65.3311 102.261 79.4679C102.261 93.6048 90.6927 105.113 76.4825 105.113Z"
      fill="currentColor"
    />
  </svg>
);

const questionIcon = (
  <svg
    height="100%"
    viewBox="0 0 117 171"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M58.6566 0C32.1187 0 14.9301 10.8729 1.43522 30.2639C-1.0128 33.7815 -0.258076 38.6044 3.15678 41.1937L17.4991 52.0686C20.9479 54.6836 25.8549 54.0721 28.5549 50.6895C36.8831 40.2561 43.0608 34.249 56.0696 34.249C66.2978 34.249 78.9492 40.8316 78.9492 50.75C78.9492 58.248 72.7595 62.0988 62.6602 67.7608C50.883 74.3638 35.2978 82.5812 35.2978 103.138V106.392C35.2978 110.799 38.8703 114.372 43.2772 114.372H67.3721C71.779 114.372 75.3515 110.799 75.3515 106.392V104.473C75.3515 90.2228 117 89.6294 117 51.0682C117 22.0285 86.8774 0 58.6566 0ZM55.3248 124.166C42.6256 124.166 32.2939 134.498 32.2939 147.197C32.2939 159.896 42.6256 170.227 55.3248 170.227C68.0241 170.227 78.3557 159.896 78.3557 147.196C78.3557 134.497 68.0241 124.166 55.3248 124.166Z"
      fill="#3F3F3F"
    />
  </svg>
);

export default function Ribbon() {
  const [ribbonTab, setRibbonTab] = useState("NAVEGAR");
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="ribbon">
        <ul>
          <li
            className={ribbonTab === "NAVEGAR" ? "ribbonSelected" : null}
            onClick={() => setRibbonTab("NAVEGAR")}
          >
            NAVEGAR
          </li>
          <li
            className={ribbonTab === "PAGINA" ? "ribbonSelected" : null}
            onClick={() => setRibbonTab("PAGINA")}
          >
            PÁGINA
          </li>
          <li
            className={ribbonTab === "PUBLICAR" ? "ribbonSelected" : null}
            onClick={() => setRibbonTab("PUBLICAR")}
          >
            PUBLICAR
          </li>
        </ul>

        <ul>
          <li id="ribbonSettings" className={isOpen ? "ribbonSelected" : null}>
            <span onClick={handleToggle}> {gearIcon}</span>
            {isOpen && <RibbonSettingsDropdown onClose={handleToggle} />}
          </li>
          <li>{questionIcon}</li>
        </ul>
      </div>

      <DropdownRibbon tab={ribbonTab} />
    </>
  );
}

function RibbonSettingsDropdown({ onClose }) {
  return (
    <>
      <ul id="ribbonSettingsDropdown">
        <li>Ocultar cinta</li>
        <li>Compartido con...</li>
        <hr />
        <li>Editar página</li>
        <li>Agregar una página</li>
        <li>Agregar una aplicación</li>
        <li>Contenidos del sito</li>
        <hr />
        <li>Administrador del sitio</li>
        <li>Configuración del sitio</li>
      </ul>
      <div id="ribbonModalOff" onClick={onClose}></div>
    </>
  );
}

function DropdownRibbon({ tab }) {
  return <span>{tab}</span>;
}
