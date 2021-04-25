import React from 'react'
import { Panel } from 'primereact/panel';
import ProductList from '../productList/ProductList';
import "./Coordenada.css";

const Coordenada  = (props) => {

    const {nombre, productos} = props;

    console.log(props)

    return (
        <div>
        <Panel header="NOMBRE DE LA COORDENADA">
        <p>{nombre}</p>
        </Panel>
        <ProductList productos={productos}></ProductList>
        </div>

    )
}


export default Coordenada;