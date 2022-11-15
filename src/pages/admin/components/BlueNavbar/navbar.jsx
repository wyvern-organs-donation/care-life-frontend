import React from "react";
import { Link } from 'react-router-dom';
import './navbar.css'

function Navbar() {
  return (
    <div className='rowC'>
      <nav className="navbar">
        <Link to="/"><img src="/src/assets/admin/gg_menu-cake.svg" alt="menu" /></Link>
        <Link to="/admim"><img src="/src/assets/admin/ci_dashboard.svg" alt="dashboard" /></Link>
        <Link to="/"><img src="/src/assets/admin/iconoir_profile-circled.svg" alt="usuarios" /></Link>
        <Link to="/"><img src="/src/assets/admin/Vector.svg" alt="sair" /></Link>
      </nav>
    </div>
  )
}
export default Navbar;