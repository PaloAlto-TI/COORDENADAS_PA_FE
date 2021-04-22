import React from 'react'
import { Panel } from 'primereact/panel';
import ProductList from '../productList/ProductList';

const Coordenada  = (props) => {

    const {nombre, productos} = props;

    console.log(props)

    return (
        <div>

        <Panel header="NOMBRE DE LA COORDENADA">
                <p>{nombre}</p>
        </Panel>
        <Panel header="CONTENIDO">
        <ProductList productos={productos}></ProductList>
        </Panel>
        </div>
    )
}


export default Coordenada;