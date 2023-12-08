import React, { useState } from "react";
import login from "../Assets/login.jpg";
import barco_azul from "../Assets/barco_azul.svg";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const device_name = 'Web';
  const navigate = useNavigate("");

  const handleEmail = (e) =>{
    e.preventDefault();
    setEmail(e.target.value)
  }

  const handlePassword = (e) =>{
    e.preventDefault();
    setPassword(e.target.value)
  }

  const handleAPI = (e) =>{
    e.preventDefault();
    console.log({email, password})
    axios.post('https://marinero.mx/api/auth/login', {
        email: email,
        password: password,
        device_name: device_name
    })
    .then(response=>{
        navigate('/')
        console.log(response)
    })
    .catch(error =>{
        console.log(error)
    })
  }

  return (
    <div className="row g-0 vh-100 justify-content-center align-items-center loginPage mt-2">
      <div className="col-10 row g-0 loginPageContainer border rounded-2">
        <div className="col-md-6 colLeft">
          <img src={login} alt="Login" className="img-fluid" />
        </div>
        <form className="col-md-6 colRight">
          <img src={barco_azul} alt="barco_azul" className="img-fluid pb-3" />
          <h4 className="login-title">Iniciar Sesión</h4>
          <div className="form-floating mt-3 mb-3">
            <input
              type="email"
              className="form-control input-field"
              value={email}
              placeholder="Correo Electrónico"
              id="email"
              onChange={handleEmail}
            />
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control input-field"
              value={password}
              placeholder="Contraseña"
              id="contraseña"
              onChange={handlePassword}
            />
          </div>
          <p className="mt-2 mb-2">
            <Link className="ml-1" to="/password-reset">
              ¿Olvidaste tu contraseña?
            </Link>
          </p>
          <div className="text-center">
            <button
              className="btn-login input-submit"
              onClick={handleAPI}
            >
              Iniciar Sesión
            </button>
          </div>
          <div className="register-link mt-5">
            <p>
              ¿No tienes una cuenta?
              <Link className="ml-1" to="/register">
                Registrarse
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
