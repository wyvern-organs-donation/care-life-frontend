import React from "react";
import "./style.css";

function WhiteCard({title}) {
  return (
    <div className="card-container">
        <h3>{title}</h3>
        <a href='#'>Saiba Mais </a>
    </div>
  );
}

export default WhiteCard;