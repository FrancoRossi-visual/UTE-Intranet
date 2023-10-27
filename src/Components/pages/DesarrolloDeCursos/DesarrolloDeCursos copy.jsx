import { useEffect, useState } from "react";
import AdminBar from "../AdminBar";
import PageButtons from "../PageButtons";
import Solicitudes from "./components/Solicitudes";

function DesarrolloDeCursos({ usuario }) {
  const [groupsDelUsuario, setGruposDelUsuario] = useState([]);

  // hacer con un objeto desestructurado

  const title = "Desarrollo de Cursos";
  const usuarioStr = `${usuario.lastName}, ${usuario.name}`;

  // usuario
  const permisos = usuario.groups.DesarrolloDeCursos.level;

  // información
  const solicitudes = null;

  // console.log(typeof groups, groups);

  // effects
  useEffect(() => {
    let gruposDeUsuario = [];

    async function fetchPersonas() {
      fetch("src/Components/pages/DesarrolloDeCursos/personas.json")
        .then((res) => res.json())
        .then(
          (res) => (
            console.log(res),
            res.gerencial.map(
              (el) => el === usuarioStr && gruposDeUsuario.push("gerencial")
            ),
            res.tecnica.map(
              (el) => el === usuarioStr && gruposDeUsuario.push("tecnica")
            ),
            res.administrativa.map(
              (el) =>
                el === usuarioStr && gruposDeUsuario.push("administrativa")
            ),
            res.liderazgo.map(
              (el) => el === usuarioStr && gruposDeUsuario.push("liderazgo")
            ),
            res.jefeDesarrollo.map(
              (el) =>
                el === usuarioStr && gruposDeUsuario.push("jefeDesarrollo")
            ),
            res.tecnicosDesarrollo.admin1.map(
              (el) => el === usuarioStr && gruposDeUsuario.push("admin1")
            ),
            res.tecnicosDesarrollo.admin2.map(
              (el) => el === usuarioStr && gruposDeUsuario.push("admin2")
            ),
            res.tecnicosDesarrollo.admin3.map(
              (el) => el === usuarioStr && gruposDeUsuario.push("admin3")
            )
          )
        );
      setGruposDelUsuario(gruposDeUsuario);
    }
    fetchPersonas();
  }, [usuarioStr]);

  return (
    <>
      <main id="pageMain">
        <h1>{title}</h1>
        <PageButtons>
          <ul>
            <li id="compraCursos" className="btn btn-nrnj">
              Compra de cursos
            </li>
            <li id="compraMaterialers" className="btn btn-nrnj">
              Compra de materiales
            </li>
            <li id="solicitudDeAlmuerzos" className="btn btn-nrnj">
              Solicitud de almuerzos
            </li>
            <li id="hojaDeServicio" className="btn btn-nrnj">
              Hoja de servicio
            </li>
            <li id="entradaDeMercancia" className="btn btn-nrnj">
              Entrada de mercancía
            </li>
          </ul>
          <ul>
            <li id="topes" className="btn">
              Topes de compra
            </li>
            <li id="comprasCentros" className="btn">
              Centros de Capacitación
            </li>
            <li id="normativa" className="btn desactivado">
              Normativa
            </li>
            <li id="infoGral" className="btn desactivado">
              Información general
            </li>
          </ul>
        </PageButtons>
        <Solicitudes solicitudes={solicitudes} />
      </main>
      <AdminBar>
        <div>
          <button>Todos Los elementos</button>
          <button>Almuerzos</button>
        </div>
      </AdminBar>
    </>
  );
}

export default DesarrolloDeCursos;
