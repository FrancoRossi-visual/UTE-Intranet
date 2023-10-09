import Ribbon from "./Ribbon/Ribbon";
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <Ribbon />
      <Navigation />
      <LocalNavigation />
    </>
  );
}

function Navigation() {}

function LocalNavigation() {}

// todo: install font awesme and replace icons
