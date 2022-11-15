import React from "react";
import Header from "../../components/header";
import "./index.css";

export default function ConfirmRegister() {
  return (
    <React.Fragment>
      <Header />
      <div className="Main">
      <picture>
          <img
            src="src/assets//authenctication/nurse-man-holds-heart-isolated-white-background-removebg-preview 2.png"
            alt=""
          />
        </picture>
        <form className="formName">
          <h2>Complete seu cadastro</h2>
          <div className="text">
            <p>Foi enviado um link de confirmação de registro, acesse-o para continuar!</p>
          </div>
          <div className="thanks">
            <h3>Agradecemos a iniciativa de cadastro. Doe orgãos, salve vidas!!</h3>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
