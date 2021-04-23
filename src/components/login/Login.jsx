import React from "react";
import { GoogleLogin } from 'react-google-login';
import UsuarioService from '../../services/Usuarios/UsuariosService';
import { useState } from 'react';
import reactDom from "react-dom";

localStorage.clear();






const Login=()=> {
 
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
  
    
   
  
    const UsuarioCheck =  usuarioService.postUsuarioCheck(objctCheck).then(resultado => { 

    localStorage.setItem("persona",JSON.stringify(resultado));
    
    });

   

    
    
      
      
 
  }
  


  return (
    <div className="Login">
      <br />
      <br />
      <GoogleLogin
        clientId="610747110294-o2cruk32qs9j2mi3o9ob1b7dpu4ib35u.apps.googleusercontent.com"
        buttonText="Iniciar Sesión"
        onSuccess={responseGoogle}

        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default Login;
