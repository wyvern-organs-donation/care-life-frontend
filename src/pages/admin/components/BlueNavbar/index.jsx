import React from "react";
import { Link } from 'react-router-dom';
import './style.css'

function Navbar() {
  const handleLogout = () => {
    localStorage.clear();
  };
  return (
      <nav className="navbar">
        <Link to="/"><img src="/src/assets/admin/gg_menu-cake.svg" alt="menu" /></Link>
        <Link to="/admin"><img src="/src/assets/admin/ci_dashboard.svg" alt="dashboard" /></Link>
        <Link to="/admin-user"><img src="/src/assets/admin/iconoir_profile-circled.svg" alt="usuarios" /></Link>
        <Link to="/"><img onClick={handleLogout} src="/src/assets/admin/Vector.svg" alt="sair" /></Link>
      </nav>
  )
}
export default Navbar;