import React, { useEffect } from "react";

import Header from "../components/header";
import Picture from "../components/picture";
import Inputs from "../components/inputs-text";
import InputsPass from "../components/inputs-pass";
import api from "../../../services/api";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../login/index.css";

const User = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const navigate = useNavigate();

  const handleSubmitValues = (value) => {
    setUser((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put(
        "/user",
        JSON.stringify({
          name: user.name,
          email: user.email,
          password: user.password,
          cpf: user.cpf,
          phone_number: user.phone_number,
          birth_date: user.birth_date,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      localStorage.setItem("user", JSON.stringify(response?.data?.user));
      localStorage.setItem("userId", JSON.stringify(response?.data?.user.id));
      navigate("/confirm-register");
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="container">
      <Header />
      <div className="Main">
        <Picture />
        <form className="formName" onSubmit={handleClickButton}>
          <h2>Usuário</h2>
          <div className="inputs">
            <Inputs
              nameClass="nome"
              htmlFor="nome"
              name="name"
              title="Nome completo"
              value={user.name}
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
              value={user.email}
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
              value={user.cpf}
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
              value={
                user.birth_date?.split("T")[0].split("-").reverse().join("-") ||
                ""
              }
              onChange={handleSubmitValues}
              type="text"
              id="date-user"
            />
            <span className="error"></span>

            <Inputs
              nameClass="phone"
              htmlFor="telefone"
              name="phone_number"
              title="Telefone"
              value={user.phone_number}
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
          <button type="submit" className="auth-btn">
            ALTERAR
          </button>
          <button
            type="submit"
            className="auth-btn"
            style={{ backgroundColor: "#f44336" }}
            onClick={handleLogout}
          >
            LOGOUT
          </button>
        </form>
      </div>
    </div>
  );
};

export default User;
