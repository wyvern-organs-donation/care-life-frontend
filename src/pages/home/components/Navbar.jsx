import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

export function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

    return(
      <div className="Navbar">
      <span className="nav-logo">Care Life</span>
      <div className="nav-items">
          <Link to="/">Início</Link>
          {user ? (
            <>
            {user.type_id == 4 || user.type_id == 3 ? (
              <Link to="/admin">Sua Conta</Link>
            ) : (
              <Link to="/user">Sua Conta</Link>
            )}
            </>
          ) : (
            <>
              <Link to="/login">Entrar</Link>
              <Link to="/register">Cadastrar</Link>
            </>
          )}
      </div>
  </div>
    )
}
