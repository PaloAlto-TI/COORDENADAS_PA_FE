import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';

import ProductService from '../../services/productList/ProductListService';
import './ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();
    const [globalFilter, setGlobalFilter] = useState(null);
    useEffect(() => {
        productService.getProducts().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
                <span className="p-column-title">Code</span>
                {rowData.code}
            </React.Fragment>
        );
    }

    const nameBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Name</span>
                {rowData.name}
            </React.Fragment>
        );
    }

    const categoryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Category</span>
                {rowData.category}
            </React.Fragment>
        );
    }

    const quantityBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className="p-column-title">Quantity</span>
                {rowData.quantity}
            </React.Fragment>
        );
    }

    return (
        <div className="datatable-responsive-demo">
            <div className="card">
                <DataTable header={header}  selectionMode="single" value={products} className="p-datatable-responsive-demo" paginator rows={10}  globalFilter={globalFilter} >
                    <Column field="code" header="Code" body={codeBodyTemplate} sortable/>
                    <Column field="name" header="Name" body={nameBodyTemplate} sortable/>
                    <Column field="category" header="Category" body={categoryBodyTemplate} sortable/>
                    <Column field="quantity" header="Quantity" body={quantityBodyTemplate} sortable/>
                </DataTable>
            </div>
        </div>
    );
}

export default ProductList;