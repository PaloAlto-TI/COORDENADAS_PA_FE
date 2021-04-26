import React from "react";
import { GoogleLogin } from 'react-google-login';
import UsuarioService from '../../services/Usuarios/UsuariosService';
import { useState } from 'react';
import reactDom from "react-dom";
import "./Login.css";
import imagen from "./Imagenes/coordenada.jpg";
import Prueba1 from "../prueba_jc/Prueba1";
//import imagen from "../coordenadaList/CoordenadaList";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { createHashHistory } from "history";

import CoordenadaList from "../prueba_jc/Prueba1";
localStorage.clear();







const Login = () => {

  const [Userhook, setUserhook] = useState({
    codigo: null,
    mail: null,
    nombre: null,
    apellido: null,
    bodegas: null,
    rol: null,
    estado: null

  });
  const [userEstado, setUserEstado] = useState(false);



  const responseGoogle = (response) => {
    // console.log(response.profileObj.email);
    const usuarioService = new UsuarioService();
    const objctCheck = {
      "mail": response.profileObj.email

    }




    const UsuarioCheck = usuarioService.postUsuarioCheck(objctCheck).then(resultado => {

      localStorage.setItem("persona", JSON.stringify(resultado));

      if (localStorage.getItem("persona") != "null") {
        console.log("Entra");
          setUserEstado(true);

      }

    }



    );








  }


  return (
    
    
    <div className="contenedor1">
{!userEstado ? 

      <div className="contenedor2">
        <div className="content-imagen">

          <img src={imagen} className="img" />

        </div>
        <div className="contenedor3">




          <div >
            <label className="tituloApp">COORDENADAS</label>
          </div>

          <div className="contenedor5">

          </div>
        
          <div className="contenedor6">
            <label className="Inicia">Inicia Sesión con:</label>
          
            <GoogleLogin
              clientId="610747110294-o2cruk32qs9j2mi3o9ob1b7dpu4ib35u.apps.googleusercontent.com"
              buttonText="Google"
              onSuccess={responseGoogle}
                
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
           

          </div>
          



        </div>

        </div>:<Prueba1></Prueba1>
      }
      </div>

    
 
  

  );
}

export default Login;

