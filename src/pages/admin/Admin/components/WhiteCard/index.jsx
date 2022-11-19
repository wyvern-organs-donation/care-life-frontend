import React from "react";
import "./style.css";

function WhiteCard({title, count}) {
  return (
    <div className="card-container">
        <h3>{title}  {count}</h3>
        <a href='#'>Saiba Mais </a>
    </div>
  );
}

export default WhiteCard;