import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import Select from 'react-dropdown-select';
import './Producto.css';

const Producto = (props) => {

    const {tipos} = props;
    
    console.log(tipos)
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
                    onChange={(e)=>console.log(e)}
                    style={{width:'90%'}}
                />
                <h5>Cantidad de producto:</h5>
                <InputNumber min={1} value={value17} onValueChange={(e) => setValue17(e.value)} showButtons />
                <h5>Observación:</h5>
                <InputText style={{width:'90%'}} value={value1} onChange={(e) => setValue1(e.target.value)} />
        </div>
        </div>
    );
}

export default Producto;