import React from "react";
import Header from "../../components/header";
import Picture from "../../components/picture";
import Inputs from "../../components/inputs-text";
import InputsPass from "../../components/inputs-pass"
import FooterForm from "../../components/footer_form";
import api from "../../../../services/api";
import { useState } from "react";
import "../../login/index.css";

export default function Register() {

  const [user, setUser] = useState();

  const handleSubmit =  (value) => {
   setUser((prevValue) => ({
    ...prevValue,
    [value.target.name]: value.target.value,
   }))
  };

  const handleClickButton = async (e) => {
    e.preventDefault();
    await api.post(
      '/user',
      {
        name: user.name,
        email: user.email,
        password: user.pass,
        type_id: 2,
        cpf: user.cpf,
        phone_number: user.phone_number,
        birth_date: user.birth_date,
      }
      ).then((res) => {
        setUser("");
        window.location.href="/confirm-register"
        console.log(res);
      });
    console.log(user);
  }

  return (
    <div className="container">
      <Header />
      <div className="Main">
        <Picture />
        <form className="formName">
          <h2>Cadastro</h2>
          <div className="inputs">
            <Inputs
              class="nome"
              htmlFor="nome"
              name="name"
              title="Nome completo"
              onChange={handleSubmit}
              type="text"
              id="name-register"
              placeholder="Digite seu nome completo"         
            />
            <Inputs
              class="email"
              htmlFor="email"
              name="email"
              title="Email"
              onChange={handleSubmit}
              type="email"
              id="email-register"
              placeholder="Digite seu email"         
            />

            <Inputs 
              class="cpf"
              htmlFor="cpf"
              name="cpf"
              title="Insira o seu CPF"
              onChange={handleSubmit}
              type="text"
              id="cpf"
              placeholder="Digite o seu CPF"
            />

            <Inputs 
              class="date"
              htmlFor="date-user"
              name="birth_date"
              title="Data de nascimento"
              onChange={handleSubmit}
              type="date"
              id="date-user"
            />

            <Inputs
              class="phone"
              htmlFor="telefone"
              name="phone_number"
              title="Telefone"
              onChange={handleSubmit}
              id="telefone"
              placeholder="(83) 22422-7432"
            />

             <InputsPass
              class="password"
              htmlFor="password-register"
              name="pass"
              title="Senha"
              onChange={handleSubmit}
              type="password"
              id="password-register"
              placeholder="Digite sua senha"         
            />
            <InputsPass
              class="password-repeat"
              htmlFor="password-register-repeat"
              name="repeatPass"
              title="Repetir senha"
              onChange={handleSubmit}
              type="password"
              id="password-register-repeat"
              placeholder="Digite sua senha"         
            />  
          </div>
          <button onClick={handleClickButton} className="auth-btn">ENTRAR</button>
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
