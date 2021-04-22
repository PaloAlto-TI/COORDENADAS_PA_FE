import React, { useState } from "react";
import { Button } from "primereact/button";
import "./CoordenadaList.css";

const CoordenadaList = (props) => {

  const {cambio, pasar} = props;

  console.log(cambio);

  const [state, setState] = useState(null);

  const replace = (nombre) => {

    pasar(nombre);
  }

  var names = cambio

  var namesList = names.map(function (name) {
    
    return (

      !state ?
      <div  key={name.nombre} className="p-col-5">
        <Button
          type="button"
          label={name.nombre}
          badge="8"
          onClick={() => replace(name.nombre)}
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
