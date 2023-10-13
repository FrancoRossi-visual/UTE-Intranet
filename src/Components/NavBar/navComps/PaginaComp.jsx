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
                src="src\assets\navIcons\editar.svg"
                alt="ícono de editar"
              />
              <span>Editar</span>
              <img
                className="icn-small"
                src="src\assets\dropArrow.svg"
                alt="flecha descendente"
              />
            </li>
            <li className="pagina-item">
              <img
                className="img-small"
                src="src\assets\navIcons\nuevo.svg"
                alt="ícono de nuevo"
              />
              <span>Nuevo</span>
            </li>
            <li className="pagina-item">
              <img
                className="img-small"
                src="src\assets\navIcons\desproteger.svg"
                alt="ícono de desproteger"
              />
              <span>Desproteger</span>
              <img
                className="icn-small"
                src="src\assets\dropArrow.svg"
                alt="flecha descendente"
              />
            </li>
          </ul>
          <span>Editar</span>
        </div>

        <div className="pagina-section">
          <ul>
            <li className="pagina-item">
              <img
                src="src\assets\navIcons\editarPopiedades.svg"
                alt="ícono de propiedades"
              />
              <span>Editar propiedades</span>
              <img
                className="icn-small"
                src="src\assets\dropArrow.svg"
                alt="flecha descendente"
              />
            </li>
            <li className="inactive pagina-item">
              <img
                src="src\assets\navIcons\direccionesURL.svg"
                alt="ícono de dirección URL"
              />
              <span>Direcciones URL de página</span>
            </li>
            <ul className="nested-list">
              <li>
                <img src="src\assets\navIcons\historial.svg" />
                Historial de la página
              </li>
              <li>
                <img src="src\assets\navIcons\permisos.svg" /> Permisos de
                páginas
              </li>
              <li>
                <img src="src\assets\navIcons\eliminar.svg" /> Eliminar página
              </li>
            </ul>
          </ul>
          <span>Administrar</span>
        </div>

        <div className="pagina-section">
          <ul>
            <li className="pagina-item">
              <img
                className="img-small"
                src="src\assets\navIcons\correo.svg"
                alt="ícono de editar"
              />
              <span>Enviar un vínculo por correo eletrónico</span>
            </li>
            <li className="pagina-item">
              <img
                className="img-small"
                src="src\assets\navIcons\alerta.svg"
                alt="ícono de nuevo"
              />
              <span>Enviarme alertas</span>
              <img
                className="icn-small"
                src="src\assets\dropArrow.svg"
                alt="flecha descendente"
              />
            </li>
            <li className="pagina-item">
              <img
                className="img-small"
                src="src\assets\navIcons\tendencias.svg"
                alt="ícono de desproteger"
              />
              <span>Tendencias de popularidad</span>
            </li>
          </ul>
          <span>Compartir y realizar seguimiento</span>
        </div>

        <div className="pagina-section">
          <ul>
            <li className="pagina-item">
              <img
                className="img-small"
                src="src\assets\navIcons\vistaPrevia.svg"
                alt="ícono de editar"
              />
              <span>Vista previa</span>
            </li>
            <li className="inactive pagina-item">
              <img
                className="img-small"
                src="src\assets\navIcons\diseñoPagina.svg"
                alt="ícono de nuevo"
              />
              <span>Diseño de página</span>
            </li>
            <ul className="nested-list">
              <li>
                <img src="src\assets\navIcons\establecerPincipal.svg" />
                Establecer como página principal
              </li>
              <li>
                <img src="src\assets\navIcons\vinculosEntrantes.svg" /> Vínculos
                entrantes
              </li>
              <li>
                <img src="src\assets\navIcons\comprobacionBorradores.svg" />{" "}
                Comprobación de borradores
              </li>
            </ul>
          </ul>
          <span>Acciones de la página</span>
        </div>

        <div className="pagina-section">
          <ul>
            <li className="pagina-item">
              <img
                className="img-small"
                src="src\assets\navIcons\configuracionBibloteca.svg"
                alt="ícono Configuración de bibloteca"
              />
              <span>Configuración de bibloteca</span>
            </li>
            <li className="pagina-item">
              <img
                className="img-small"
                src="src\assets\navIcons\permisosBibloteca.svg"
                alt="ícono de permisos de bibloteca"
              />
              <span>Permisos de bibloteca</span>
            </li>
            <li className="pagina-item">
              <img
                className="img-small"
                src="src\assets\navIcons\todasPaginas.svg"
                alt="ícono de desproteger"
              />
              <span>Ver todas las páginas</span>
            </li>
          </ul>
          <span>Bibloteca de páginas</span>
        </div>

        <div className="pagina-section">
          <ul>
            <li className="pagina-item">
              <img
                className="img-small"
                src="src\assets\navIcons\etiquetas.svg"
                alt="ícono de editar"
              />
              <span>Etiquetas y notas</span>
            </li>
          </ul>
          <span>Etiquetas y notas</span>
        </div>
      </div>
    </>
  );
}
