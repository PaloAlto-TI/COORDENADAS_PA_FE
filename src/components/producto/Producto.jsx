import React from 'react';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import Select from 'react-dropdown-select';
import './Producto.css';

const Producto = (props) => {

    const {tipos, setProduct, product, edit} = props;
    
    const customNoDataRenderer = ({ props, state, methods }) => (
        <p>No hay coincidencias</p>
      );

    const updateField = (data, field) => {
        setProduct({
          ...product,
          [field]: data,
        });
    
        console.log(product);
      };


    return (
        <div className="dropdown-demo">
            <div className="card">
                <h5>Nombre del producto:</h5>
                    <Select
                    placeholder={"Seleccione un producto..."}
                    options={tipos}
                    labelField="nombre"
                    searchBy="nombre"
                    noDataRenderer={customNoDataRenderer}
                    onChange={(e) => updateField(e[0].codigo, "codigo")}
                    style={{width:'90%'}}
                    values={product.codigo ? [tipos.find(t=>t.codigo===product.codigo)] : []}
                    disabled={edit ? true : false}
                />
                <h5>Cantidad de producto:</h5>
                <InputNumber min={1} value={product.cantidad} onValueChange={(e) => updateField(e.target.value, "cantidad")} showButtons />
                <h5>Observación:</h5>
                <InputText style={{width:'90%'}} value={product.observacion} onChange={(e) => updateField(e.target.value, "observacion")} />
        </div>
        </div>
    );
}

export default Producto;