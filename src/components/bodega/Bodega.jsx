import React, { useEffect, useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import CoordenadaList from "../coordenadaList/CoordenadaList";
import BodegaService from "../../services/bodegas/BodegaService";
import "./Bodega.css";

const Bodega = () => {

  const [state, setState] = useState(null)
  const [bodega, setBodega] = useState({"estado":1,"_id":"6074eda7ea08623eec4f894b","codigo":"123","nombre":"Bodega 1","dimension":{"z":0,"_id":"6074eda7ea08623eec4f894c","x":1,"y":2},"productos":[{"_id":"6074eda7ea08623eec4f894d","producto":"604110eae01a28033c344cca","cantidad":1,"coordenadas":{"z":3,"_id":"6074eda7ea08623eec4f894e","x":1,"y":2},"observacion":"NADA"}],"__version":0})

  const bodegaService = new BodegaService();

  



  const pasar = () => {

    setState(true)
  }

  useEffect(() => {
    bodegaService.getBodega().then((data) => setBodega(data) )
  }, []);



  var names = []


  if (bodega.dimension){
    names = Array.from({ length: bodega.dimension.z }, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i));
  }
  var namesList = names.map(function (name) {
    
    return (

      
      <TabPanel key={name} header={name}>
      <CoordenadaList cambio={name} pasar={pasar} />
    </TabPanel>
     
    );
  });

  return (
    <div className="p-d-flex p-jc-center">
      <div className="tabview-demo">
        <div className="card">
          <h5>Default</h5>
          { !state ?
          <TabView>
            {namesList}
          </TabView> : <p>chao</p>
        }
        </div>
      </div>
    </div>
  );
};

export default Bodega;
