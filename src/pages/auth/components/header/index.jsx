import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function Header() {
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
          <li className="list-itens">
            <Link to="/login" className="links-header">Entrar</Link>
          </li>
          <li className="list-itens">
            <Link to="/register" className="links-header">Cadastrar</Link>
          </li>
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
