import React from "react";
import Header from "../../components/header";
import Picture from "../../components/picture";
import Inputs from "../../components/inputs-text";
import InputsPass from "../../components/inputs-pass"
import FooterForm from "../../components/footer_form";
import api from "../../../../services/api";
import { useRef, useEffect, useState } from "react";
import "../../login/index.css";

export default function Register() {

  const emailRef = useRef();
  const errRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passRepeat, setPassRepeat] = useState("");
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const response = api.post(
        "/user",
        JSON.stringify({name, email, password, passRepeat}),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setSuccess(true);
      setName("");
      setEmail("");
      setPassword("");
      setPassRepeat("");
    } catch (err) {
      console.log(err);
      if (!err?.response) {
        setErrMsg("Servidor não está respondendo!");
      } else if (err.response?.status === 400) {
        setErrMsg("Verifique seus dados!");
      } else {
        setErrMsg("Falha ao registrar: " + err.response?.message);
      }
      errRef.current.focus();
    }
  }

  useEffect(() => {
    setErrMsg("");
  }, [name, email, password]);

  return (
    <React.Fragment>
      <Header />
      <div className="Main">
        <Picture />
        {success ? (
          <section>
            <h1>Usuário cadastrado</h1>
          </section>
        ) : (
          <section>
            <p ref={errRef} className={errMsg ?  "errmsg" : "offscreen"} aria-live="assertive">
              {errMsg}
            </p>
        <form className="formName" onSubmit={handleSubmit}>
          <h2>Cadastro</h2>
          <div className="inputs">
            <Inputs
              class="nome"
              htmlFor="nome"
              title="Nome completo"
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name-register"
              placeholder="Digite seu nome completo"         
            />
            <Inputs
              class="email"
              htmlFor="email"
              title="Email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email-register"
              placeholder="Digite seu email"         
            />
             <InputsPass
              class="password"
              htmlFor="password-register"
              title="Senha"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password-register"
              placeholder="Digite sua senha"         
            />
            <InputsPass
              class="password-repeat"
              htmlFor="password-register-repeat"
              title="Repetir senha"
              onChange={(e) => setPassRepeat(e.target.value)}
              type="password"
              id="password-register-repeat"
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
        </section>
        )}
      </div>
    </React.Fragment>
  );
}
