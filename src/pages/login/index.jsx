import React from "react";
import Header from "./components/header";
import { Link } from "react-router-dom";
import "./index.css";
import api from "../../services/api";
import { useRef, useState, useEffect } from "react";

export default function Login() { 
  const emailRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await api.post(
        '/auth', 
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      localStorage.setItem("token", response?.data?.token);
      localStorage.setItem("user", response?.data?.user);
      setSuccess(true);
      //clear state and controlled inputs
      setUser("");
      setPwd("");
    } catch (err) {
      console.log(err)
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else {
        setErrMsg("Login Failed" + err.response?.message);
      }
      errRef.current.focus();
    }
  };

  useEffect(() => {
    emailRef.current.focus();
  }, []);
  
  useEffect(() => {
    setErrMsg("");
  }, [email, password]);
  
  return (
    <React.Fragment>
      <Header />
      <div className="Main">
        <picture>
          <img
            src="src/assets//authenctication/nurse-man-holds-heart-isolated-white-background-removebg-preview 2.png"
            alt=""
          />
        </picture>
        {success ? (
            <section>
              <h1>You are logged in!</h1>
              <br />
              <p>{/* <a href="#">Go to Home</a> */}</p>
            </section>
        ) : (
            <section>
              <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
                {errMsg}
              </p>
            <form onSubmit={handleSubmit} className="formName">
              <h2>Login</h2>
              <div className="inputs">
                <div className="email">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    ref={emailRef}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    id="email-login"
                    placeholder="Digite seu email"
                  />
                </div>
                <div className="password">
                  <label htmlFor="passwor-login">Senha</label>
                  <input
                    type="password"
                    name="password-login"
                    onChange={(e) => setPwd(e.target.value)}
                    value={password}
                    id="password-login"
                    placeholder="Digite sua senha"
                  />
                  <img src="src/assets/authenctication/eye off.svg" alt="" />
                </div>
              </div>
              <div className="forgot-password">
                <a href="#">
                  <strong>Esqueceu a senha?</strong>
                </a>
                <div className="remember-password">
                  <p>
                    <strong>Lembrar senha</strong>
                  </p>
                  <input type="checkbox" name="checkbox" id="checkbox" />
                </div>
              </div>
              <button className="login-btn" type="submit">ENTRAR</button>
              <div className="registered">
                <p>Ainda não tem conta?</p>
                <Link to="/register">
                  <strong>Cadastre-se</strong>
                </Link>
              </div>
            </form>
          </section>)}
      </div>
    </React.Fragment>
  );
}
