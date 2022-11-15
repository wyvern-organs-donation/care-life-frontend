import React from "react";
import Header from "../components/header";
import { Link } from "react-router-dom";
import "./index.css";

export default function Register() {
  return (
    <React.Fragment>
      <Header />
      <div className="Main">
        <picture>
          <img
            src="src/assets/authenctication/nurse-man-holds-heart-isolated-white-background-removebg-preview 2.png"
            alt=""
          />
        </picture>
        <form className="formUserRegister">
          <h2>Cadastro</h2>
          <div className="inputs">
            <div className="nome">
              <label htmlFor="nome">Nome completo</label>
              <input
                type="text"
                name="nome"
                id="name-register"
                placeholder="Digite seu nome completo"
              />
            </div>
            <div className="inputs">
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email-register"
                  placeholder="Digite seu email"
                />
              </div>
              <div className="password">
                <label htmlFor="passwor-login">Senha</label>
                <input
                  type="password"
                  name="password-register"
                  id="password-register"
                  placeholder="Digite sua senha"
                />
                <img src="src/assets/authenctication/eye off.svg" alt="" />
              </div>
              <div className="password">
                <label htmlFor="passwor-register-repeat">Repitir senha</label>
                <input
                  type="password"
                  name="passwor-register-repeat"
                  id="passwor-register-repeat"
                  placeholder="Digite sua senha"
                />
                <img src="src/assets/authenctication/eye off.svg" alt="" />
              </div>
            </div>
          </div>
          <button type="submit">ENTRAR</button>
          <div className="registered">
            <p>
              <strong>Já tem conta?</strong>
            </p>
            <Link to="#">
              <strong>Realizar login</strong>
            </Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
