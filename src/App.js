import React from "react";
import "./App.css";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import CoordenadaList from "./components/coordenadaList/CoordenadaList";
import 'primeflex/primeflex.css';
import ProductList from "./components/productList/ProductList";
import Bodega from "./components/bodega/Bodega";
import Login from "./components/login/Login";
import Producto from "./components/producto/Producto";
import Coordenada from "./components/coordenada/Coordenada";
import Home from "./components/home/Home"

function App() {
  console.log('Aca esta el Index')
  return <div className="App">
      {/* <Login></Login> */}
      {/* <Home></Home> */}
      <Bodega></Bodega>
      {/* <Coordenada></Coordenada> */}
      {/* <ProductList></ProductList> */}
      {/* <Producto></Producto> */}
      {/* <CoordenadaList></CoordenadaList> */}
  </div>;
}

export default App;
