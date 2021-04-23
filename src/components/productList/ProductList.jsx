import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import Tabletop from "tabletop";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import Producto from "../producto/Producto";
import { ScrollPanel } from 'primereact/scrollpanel';
import ProductService from '../../services/products/ProductsService';
import './ProductList.css';

const ProductList = (props) => {

    const {productos} =props;
    const [products, setProducts] = useState([]);
    const [globalFilter, setGlobalFilter] = useState(null);

    const [displayResponsive, setDisplayResponsive] = useState(false);
    const [position, setPosition] = useState('center');

    const dialogFuncMap = {

        'displayResponsive': setDisplayResponsive
    }

    const onClick = (name, position) => {
        dialogFuncMap[`${name}`](true);

        if (position) {
            setPosition(position);
        }
    }

    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }
  

    const renderFooter = (name) => {
        return (
            <div>
                <Button label="No" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
            </div>
        );
    }

    useEffect(() => {
        Tabletop.init({
             key: "1ql5KNB3jFHOAdqnZ0whtO2PHqOnTs5J0upieWU3v1L8",
             simpleSheet: true
         }).then(data => setProducts(productos.map(t1 => ({...t1, ...data.find(t2 => t2.codigo === t1.codigo)}))));
        //setProducts(productos);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps



    const header = (
        <div className="table-header">
            <Button label="Nuevo" icon="pi pi-plus" className="p-mr-2" onClick={() => setDisplayResponsive(true)}/>
            <Button label="Eliminar" icon="pi pi-trash" className="p-button-danger" />
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Buscar..." />
            </span>
        </div>
    );

    const codeBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">OBSERVACIÓN</span>
                <br/>
                {rowData.observacion}
            </React.Fragment>
        );
    }

    const nameBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">CODIGO</span>
                <br/>
                {rowData.codigo}
            </React.Fragment>
        );
    }

    const categoryBodyTemplate = (rowData) => {
        
        return (
            <React.Fragment>
                <span className="p-column-title">CANTIDAD</span>
                <br/>
                {rowData.cantidad}
            </React.Fragment>
        );
    }

    const quantityBodyTemplate = (rowData) => {
        
        return (
            <React.Fragment>
                <span className="p-column-title">NOMBRE</span>
                <br/>
                {rowData.nombre}
            </React.Fragment>
        );
    }

    return (
        <div className="datatable-responsive-demo">
            <div className="card">
                <DataTable header={header} selectionMode="single" value={products} className="p-datatable-responsive-demo" paginator rows={10} globalFilter={globalFilter} >
                    <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                    <Column field="codigo" style={{width:'20%'}} header="CÓDIGO" body={nameBodyTemplate} sortable/>
                    <Column field="nombre" style={{width:'30%'}} header="NOMBRE" body={quantityBodyTemplate} sortable />
                    <Column field="cantidad" style={{width:'20%'}} header="CANTIDAD" body={categoryBodyTemplate} sortable />
                    <Column field="observacion" style={{width:'25%'}} header="OBSERVACIÓN" body={codeBodyTemplate} sortable />

                </DataTable>
                <Dialog blockScroll={true} contentStyle={{overflow:"visible"}} header="Header" visible={displayResponsive} onHide={() => onHide('displayResponsive')} breakpoints={{'960px': '75vw'}} style={{width: '50vw'}} footer={renderFooter('displayResponsive')} >
                    <ScrollPanel style={{ width: '100%', height: '300px' }} >
                        <Producto/>    
                    </ScrollPanel>

                </Dialog>
            </div>
        </div>
    );
}

export default ProductList;