import React from "react";
import Header from "../../components/header";
import Picture from "../../components/picture";
import Inputs from "../../components/inputs-text";
import InputsPass from "../../components/inputs-pass";
import FooterForm from "../../components/footer_form";
import "../../login/index.css";


export default function DonorRegister() {
  return (
    <div className="container">
      <Header />
      <div className="Main">
        <Picture />
        <form className="formName">
          <h2>Cadastro</h2>
          <div className="inputs">
            <Inputs
              htmlFor="nome"
              class="nome"
              title="Nome completo"
              id="nome"
              placeholder="Digite seu nome completo"
            />
            <Inputs
              htmlFor="email"
              class="email"
              title="Email"
              id="email"
              placeholder="Digite seu email"
            />
            <Inputs
              htmlFor="telefone"
              class="telefone"
              title="Telefone"
              id="telefone"
              placeholder="(83) 22422-7432"
            />
            <InputsPass
              htmlFor="password"
              title="Senha"
              class="password"
              type="password"
              id="password"
              placeholder="Digite sua senha"
            />
          <InputsPass
              htmlFor="password-repeat"
              title="Repetir senha"
              class="password-repeat"
              type="password"
              id="password-repeat"
              placeholder="Digite sua senha"
            />
          </div>
          <button type="submit" className="auth-btn">ENTRAR</button>
          <FooterForm 
             class="registered"
             classFooter="link"
            text="Já tem conta?"
            url="#"
            link="Realizar login"
            />
        </form>
      </div>
    </div>
  );
}
