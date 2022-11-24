import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function Header() {
  const user = JSON.parse(localStorage.getItem("user"))
  return (
    <div className="headerl">
      <Link to="/home">
        <img src="/src/assets/authenctication/Care Life.svg" alt="Logo da CareLife" />
      </Link>
      <nav className="Menu-Links">
        <ul className="ul-header">
          <li className="list-itens">
            <Link to="/" className="links-header">Início</Link>
          </li>
          {user ? (
            <li className="list-itens">
            {user.user_types.name == "Administrador" || user.user_types.name == "Instituição" ? (
              <Link to="/admin" className="links-header">Sua Conta</Link>
            ) : (
              <><Link to="/user" className="links-header">Sua Conta</Link></>
            )}
            </li>
          ) : (
            <>
              <li className="list-itens">
                <Link to="/login" className="links-header">Entrar</Link>
              </li>
              <li className="list-itens">
                <Link to="/register" className="links-header">Cadastrar</Link>
              </li>
            </>
          )}
          <li className="list-itens">
            <Link to="/porque-doar" className="links-header">Porque Doar</Link>
          </li>
          <li className="list-itens">
            <Link to="/forum" className="links-header">Forúm</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
