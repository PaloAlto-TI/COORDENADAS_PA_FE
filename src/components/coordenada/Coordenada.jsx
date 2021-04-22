import React from 'react'
import { Panel } from 'primereact/panel';
import ProductList from '../productList/ProductList';

const Coordenada  = (props) => {

    const {nombre} = props;
    return (
        <div>

        <Panel header="NOMBRE DE LA COORDENADA">
                <p>{nombre}</p>
        </Panel>
        <Panel header="CONTENIDO">
        <ProductList></ProductList>
        </Panel>
        </div>
    )
}


export default Coordenada;