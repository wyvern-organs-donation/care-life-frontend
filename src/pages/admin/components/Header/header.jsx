import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="Header">
      <h3>Care Life</h3>
      <a href="#"><img src="/src/assets/admin/bell.svg" alt="sino" /></a>
      <button>notificação</button>
    </div>
  );
}

export default Header;