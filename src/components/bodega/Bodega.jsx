import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import CoordenadaList from "../coordenadaList/CoordenadaList";
import "./Bodega.css";

const Bodega = () => {
  const [state, setState] = useState(null);

  return (
    <div className="p-d-flex p-jc-center">
      <div className="tabview-demo">
        <div className="card">
          <h5>Default</h5>
          <TabView>
            <TabPanel header="A">
              <CoordenadaList cambio={1} />
            </TabPanel>
            <TabPanel header="B">
              <CoordenadaList cambio={2} />
            </TabPanel>
            <TabPanel header="C">
              <CoordenadaList cambio={3} />
            </TabPanel>
            <TabPanel header="D">
              <CoordenadaList cambio={4} />
            </TabPanel>
            <TabPanel header="E">
              <CoordenadaList cambio={5} />
            </TabPanel>
            <TabPanel header="F">
              <CoordenadaList cambio={6} />
            </TabPanel>
          </TabView>
        </div>
      </div>
    </div>
  );
};

export default Bodega;
