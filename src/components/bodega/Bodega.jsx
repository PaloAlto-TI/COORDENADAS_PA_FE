import React, { useEffect, useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import CoordenadaList from "../coordenadaList/CoordenadaList";
import BodegaService from "../../services/bodegas/BodegaService";
import "./Bodega.css";
import Coordenada from "../coordenada/Coordenada";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";

const Bodega = () => {

  //Estados de Bodega y Productos
  const [nombre, setNombre] = useState(null);
  const [productos, setProductos] = useState([]);

  const [bodega, setBodega] = useState({
    id: "",
    codigo: "",
    nombre: "",
    estado: 0,
    dimension: {
      x: 0,
      y: 0,
      z: 0,
    },
    coordenadas: [],
  });

  //Servicio para consumir APi
  const bodegaService = new BodegaService();

  const pasar = (nombre, productos) => {
    console.log("p", productos);
    setProductos(productos);
    setNombre(nombre);
  };

  //Carga de bodega
  useEffect(() => {
    bodegaService.getBodega().then((data) => setBodega(data));
  }, []);

  var names = [];

  //Generación de secciones en tabs
  if (bodega.dimension) {
    names = Array.from({ length: bodega.dimension.z }, (_, i) =>
      String.fromCharCode("A".charCodeAt(0) + i)
    );
  }

  //Generación de coordenadas por seccion
  var namesList = bodega.coordenadas.map(function (coordenada) {
    var aux = names[coordenada.seccion[0].ubicacion.z];

    return (
      <TabPanel key={aux} header={aux}>
        <CoordenadaList cambio={coordenada} pasar={pasar} />
      </TabPanel>
    );
  });



  //Funcion logout
  const salir = () => {
    localStorage.clear();
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    window.location.reload();
  };


  
  return (
    <div className="p-d-flex p-jc-center">
      <div className="tabview-demo">
        <div className="card">
          <br />
          {nombre ? (
            <Button
              icon="pi pi-arrow-left"
              className="p-button-rounded p-button-secondary"
              onClick={() => setNombre(null)}
            />
          ) : (
            <Button
              icon="pi pi-sign-out"
              className="p-button-rounded p-button-secondary"
              onClick={() => salir()}
            />
          )}

          <div className="cualquiera">
          <label>BODEGA:</label>
                <Dropdown placeholder="MARKETING" />

          </div>
          <br />
          <br />

          {!nombre ? (
            <TabView>{namesList}</TabView>
          ) : (
            <Coordenada
              nombre={nombre}
              productos={productos}
              bodega={bodega}
              setBodega={setBodega}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Bodega;
