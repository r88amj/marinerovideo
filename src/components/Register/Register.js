import React, { useState } from "react";
import "./Register.css";
import register from "../Assets/register.jpg";
import barco_azul from "../Assets/barco_azul.svg";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate('/login')
        console.log(userCredential.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="row g-0 vh-100 justify-content-center align-items-center loginPage mt-2">
      <div className="col-10 row g-0 loginPageContainer border rounded-2">
        <div className="col-md-6 colLeft">
          <img src={register} alt="register" className="img-fluid" />
        </div>
        <form className="col-md-6 colRight" onSubmit={signUp}>
          <img src={barco_azul} alt="barco_azul" className="img-fluid pb-3" />
          <h4 className="login-title">Registrarse</h4>
         <div className="row">
            <div className="col-md-6 form-floating mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                id="first_name"
              />
            </div>
            <div className="col-md-6 form-floating mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Apellido"
                id="last_name"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 form-floating mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre de usuario"
                id="user_name"
              />
            </div>
            <div className="col-md-6 form-floating mb-3">
              <input
                type="phone"
                className="form-control"
                placeholder="Teléfono"
                id="phone"
              />
            </div>
  </div>
          <div className="row">
            <div className="col-md-6 form-floating mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Correo Electrónico"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-md-6 form-floating mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                id="contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="text-center">
            <button type="submit" name="submit" value="signUp" className="btn-register">Registrarse</button>
          </div>
          <div className="register-link mt-5">
            <p>
              ¿Ya tienes una cuenta?
              <Link className="ml-1" to="/login">
                Iniciar Sesión
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
