import React from "react";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import "./style.css";

function Navbar() {
  const handleLogout = () => {
    localStorage.clear();
  };
  return (
    <div className="rowC">
      <nav className="navbari">
        <Link to="/">
          <img
            data-tip
            data-for="homeTip"
            src="/src/assets/admin/gg_menu-cake.svg"
            alt="menu"
          />
        </Link>
        <Link to="/admin">
          <img
            data-tip
            data-for="dashTip"
            src="/src/assets/admin/ci_dashboard.svg"
            alt="dashboard"
          />
        </Link>
        <Link to="/admin-user">
          <img
            data-tip
            data-for="userTip"
            src="/src/assets/admin/iconoir_profile-circled.svg"
            alt="usuarios"
          />
        </Link>
        <Link to="/admin-institution">
          <img
            data-tip
            data-for="instTip"
            src="/src/assets/admin/iconmonstr-building-34.svg"
            alt="instituicoes"
          />
        </Link>
        <Link to="/admin-organ">
          <img
            data-tip
            data-for="organsTip"
            src="/src/assets/admin/iconmonstr-medical-7.svg"
            alt="orgaos"
          />
        </Link>
        <Link to="/">
          <img
            data-tip
            data-for="outTip"
            onClick={handleLogout}
            src="/src/assets/admin/Vector.svg"
            alt="sair"
          />
        </Link>
      </nav>
      <ReactTooltip id="homeTip" place="right" effect="solid">
        Home
      </ReactTooltip>
      <ReactTooltip id="dashTip" place="right" effect="solid">
        Dashboard
      </ReactTooltip>
      <ReactTooltip id="userTip" place="right" effect="solid">
        Usuários
      </ReactTooltip>
      <ReactTooltip id="instTip" place="right" effect="solid">
        Instituições
      </ReactTooltip>
      <ReactTooltip id="organsTip" place="right" effect="solid">
        Órgãos
      </ReactTooltip>
      <ReactTooltip id="outTip" place="right" effect="solid">
        Sair
      </ReactTooltip>
    </div>
  );
}
export default Navbar;
