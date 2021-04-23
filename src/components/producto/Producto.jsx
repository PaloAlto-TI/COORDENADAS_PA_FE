import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import './Producto.css';

const Producto = () => {

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [value17, setValue17] = useState(20);
    const [value1, setValue1] = useState('');
    
    const countries = [
        {name: 'Australia', code: 'AU'},
        {name: 'Brazil', code: 'BR'},
        {name: 'China', code: 'CN'},
        {name: 'Egypt', code: 'EG'},
        {name: 'France', code: 'FR'},
        {name: 'Germany', code: 'DE'},
        {name: 'India', code: 'IN'},
        {name: 'Japan', code: 'JP'},
        {name: 'Spain', code: 'ES'},
        {name: 'United States', code: 'US'}
    ];
 

    const onCountryChange = (e) => {
        setSelectedCountry(e.value);
    }


    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <div>{option.name}</div>
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
                <div>{option.name}</div>
            </div>
        );
    }



    return (
        <div className="dropdown-demo">
            <div className="card">
                <h5>Advanced with Templating, Filtering and Clear Icon</h5>
                <Dropdown className="test" value={selectedCountry} options={countries} onChange={onCountryChange} optionLabel="name" filter showClear filterBy="name" placeholder="Select a Country"
                    valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} />
                <br/>
                <br/>
                <br/>
                <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="stacked">Stacked</label>
                        <InputNumber id="stacked" value={value17} onValueChange={(e) => setValue17(e.value)} showButtons />
                </div>
                <br/>
                <br/>
                <br/>
                <h5>Basic</h5>
                <InputText value={value1} onChange={(e) => setValue1(e.target.value)} />
                <span className="p-ml-2">{value1}</span>
            </div>
        </div>
    );
}

export default Producto;