import React from 'react'
import { Panel } from 'primereact/panel';
import ProductList from '../productList/ProductList';
import "./Coordenada.css";

const Coordenada  = (props) => {

    const {nombre, productos} = props;

    const titleFormClass = {
        textAlign: "Center",
        fontWeight: "Bold",
        fontSize: "1.5rem",
        color: "#000000"
      }

    console.log('los props ' + props)
    console.log(nombre)

    return (
        <div>
        <Panel header="NOMBRE DE LA COORDENADA">
        <p style={titleFormClass}>{nombre}</p>
        </Panel>
        <Panel header="CONTENIDO">
        <ProductList productos={productos}></ProductList>
        </Panel>
        </div>

    )
}


export default Coordenada;