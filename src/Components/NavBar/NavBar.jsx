import { useState } from "react";
import Ribbon from "./navComps/Ribbon";
import NavegarComp from "./navComps/NavegarComp";
import PaginaComp from "./navComps/PaginaComp";
import PublicarComp from "./navComps/PublicarComp";
import SiteNavigation from "./navComps/SiteNavigation";
import "./NavBar.css";

export default function NavBar({ usuario, currentSite }) {
  const [ribbonTab, setRibbonTab] = useState("NAVEGAR");
  return (
    <>
      <Ribbon setRibbonTab={setRibbonTab} ribbonTab={ribbonTab}>
        {ribbonTab === "NAVEGAR" && (
          <NavegarComp currentSite={currentSite} usuario={usuario} />
        )}
        {ribbonTab === "PAGINA" && <PaginaComp />}
        {ribbonTab === "PUBLICAR" && <PublicarComp />}
      </Ribbon>
      <SiteNavigation />
    </>
  );
}
