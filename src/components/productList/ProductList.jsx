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
    const [data, setData] = useState([]);

    const [deleteBtn, setDeleteBtn] = useState(true);

    const [globalFilter, setGlobalFilter] = useState(null);
    const [selectedProduct1, setSelectedProduct1] = useState([]);
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
            <div >
                {/* <Button style={{fontSize:'12px'}} label="Cancelar" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" /> */}
                <Button style={{fontSize:'13px'}} label="Guardar" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
            </div>
        );
    }

    useEffect(() => {
        Tabletop.init({
             key: "1ql5KNB3jFHOAdqnZ0whtO2PHqOnTs5J0upieWU3v1L8",
             simpleSheet: true
         }).then(data => cargarProductos(data) );
        //setProducts(productos);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    const cargarProductos = (data) => {
        setData(data);
        setProducts(productos.map(t1 => ({...t1, ...data.find(t2 => t2.codigo === t1.codigo)})))
    }

    const header = (
        <div className="p-grid">
            
            { selectedProduct1.length == 0 ?<Button  label="NUEVO" icon="pi pi-plus" className="p-button-sm" onClick={() => setDisplayResponsive(true)}/>
            :<Button  label="ELIMINAR" icon="pi pi-trash" className="p-button-danger p-button-sm" disabled={deleteBtn} />}
            <div className="p-col-6 p-md-offset-5">
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)}  placeholder="Buscar..." />
            </span>
            </div>
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

    const eliminar = (item) => {
        setDeleteBtn(false);
        console.log(item)
    }

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [value17, setValue17] = useState(20);
    const [value1, setValue1] = useState('');
 

    const onCountryChange = (e) => {
        setSelectedCountry(e.value);
    }


    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <div>{option.nombre}</div>
                </div>
            );
        }

        return (
            <span>
                {props.placeholder}
            </span>
        );
    }

    const countryOptionTemplate = (option) => {
        return (
            <div className="country-item">
                <div>{option.nombre}</div>
            </div>
        );
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-info p-mr-2" onClick={() => console.log(rowData)} />
            </React.Fragment>
        );
    }

    const setTest = (info) => {

        if (info.length > 0){

            setDeleteBtn(false);
        }else{
            setDeleteBtn(true);

        }
        console.log(info);
        setSelectedProduct1(info);
    }

    

    return (
        <div className="datatable-responsive-demo">
            <div className="card">
        
                <DataTable  header={header} style={{width:'100%'}}   selectionMode="checkbox" selection={selectedProduct1} onSelectionChange={e => setTest(e.value)} value={products} className="p-datatable-responsive-demo" paginator rows={10} globalFilter={globalFilter} >
                    <Column selectionMode="multiple" style={{width:'5%'}}  headerStyle={{width: '3em'}}></Column>
                    <Column field="codigo" style={{width:'20%'}} header="CÓDIGO" body={nameBodyTemplate} sortable/>
                    <Column field="nombre" style={{width:'30%'}} header="NOMBRE" body={quantityBodyTemplate} sortable />
                    <Column field="cantidad" style={{width:'20%'}} header="CANTIDAD" body={categoryBodyTemplate} sortable />
                    <Column field="observacion" style={{width:'20%'}} header="OBSERVACIÓN" body={codeBodyTemplate} sortable />
                    <Column style={{width:'5%'}} body={actionBodyTemplate}></Column>
                </DataTable>
                {/* <Dropdown style={{width:'100%'}} value={selectedCountry} options={data} onChange={onCountryChange} optionLabel="nombre" filter showClear filterBy="nombre" placeholder="Seleccione"
                    valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} />
       */}
               
                <Dialog blockScroll={true} contentStyle={{overflow:"visible"}} header="Nuevo Producto" visible={displayResponsive} onHide={() => onHide('displayResponsive')} breakpoints={{'960px': '75vw'}} style={{width: '40vw'}} footer={renderFooter('displayResponsive')} >
                    <ScrollPanel style={{ width: '100%', height: '310px' }} >
                        <Producto tipos={data}/>    
                    </ScrollPanel>

                </Dialog>
            </div>
        </div>
    );
}

export default ProductList;