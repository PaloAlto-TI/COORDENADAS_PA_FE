import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import Tabletop from "tabletop";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import Producto from "../producto/Producto";
import { ScrollPanel } from 'primereact/scrollpanel';
import BodegaService from "../../services/bodegas/BodegaService";

import './ProductList.css';


const ProductList = (props) => {

    //ESTADOS PARA PRODUCTOS Y BODEGA
    const {productos, bodega, setBodega, nombre} =props;
    const [products, setProducts] = useState([]);
    const [data, setData] = useState([]);
    const [product, setProduct] = useState({
        codigo : null,
        cantidad : null,
        observacion : null
    });
    

    //ESTADOS PARA MANEJO DE INTERFAZ
    const [aux, setAux] = useState(false);
    
    const [globalFilter, setGlobalFilter] = useState(null);
    const [selectedProduct1, setSelectedProduct1] = useState([]);
    const [displayResponsive, setDisplayResponsive] = useState(false);
    const [displayResponsive2, setDisplayResponsive2] = useState(false);
    const [displayResponsive3, setDisplayResponsive3] = useState(false);


    // COMPONENTES PARA CERRAR POPUP
    const dialogFuncMap = {

        'displayResponsive': setDisplayResponsive
    }

    const dialogFuncMap2 = {

        'displayResponsive2': setDisplayResponsive2
    }

    const dialogFuncMap3= {

        'displayResponsive3': setDisplayResponsive3
    }


    // FUNCIONES PARA CERRAR POPUP

    const onHide = (name) => {

        dialogFuncMap[`${name}`](false);
    }

    const onHide2 = (name) => {

        dialogFuncMap2[`${name}`](false);
    }

    const onHide3 = (name) => {

        dialogFuncMap3[`${name}`](false);
    }

    //FUNCION PARA GUARDAR PRODUCTO
    const pruebas = async (name) => {


        let _bodega = bodega;

        _bodega.coordenadas.forEach(coordenada => {
            coordenada.seccion.forEach(seccion => {
                if (seccion.nombre===nombre){
                    seccion.productos.push(product)
                    setProducts(seccion.productos.map(t1 => ({...t1, ...data.find(t2 => t2.codigo === t1.codigo)})))
                }
            }); 
        });

        
        const bodegaService = new BodegaService();
        console.log(_bodega);
        let r = await bodegaService.updateBodega(_bodega).then((data) => setBodega(data));
        console.log("r", r)
        dialogFuncMap[`${name}`](false);
    }

    //FUNCION PARA EDITAR PRODUCTO

    const editar = async(name) =>{

        let _bodega = bodega;

        let temp_codigo = product.codigo;

        console.log(temp_codigo);
         _bodega.coordenadas.forEach(coordenada => {
             coordenada.seccion.forEach(seccion => {
                
                if (seccion.nombre===nombre){
                    let objIndex = seccion.productos.findIndex((obj => obj.codigo === temp_codigo));
                    seccion.productos[objIndex].codigo = product.codigo
                    seccion.productos[objIndex].cantidad = product.cantidad
                    seccion.productos[objIndex].observacion = product.observacion
                    setProducts(seccion.productos.map(t1 => ({...t1, ...data.find(t2 => t2.codigo === t1.codigo)})))
                 }
            }); 
         });

        
        const bodegaService = new BodegaService();
        console.log(_bodega);
        let r = await bodegaService.updateBodega(_bodega).then((data) => setBodega(data));
        console.log("r", r)
        setSelectedProduct1([])
        dialogFuncMap3[`${name}`](false);

    }

    // COMPONENTES PARA FOOTER EN POPUP
    const renderFooter = (name) => {
        return (
            <div >
                <Button style={{fontSize:'13px'}} label="Guardar" icon="pi pi-check" onClick={() => pruebas(name)} autoFocus />
            </div>
        );
    }

    const renderFooter2 = (name) => {
        return (
            <div >
                <Button style={{fontSize:'13px'}} label="Eliminar" icon="pi pi-trash" className="p-button-danger p-button-sm" onClick={() => eliminar(name)} autoFocus />
            </div>
        );
    }

    const renderFooter3 = (name) => {
        return (
            <div >
                <Button style={{fontSize:'13px'}} label="Guardar" icon="pi pi-check" className="p-button-primary p-button-sm" onClick={() => editar(name)} autoFocus />
            </div>
        );
    }

    // CARGA DE DATOS EN TABLA
    useEffect(() => {
        Tabletop.init({
             key: "1ql5KNB3jFHOAdqnZ0whtO2PHqOnTs5J0upieWU3v1L8",
             simpleSheet: true
         }).then(data => cargarProductos(data) );
    }, []);


    //FUNCION PARA JOIN CON SHEETS
    const cargarProductos = (data) => {
        setData(data);
        setProducts(productos.map(t1 => ({...t1, ...data.find(t2 => t2.codigo === t1.codigo)})))
    }


    //FUNCIONES PARA POPUPS
    const popup = () => {
        setProduct({
            codigo : null,
            cantidad : null,
            observacion : null
        });
        setAux(false)
        setDisplayResponsive(true)
    }

    const popup2 = () => {
        setDisplayResponsive2(true)
    }


    const popup3 = (rowData) => {
        console.log(rowData);
        setProduct(rowData)
        setDisplayResponsive3(true)
    }

    //COMPONENTE HEADER DE TABLA
    const header = (
        <div className="p-grid">
            <div className="p-col-1">
            { selectedProduct1.length === 0 ? <Button  label="NUEVO" icon="pi pi-plus" className="p-button-sm" onClick={() => popup()}/>
            :<Button  label="ELIMINAR" icon="pi pi-trash" className="p-button-danger p-button-sm" onClick={() => popup2()} />}
            </div>
            <div className="p-col-11">
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)}  placeholder="Buscar..." />
            </span>
            </div>
        </div>
    );

    //COMPONENTES PARA RESPONSIVE DE LA TABLA
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


    //FUNCION PARA ELIMINAR PRODUCTO
    const eliminar = async(name) => {
        let _bodega = bodega;

        let arr = selectedProduct1.map(p => p.codigo)

         _bodega.coordenadas.forEach(coordenada => {
             coordenada.seccion.forEach(seccion => {
                
                if (seccion.nombre===nombre){
                    let arr2 = seccion.productos.filter(p => !arr.includes(p.codigo))

                    setProducts(arr2.map(t1 => ({...t1, ...data.find(t2 => t2.codigo === t1.codigo)})))
                    seccion.productos=arr2;
                 }
            }); 
         });

        
        const bodegaService = new BodegaService();
        console.log(_bodega);
        let r = await bodegaService.updateBodega(_bodega).then((data) => setBodega(data));
        console.log("r", r)
        setSelectedProduct1([])
        dialogFuncMap2[`${name}`](false);

    }


    // COMPONENTE COLUMNA EDITAR EN TABLA
    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-info p-mr-2" onClick={() => popup3(rowData)} />
            </React.Fragment>
        );
    }

    //FUNCION SELECIONA PRODUCTO
    const setTest = (info) => {

       
        console.log(info);
        setSelectedProduct1(info);
    }

    

    return (
        <div className="datatable-responsive-demo">
            <div className="card">
        
                <DataTable  header={header} style={{width:'100%'}}   selectionMode="checkbox" selection={selectedProduct1} onSelectionChange={e => setTest(e.value)} value={products} className="p-datatable-responsive-demo" paginator rows={10} globalFilter={globalFilter} >
                    <Column className="chbox" selectionMode="multiple"  headerStyle={{width: '3em'}}></Column>
                    <Column className="cod" field="codigo"  header="CÓDIGO" body={nameBodyTemplate} sortable/>
                    <Column className="nom" field="nombre" header="NOMBRE" body={quantityBodyTemplate} sortable />
                    <Column className="can" field="cantidad"  header="CANTIDAD" body={categoryBodyTemplate} sortable />
                    <Column className="obs" field="observacion"  header="OBSERVACIÓN" body={codeBodyTemplate} sortable />
                    <Column className="act"  body={actionBodyTemplate}></Column>
                </DataTable>
               
                <Dialog blockScroll={true} contentStyle={{overflow:"visible"}} header="Nuevo Producto" visible={displayResponsive} onHide={() => onHide('displayResponsive')} breakpoints={{'960px': '75vw'}} style={{width: '40vw'}} footer={renderFooter('displayResponsive')} >
                    <ScrollPanel style={{ width: '100%', height: '310px' }} >
                        <Producto tipos={data} aux={aux} setProduct={setProduct} product={product} edit={false}  />    
                    </ScrollPanel>

                </Dialog>
                <Dialog  contentStyle={{overflow:"visible"}} header="Eliminar Producto(s)" visible={displayResponsive2} onHide={() => onHide2('displayResponsive2')} breakpoints={{'960px': '75vw'}} style={{width: '40vw'}} footer={renderFooter2('displayResponsive2')} >
                    <ScrollPanel style={{ width: '100%', height: '100px' }} >
                        <p>¿Está seguro que desea eliminar el/los producto(s) seleccionado(s)?</p> 
                    </ScrollPanel>

                </Dialog>
                <Dialog blockScroll={true} contentStyle={{overflow:"visible"}} header="Editar Producto" visible={displayResponsive3} onHide={() => onHide3('displayResponsive3')} breakpoints={{'960px': '75vw'}} style={{width: '40vw'}} footer={renderFooter3('displayResponsive3')} >
                    <ScrollPanel style={{ width: '100%', height: '310px' }} >
                        <Producto tipos={data} aux={aux} setProduct={setProduct} product={product} edit={true} />    
                    </ScrollPanel>

                </Dialog>
            </div>
        </div>
    );
}

export default ProductList;