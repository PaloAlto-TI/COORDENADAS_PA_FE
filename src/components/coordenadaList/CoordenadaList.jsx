import React, { useState } from "react";
import { Button } from "primereact/button";
import "./CoordenadaList.css";

const CoordenadaList = (props) => {

  const {cambio, pasar} = props;

  console.log(cambio);

  const [state, setState] = useState(null);

  const replace = (nombre, productos) => {

    pasar(nombre, productos);
  }

  var names = cambio.seccion

  var namesList = names.map(function (name) {
    
    return (

      !state ?
      <div  key={name.nombre} className="p-col-5">
        <Button
          type="button"
          label={name.nombre}
          badge={name.productos.length>0 ? name.productos.map(a => a.cantidad).reduce((a, b) => a + b, 0) : "0"}
          onClick={() => replace(name.nombre, name.productos)}
          className="p-d-block p-mx-auto"
        />
      </div> : <p></p>
    );
  });

  
  return (
    <div className="p-p-4">
    <div className="p-grid p-justify-center">{namesList}</div>
      
    </div>
  );
};

export default CoordenadaList;
