import React, { useEffect, useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import CoordenadaList from "../coordenadaList/CoordenadaList";
import BodegaService from "../../services/bodegas/BodegaService";
import "./Bodega.css";
import ProductList from "../productList/ProductList";

const Bodega = () => {

  const [state, setState] = useState(null)
  const [bodega, setBodega] = useState({
    id:"",
    codigo:"",
    nombre:"",
    estado:0,
    dimension:{
      x:0,
      y:0,
      z:0
    },
    coordenadas:[]
  })

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
          </TabView>:<ProductList/> 
        }
        </div>
      </div>
    </div>
  );
};

export default Bodega;
