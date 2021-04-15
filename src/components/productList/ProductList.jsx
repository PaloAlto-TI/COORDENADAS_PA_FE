import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import Tabletop from "tabletop";
import ProductService from '../../services/products/ProductsService';
import './ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();
    const [globalFilter, setGlobalFilter] = useState(null);
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
                {rowData.CODIGO}
            </React.Fragment>
        );
    }

    const categoryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">NOMBRE</span>
                {rowData.NOMBRE}
            </React.Fragment>
        );
    }

    const quantityBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">UNIDAD</span>
                {rowData.UNIDAD}
            </React.Fragment>
        );
    }

    return (
        <div className="datatable-responsive-demo">
            <div className="card">
                <DataTable header={header} selectionMode="single" value={products} className="p-datatable-responsive-demo" paginator rows={10}  globalFilter={globalFilter} >
                    <Column field="CODIGO" style={{width:'20%'}} header="CODIGO" body={nameBodyTemplate} sortable/>
                    <Column field="NOMBRE" style={{width:'60%'}} header="NOMBRE" body={categoryBodyTemplate} sortable/>
                    <Column field="UNIDAD" style={{width:'20%'}} header="UNIDAD" body={quantityBodyTemplate} sortable/>
                </DataTable>
            </div>
        </div>
    );
}

export default ProductList;