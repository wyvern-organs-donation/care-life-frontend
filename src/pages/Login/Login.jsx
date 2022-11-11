import React from "react";
import "./login.css";

function Login() {
  return (
    <div>
      <div className="vectors">
        <img src="src/assets/Vector 1.svg" alt="" className="vector1" />
        <img src="src/assets/Vector 2.svg" alt="" className="vector2" />
      </div>
      <div className="Main">
        <picture>
          <img
            src="src/assets/nurse-man-holds-heart-isolated-white-background-removebg-preview 2.svg"
            alt="Imagem de médico"
            className="Doctor-Image"
          />
        </picture>
        <form>
          <h2>Login</h2>
          <div className="inputs email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email-login"
              placeholder="Digite seu email"
            />
          </div>
          <div className="inputs password">
            <label htmlFor="passwor-login">Senha</label>
            <input
              type="password"
              name="password-login"
              id="password-login"
              placeholder="Digite sua senha"
            />
            <img src="src/assets/eye off.svg" alt="" />
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
          <button type="submit">ENTRAR</button>
          <div className="not-registered">
            <p>Ainda não tem conta?</p>
            <a href="#">
              <strong>Cadastre-se</strong>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
