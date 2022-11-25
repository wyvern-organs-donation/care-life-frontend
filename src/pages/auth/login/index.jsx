import React from "react";
import api from "../../../services/api";
import Header from "../components/header";
import Picture from "../components/picture";
import Inputs from "../components/inputs-text";
import InputsPass from "../components/inputs-pass";
import FooterForm from "../components/footer_form";
import RememberPass from "../components/remember_pass";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../login/index.css";

export default function Login() {
  const emailRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(
        "/auth",
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      localStorage.setItem("token", response?.data?.token);
      localStorage.setItem("user", JSON.stringify(response?.data?.user));
      setSuccess(true);
      //clear state and controlled inputs
      setPwd("");
      navigate("/");
    } catch (err) {
      console.error(err);
      if (!err?.response) {
        setErrMsg("Sem resposta");
      } else if (err.response?.status === 400) {
        setErrMsg(err.response?.data.info.message);
      } else {
        setErrMsg("Login falhou" + err.response?.message);
      }
      errRef.current.focus();
    }
  };

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  return (
    <div className="container">
      <Header />
      <div className="Main">
        <Picture />
        {localStorage.getItem("user") ? (
          <>
            <h1>Você já está logado</h1>
            <br />
            <p>{/* <a href="#">Go to Home</a> */}</p>
          </>
        ) : (
          <>
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <form onSubmit={handleSubmit} className="formName">
              <h2>Login</h2>
              <div className="inputs">
                <Inputs
                  class="email"
                  htmlFor="email"
                  title="Email"
                  name="email"
                  ref={emailRef}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  id="email-login"
                  placeholder="Digite seu email"
                />
                <InputsPass
                  class="password"
                  title="Senha"
                  type="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={password}
                  id="password-login"
                  placeholder="Digite sua senha"
                />
              </div>
              <RememberPass
                class="forgot-password"
                classLink="rememberLink"
                forgot="Esqueceu a senha?"
                classRemember="remember-password"
                remember="Lembrar senha"
              />
              <button className="auth-btn" type="submit">
                ENTRAR
              </button>
              <FooterForm
                class="registered"
                classFooter="link"
                text="Ainda não tem conta?"
                url="/register"
                link="Cadastre-se"
              />
            </form>
          </>
        )}
      </div>
    </div>
  );
}
