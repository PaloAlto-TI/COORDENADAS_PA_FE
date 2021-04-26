import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import Select from 'react-dropdown-select';
import './Producto.css';

const Producto = (props) => {

    const {tipos, aux, setProduct, product, edit} = props;
    
    

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [value17, setValue17] = useState(20);
    const [value1, setValue1] = useState('');
    const countries = tipos;
 

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
                {/* <Dropdown style={{width:'100%'}} value={selectedCountry} options={tipos} onChange={onCountryChange} optionLabel="nombre" filter showClear filterBy="nombre" placeholder="Seleccione"
                    valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} /> */}
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