import React, { useState } from "react";
import login from "../Assets/login.jpg";
import barco_azul from "../Assets/barco_azul.svg";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { app, auth } from "../../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate('/')
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
          <img src={login} alt="Login" className="img-fluid" />
        </div>
        <form className="col-md-6 colRight" onSubmit={signIn}>
          <img src={barco_azul} alt="barco_azul" className="img-fluid pb-3" />
          <h4 className="login-title">Iniciar Sesión</h4>
          <div className="form-floating mt-3 mb-3">
            <input
              type="email"
              className="form-control input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Correo Electrónico"
              id="email"
            />
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              id="contraseña"
            />
          </div>
          {/* <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheck" />
                    <label class="form-check-label" for="flexCheckDefault">
                        Recordarme
                    </label>
  </div>*/}
          <p className="mt-2 mb-2">
            <Link className="ml-1" to="/password-reset">
              ¿Olvidaste tu contraseña?
            </Link>
          </p>
          <div className="text-center">
            <button
              type="submit"
              className="btn-login input-submit"
              name="submit"
              value="login"
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
