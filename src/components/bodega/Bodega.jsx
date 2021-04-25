import React, { useEffect, useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import CoordenadaList from "../coordenadaList/CoordenadaList";
import BodegaService from "../../services/bodegas/BodegaService";
import "./Bodega.css";
import ProductList from "../productList/ProductList";
import Coordenada from "../coordenada/Coordenada";
import { Button } from 'primereact/button'; 
const Bodega = () => {

  const [state, setState] = useState(null)
  const [nombre, setNombre] = useState(null)
  const [productos, setProductos] = useState([])


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

  



  const pasar = (nombre, productos) => {

    console.log('p',productos);
    setProductos(productos)
    setNombre(nombre)
    setState(true)
  }

  useEffect(() => {
    bodegaService.getBodega().then((data) => setBodega(data) )
  }, []);



  var names = []


  if (bodega.dimension){
    names = Array.from({ length: bodega.dimension.z }, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i));
  }


  var namesList = bodega.coordenadas.map(function (coordenada) {
    
    var aux = names[coordenada.seccion[0].ubicacion.z]
    
    return (

      
      <TabPanel key={aux} header={aux}>
      <CoordenadaList cambio={coordenada} pasar={pasar} />
      </TabPanel>
     
    );
  });

  // var namesList = names.map(function (name) {
        
  //   return (

      
  //     <TabPanel key={name} header={name}>
  //     <CoordenadaList cambio={name} pasar={pasar} />
  //     </TabPanel>
     
  //   );
  // });

  return (
    <div className="p-d-flex p-jc-center">
      <div className="tabview-demo">
        <div className="card">
         <br/>
        <Button className="test" icon="pi pi-arrow-left" className="p-button-rounded p-button-secondary" onClick={()=>setNombre(null)} />
         <br/>
         <br/>


          { !nombre?
          
          <TabView>
            {namesList}
          </TabView>:<Coordenada nombre={nombre} productos={productos}/> 
        }
        </div>
      </div>
    </div>
  );
};

export default Bodega;
