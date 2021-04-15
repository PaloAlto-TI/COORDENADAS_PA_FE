import React, { useState } from "react";
import { Button } from "primereact/button";
import "./CoordenadaList.css";

const CoordenadaList = (props) => {

  const {cambio, pasar} = props;

  console.log(cambio);

  const [state, setState] = useState(null);

  const replace = () => {

    pasar();
  }

  var names = [
    "A1-1",
    "A2-1",
    "A1-2",
    "A2-2",
    "A1-3",
    "A2-3",
    "A1-4",
    "A2-4",
    "A1-5",
    "A2-5",
  ];
  var namesList = names.map(function (name) {
    
    return (

      !state ?
      <div  key={name} className="p-col-5">
        <Button
          type="button"
          label={name}
          badge="8"
          onClick={() => replace()}
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
