import "./ribbonDropdown.css";

export default function NavegarComp({ currentSite, usuario }) {
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
          {usuario} <span>⬇️</span>
        </li>
      </ul>
    </div>
  );
}
