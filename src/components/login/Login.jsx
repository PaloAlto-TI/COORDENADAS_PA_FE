import React from "react";
import { GoogleLogin } from 'react-google-login';


const responseGoogle = (response) => {
  console.log(response.profileObj);
}
function Login() {
  return (
    <div className="Login">
    <br/>
    <br/>
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
