import React from "react";
import './navbar.css'

function Navbar() {
  return (
    <div className='rowC'>
      <div className="navbar">
        <a href="#"><img src="/src/assets/admin/gg_menu-cake.svg" alt="menu" /></a>
        <a href="#"><img src="/src/assets/admin/ci_dashboard.svg" alt="dashboard" /></a>
        <a href="#"><img src="/src/assets/admin/entypo_bar-graph.svg" alt="grafico" /></a>
        <a href="#"><img src="/src/assets/admin/ci_settings-filled.svg" alt="configurações" /></a>
        <a href="#"><img src="/src/assets/admin/iconoir_profile-circled.svg" alt="grafico" /></a>
        <a href="#"><img src="/src/assets/admin/material-symbols_auto-schedule-sharp.svg" alt="agenda" /></a>
        <a href="#"><img src="/src/assets/admin/Vector.svg" alt="sair" /></a>
      </div>
    </div>
  )
}
export default Navbar;