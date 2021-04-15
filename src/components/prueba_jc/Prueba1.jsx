import React from 'react';
import './Prueba1.css';
import{BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';

import about from "../productList/ProductList";

function Prueba1(){
return(
    <Router>
    <div className="Prueba1">
        <header classname="App-header">
            <ul>
                <li>
                    <Link to="/">Home</ Link>
                </li>
                <li>
                    <Link to="/about">About </Link>
                </li>
                <li>
                    <Link to="/user">User</ Link>
                </li>
            </ul>
            <div>
                <Switch>
                    <Route exact path="/" /> 
                    <Route exact path="/about" /> 
                    <Route exact path="/user" /> 
                </Switch>
            </div>
        </header>
    </div>
    </Router>
);
}

export default Prueba1;