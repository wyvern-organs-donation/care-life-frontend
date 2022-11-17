import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

export function Navbar() {
    return(
        <div className="Navbar">
            <span className="nav-logo">Care Life</span>
            <div className="nav-items">
                <Link to="/">Início</Link>
                <Link to="/login">Entrar</Link>
                <Link to="/register">Cadastrar</Link>
                <Link to="/porque-doar">Porque Doar</Link>
                <Link to="/forum">Fórum</Link>
            </div>
        </div>
    )
}
