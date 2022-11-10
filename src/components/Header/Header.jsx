import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="Header">
      <a href="#"><img src="/src/assets/Care Life.svg" alt="Logo da CareLife" /></a>
      <nav className="Menu-Links">
        <ul>
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Entrar</a>
          </li>
          <li>
            <a href="#">Cadastrar</a>
          </li>
          <li>
            <a href="#">Porque Doar</a>
          </li>
          <li>
            <a href="#">Forúm</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
