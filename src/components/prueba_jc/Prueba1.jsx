import React from 'react';
import './Prueba1.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import about from "../productList/ProductList";

function Prueba1() {
    return (


        <html>
            <Router>
                <body>
                <div>
                    <Switch>
                        <Route exact path="/" />
                        <Route exact path="/about" component={about} />
                        <Route exact path="/user" />
                    </Switch>
                </div>
                </body>
                <footer  class="pie">
                <div>

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
                  

                </div>
                </footer>
            </Router>
        </html >
    );
}

export default Prueba1;