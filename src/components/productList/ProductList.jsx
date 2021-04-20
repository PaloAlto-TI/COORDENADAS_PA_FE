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

const ProductList = () => {
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
        }).then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    console.log(products)


    const header = (
        <div className="table-header">
            List of Customers
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" />
            </span>
        </div>
    );

    const codeBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">ID</span>
                {rowData._id}
            </React.Fragment>
        );
    }

    const nameBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">CODIGO</span>
                <br/>
                {rowData.CODIGO}
            </React.Fragment>
        );
    }

    const categoryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">NOMBRE</span>
                <br/>
                {rowData.NOMBRE}
            </React.Fragment>
        );
    }

    const quantityBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">UNIDAD</span>
                <br/>
                {rowData.UNIDAD}
            </React.Fragment>
        );
    }

    return (
        <div className="datatable-responsive-demo">
            <div className="card">
                <DataTable header={header} selectionMode="single" value={products} className="p-datatable-responsive-demo" paginator rows={10} globalFilter={globalFilter} onSelectionChange={() => setDisplayResponsive(true)} >
                    <Column field="CODIGO" header="CODIGO" body={nameBodyTemplate} sortable/>
                    <Column field="NOMBRE" header="NOMBRE" body={categoryBodyTemplate} sortable />
                    <Column field="UNIDAD" header="UNIDAD" body={quantityBodyTemplate} sortable />
                </DataTable>
                <Dialog header="Header" visible={displayResponsive} onHide={() => onHide('displayResponsive')} breakpoints={{'960px': '75vw'}} style={{width: '50vw'}} footer={renderFooter('displayResponsive')} >
                    <ScrollPanel>
                        <Producto/>    
                    </ScrollPanel>

                </Dialog>
            </div>
        </div>
    );
}

export default ProductList;