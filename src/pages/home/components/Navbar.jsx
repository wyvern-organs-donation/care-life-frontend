import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

export function Navbar() {
    return(
        <div className="Navbar">
            <span className="nav-logo">Care Life</span>
            <div className="nav-items">
                <Link to="/">Home</Link>
                <Link to="/Signup">Entrar</Link>
                <Link to="/Signin">Cadastrar</Link>
                <Link to="/About">Porque Doar</Link>
                <Link to="/Forum">Fórum</Link>
            </div>
        </div>
    )
}
