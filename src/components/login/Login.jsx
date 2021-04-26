import React from "react";
import { GoogleLogin } from 'react-google-login';
import UsuarioService from '../../services/Usuarios/UsuariosService';
import { useState } from 'react';
import reactDom from "react-dom";
import "./Login.css";
import imagen from "./Imagenes/coordenada.jpg";
import Bodega from "../bodega/Bodega";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { createHashHistory } from "history";


// localStorage.clear();







const Login = () => {
  const [userEstado, setUserEstado] = useState(false);
  const [userError, setUserError] = useState(false);

  const [Userhook, setUserhook] = useState({
    codigo: null,
    mail: null,
    nombre: null,
    apellido: null,
    bodegas: null,
    rol: null,
    estado: null

  });



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
      else{
        setUserError(true);
      }

    }



    );


  }


  return (

    <div>
      {!localStorage.getItem("persona") ?
    <div className="contenedor1">

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
              <label className="Inicia">Inicia Sesión</label>

              <GoogleLogin
                clientId="930398454466-1bju770rkgrii8cdopo4pgt3rrline75.apps.googleusercontent.com"
                buttonText="Google"
                onSuccess={responseGoogle}

                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />


            </div>




          </div>
          {userError ?
            <div className="label2">
              <label>Error de autenticacion: No es un usuarios Autorizado</label>
            </div>
            : null
          }
        </div>


    </div>
        : <Bodega></Bodega>
      }
    </div>





  );
}

export default Login;
