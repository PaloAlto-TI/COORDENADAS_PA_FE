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

  function goHome() {
    // alert("Redirect to Home");
    document.location.href="/";
  }
  
  function reloadPage() {
    document.location.reload();
  }
  const pasar = (nombre, productos) => {

    console.log('piiii',productos);
    setProductos(productos)
    setNombre(nombre)
    setState(true)
  }

  useEffect(() => {
    bodegaService.getBodega().then((data) => setBodega(data) )
  }, []);

  var names = []


  if (bodega.dimension){
    console.log('entra  a bodega dimension')
    console.log(bodega.dimension)
    names = Array.from({ length: bodega.dimension.z }, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i));
  }

  // console.log('los names: ' + names)
  // console.log('EL LENGTH: ' + bodega.coordenadas.length)

  var namesList = bodega.coordenadas.map(function (coordenada) {
    
    console.log(coordenada)
    var aux = names[coordenada.seccion[0].ubicacion.z] //Devuelve la coordenada z y como no existe el indice de esa coordenada da el error -- Es a nivel de BD

    
    console.log('el aux: ' + aux)

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
        <Button className="test" icon="pi pi-arrow-left" className="p-button-rounded p-button-secondary" onClick={()=>setNombre(null)} />
        <Button icon="pi pi-home" className="p-button-rounded p-button-secondary" onClick={()=>goHome()} />
        <Button icon="pi pi-refresh" className="p-button-rounded p-button-secondary" onClick={()=>reloadPage()} />
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
