import { useEffect, useState } from "react";
import AdminBar from "../AdminBar";
import PageButtons from "../PageButtons";
import Solicitudes from "./components/Solicitudes";

function DesarrolloDeCursos({ usuario }) {
  const [groupsDelUsuario, setGruposDelUsuario] = useState({
    gerencial: false,
    tecnica: false,
    administrativa: false,
    liderazgo: false,
    jefeDesarrollo: false,
    admin1: false,
    admin2: false,
    admin3: false,
  });

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
    let gruposDeUsuario = {};
    console.log("inside effect", gruposDeUsuario);
    async function fetchPersonas() {
      fetch("src/Components/pages/DesarrolloDeCursos/personas.json")
        .then((res) => res.json())
        .then(
          (res) => (
            res.gerencial.map(
              (el) => el === usuarioStr && (gruposDeUsuario.gerencial = true)
            ),
            res.tecnica.map(
              (el) => el === usuarioStr && (gruposDeUsuario.tecnica = true)
            ),
            res.administrativa.map(
              (el) =>
                el === usuarioStr && (gruposDeUsuario.administrativa = true)
            ),
            res.liderazgo.map(
              (el) => el === usuarioStr && (gruposDeUsuario.liderazgo = true)
            ),
            res.jefeDesarrollo.map(
              (el) =>
                el === usuarioStr && (gruposDeUsuario.jefeDesarrollo = true)
            ),
            res.tecnicosDesarrollo.admin1.map(
              (el) => el === usuarioStr && (gruposDeUsuario.admin1 = true)
            ),
            res.tecnicosDesarrollo.admin2.map(
              (el) => el === usuarioStr && (gruposDeUsuario.admin2 = true)
            ),
            res.tecnicosDesarrollo.admin3.map(
              (el) => el === usuarioStr && (gruposDeUsuario.admin3 = true)
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
        {!groupsDelUsuario.gerencial && <h1>{title}</h1>}
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
