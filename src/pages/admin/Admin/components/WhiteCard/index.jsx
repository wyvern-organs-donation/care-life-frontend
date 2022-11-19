import React from "react";
import "./style.css";

function WhiteCard({title, imgSrc, count}) {
  return (
    <div className="card-container">
      <div style={{display: 'flex'}}>
      <div className="img-container">
        <img src={imgSrc} />
      </div>
      {count}
      </div>
      <h3>{title}</h3>
      <a href='#'>Saiba Mais</a>
    </div>
  );
}

export default WhiteCard;