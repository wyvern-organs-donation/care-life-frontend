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
        <ul>
          <li>
            <Link exact to="/">Início</Link>
          </li>
          <li>
            <Link to="/login">Entrar</Link>
          </li>
          <li>
            <Link to="/register">Cadastrar</Link>
          </li>
          <li>
            <Link to="/porque-doar">Porque Doar</Link>
          </li>
          <li>
            <Link to="/forum">Forúm</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
