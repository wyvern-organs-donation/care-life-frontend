import React from "react";
import Header from "./components/header";
import { Link } from "react-router-dom";
import "./index.css";

export default function Login() {
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
        <form className="formName">
          <h2>Login</h2>
          <div className="inputs">
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email-login"
                placeholder="Digite seu email"
              />
            </div>
            <div className="password">
              <label htmlFor="passwor-login">Senha</label>
              <input
                type="password"
                name="password-login"
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
      </div>
    </React.Fragment>
  );
}
