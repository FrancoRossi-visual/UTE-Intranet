import "./NavBar.css";

export default function Breadcrumb() {
  return (
    <ul className="bread-crumb">
      <li>
        <a href="#">Gestión Humana</a> <span>&gt;</span>
      </li>
      <li>
        <a href="#">G.S Desarrollo de Personas</a> <span>&gt;</span>
      </li>
      <li>
        <a href="#">Formación</a> <span>&gt;</span>
      </li>
      <li>
        <a href="#">Sitio interno de formación</a> <span>&gt;</span>
      </li>
      <li>Desarrollo de cursos</li>
    </ul>
  );
}
