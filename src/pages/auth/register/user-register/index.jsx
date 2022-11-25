import React from "react";

import Header from "../../components/header";
import Picture from "../../components/picture";
import Inputs from "../../components/inputs-text";
import InputsPass from "../../components/inputs-pass"
import FooterForm from "../../components/footer_form";
import api from "../../../../services/api";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../login/index.css";

export default function Register() {

  const [user, setUser] = useState();

  const navigate = useNavigate();

  const handleSubmitValues = (value) => {
   setUser((prevValue) => ({
    ...prevValue,
    [value.target.name]: value.target.value,
   }))
  };

  const handleClickButton = async (e) => {
    e.preventDefault();
    var typeid = 0
    try {
      const response = await api.get("/typeUser")
      response.data.forEach(type => {
          if (type.name == 'Doador') {
            console.log(type.id)
            typeid = type.id
          }
      })
    } catch(err) {
        console.error("ops! ocorreu um erro" + err);
    }
    try {
      const response = await api.post(
        '/user',
        JSON.stringify(
          {
            name: user.name,
            email: user.email,
            password: user.password,
            type_id: typeid,
            cpf: user.cpf,
            phone_number: user.phone_number,
            birth_date: user.birth_date,
          }
        ),
        {
          headers: { "Content-Type": "application/json" },
        });
        localStorage.setItem("user", JSON.stringify(response?.data?.user));
        console.log(response.data);
        localStorage.setItem("userId", JSON.stringify(response?.data?.user.id));
        navigate('/confirm-register');
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="container">
      <Header />
      <div className="Main">
        <Picture />
        <form className="formName" onSubmit={(handleClickButton)}>
          <h2>Cadastro</h2>
          <div className="inputs">
            <Inputs
              nameClass="nome"
              htmlFor="nome"
              name="name"
              title="Nome completo"
              onChange={handleSubmitValues}
              type="text"
              id="name-register"
              placeholder="Digite seu nome completo"
            />

            <Inputs
              nameClass="email"
              htmlFor="email"
              name="email"
              title="Email"
              onChange={handleSubmitValues}
              type="email"
              id="email-register"
              placeholder="Digite seu email"
            />

            <Inputs
              nameClass="cpf"
              htmlFor="cpf"
              name="cpf"
              title="Insira o seu CPF"
              onChange={handleSubmitValues}
              type="text"
              id="cpf"
              placeholder="Digite o seu CPF"
            />

            <Inputs
              nameClass="date"
              htmlFor="date-user"
              name="birth_date"
              title="Data de nascimento"
              onChange={handleSubmitValues}
              type="date"
              id="date-user"
            />
            <span className="error"></span>

            <Inputs
              nameClass="phone"
              htmlFor="telefone"
              name="phone_number"
              title="Telefone"
              onChange={handleSubmitValues}
              id="telefone"
              placeholder="(83) 22422-7432"
            />

             <InputsPass
              nameClass="password"
              htmlFor="password-register"
              name="password"
              title="Senha"
              onChange={handleSubmitValues}
              type="password"
              id="password-register"
              placeholder="Digite sua senha"
            />

            <InputsPass
              nameClass="password-repeat"
              htmlFor="password-register-repeat"
              name="repeatPass"
              title="Repetir senha"
              onChange={handleSubmitValues}
              type="password"
              id="password-register-repeat"
              placeholder="Digite sua senha"
            />
            <span className="error"></span>

          </div>
          <button type="submit" className="auth-btn">ENTRAR</button>
          <FooterForm
            nameClass="registered"
            classFooter="link"
            text="Já tem conta?"
            url="/login"
            link="Realizar login"
            />
        </form>
      </div>
    </div>
  );
}
