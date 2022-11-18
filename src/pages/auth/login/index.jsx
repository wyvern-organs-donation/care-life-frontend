import React from "react";
import api from "../../../services/api";
import Header from "../components/header";
import Picture from "../components/picture"
import Inputs from "../components/inputs-text";
import InputsPass from "../components/inputs-pass";
import FooterForm from "../components/footer_form";
import RememberPass from "../components/remember_pass";
import { useRef, useState, useEffect } from "react";
import "../login/index.css";

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
    setErrMsg("");
  }, [email, password]);
  
  return (
    <React.Fragment>
      <Header />
      <div className="Main">
        <Picture />
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
                <Inputs
                    class="email"
                    htmlFor="email"
                    title="Email"
                    name="email"
                    ref={emailRef}
                    onChange={(e) => {
                      setEmail(e.target.value)
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
              <button className="auth-btn" type="submit">ENTRAR</button>
              <FooterForm
                class="registered"
                classFooter="link"
                text="Ainda não tem conta?"
                url="/register"
                link="Cadastre-se"
                />
            </form>
          </section>)}
      </div>
    </React.Fragment>
  );
}
