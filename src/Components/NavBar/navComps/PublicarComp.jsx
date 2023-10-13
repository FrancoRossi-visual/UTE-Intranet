import "./ribbonDropdown.css";

export default function PaginaComp() {
  return (
    <>
      <div className="pagina">
        <div className="pagina-section">
          <ul>
            <li className="pagina-item">
              <img
                className="img-small"
                src="src\assets\navIcons\cancelarPublicación.svg"
                alt="ícono de cancelar la publicación"
              />
              <span>Cancelar la publicación</span>
            </li>
          </ul>
          <span>Publicación</span>
        </div>
      </div>
    </>
  );
}
