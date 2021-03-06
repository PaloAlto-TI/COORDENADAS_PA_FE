import React from 'react'
import { Panel } from 'primereact/panel';
import ProductList from '../productList/ProductList';
import "./Coordenada.css";

const Coordenada  = (props) => {

    const {nombre, productos, bodega, setBodega} = props;

    console.log(props)

    return (
        <div>
        <Panel header="NOMBRE DE LA COORDENADA">
        <p>{nombre}</p>
        </Panel>
        <ProductList nombre={nombre} productos={productos} bodega={bodega} setBodega={setBodega}></ProductList>
        </div>

    )
}


export default Coordenada;