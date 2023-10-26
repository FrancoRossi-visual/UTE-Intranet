import "../NavBar.css";

const ribbonModalOff = {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  zIndex: "9000",
  right: "0",
  top: "0",
  overflow: "hidden",
};

export default function RibbonSettingsDropdown({ onClose, id, children }) {
  return (
    <>
      <ul id={id}>{children}</ul>
      <div style={ribbonModalOff} onClick={onClose}></div>
    </>
  );
}
