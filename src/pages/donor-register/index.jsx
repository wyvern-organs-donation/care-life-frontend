import React from "react";
import Header from "../../components/header";
import { Link } from "react-router-dom";
import "../login/index";
import "./index";

export default function DonorRegister() {
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
        <form className="formRegister-donor">
          <h2>Cadastro</h2>
          <div className="inputs">
            <div className="nome">
              <label htmlFor="nome">Nome completo</label>
              <input
                type="text"
                name="nome"
                id="nome"
                placeholder="Digite seu nome completo"
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu email"
              />
            </div>
            <div className="telefone">
              <label htmlFor="telefone">Telefone</label>
              <input
                type="text"
                name="telefone"
                id="telefone"
                placeholder="(83) 22422-7432"
              />
            </div>
            <div className="password">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Digite sua senha"
              />
              <img src="src/assets/authenctication/eye off.svg" alt="" />
            </div>
            <div className="password">
              <label htmlFor="password-repeat">Repetir senha</label>
              <input
                type="password"
                name="password-repeat"
                id="password-repeat"
                placeholder="Digite sua senha"
              />
              <img src="src/assets/authenctication/eye off.svg" alt="" />
            </div>
          </div>
          <button type="submit">ENTRAR</button>
          <div className="registered">
            <p>Já tem conta?</p>
            <Link to="/login">
              <strong>Realize o login</strong>
            </Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
