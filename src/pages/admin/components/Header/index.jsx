import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="admin-header">
      <h3>Care Life</h3>
      <div className="header-buttons">
        <a href="#"><img src="/src/assets/admin/bell.svg" alt="sino" /></a>
        <button>notificação<img src="/src/assets/admin/arrow-down.svg" alt="seta para baixo" /></button>
      </div>
    </div>
  );
}

export default Header;