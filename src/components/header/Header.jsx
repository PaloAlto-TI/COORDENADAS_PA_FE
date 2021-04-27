import React from "react";
import { Sidebar } from "primereact/sidebar";
import "./Header.css";


//PRUEBAS (NO USADO)
const Header = () => {
  const [visibleRight, setVisibleRight] = useState(false);
  return (
    <Sidebar
      visible={visibleRight}
      position="right"
      baseZIndex={1000000}
      onHide={() => setVisibleRight(false)}
    >
      <h1 style={{ fontWeight: "normal" }}>Right Sidebar</h1>
      <Button
        type="button"
        onClick={() => setVisibleRight(false)}
        label="Save"
        className="p-button-success"
        style={{ marginRight: ".25em" }}
      />
      <Button
        type="button"
        onClick={() => setVisibleRight(false)}
        label="Cancel"
        className="p-button-secondary"
      />
    </Sidebar>
  );
};

export default Header;
