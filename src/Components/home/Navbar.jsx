import React from "react";
import './Navbar.css';

export function Navbar() {
    return(
        <div className="Navbar">
            <span className="nav-logo">Care Life</span>
            <div className="nav-items">
                <a href="/Header">Home</a>
                <a href="/Signup">Entrar</a>
                <a href="/Signin">Cadastrar</a>
                <a href="/About">Porque Doar</a>
                <a href="/Forum">Fórum</a>
            </div>
        </div>
    )
}
