import { useState } from "react";
import Ribbon from "./Ribbon/Ribbon";
import NavegarComp from "./Ribbon/NavegarComp";
import "./NavBar.css";

export default function NavBar({ usuario, currentSite }) {
  const [ribbonTab, setRibbonTab] = useState("NAVEGAR");
  return (
    <>
      <Ribbon setRibbonTab={setRibbonTab} ribbonTab={ribbonTab}>
        {ribbonTab === "NAVEGAR" && (
          <NavegarComp currentSite={currentSite} usuario={usuario} />
        )}
        <span>{ribbonTab}</span>
      </Ribbon>
      <LocalNavigation />
    </>
  );
}

function LocalNavigation() {}

// todo: install font awesme and replace icons
