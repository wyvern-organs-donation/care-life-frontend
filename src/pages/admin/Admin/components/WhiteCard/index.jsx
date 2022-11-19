import React from "react";
import "./style.css";

function WhiteCard({title, imgSrc, count}) {
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="img-container">
          <img src={imgSrc} />
        </div>
        <span className="count">{count}</span>
      </div>
      <h3>{title}</h3>
      <a className="card-link" href='#'>Saiba Mais<img src="/src/assets/admin/arrow-right.svg" /></a>
    </div>
  );
}

export default WhiteCard;