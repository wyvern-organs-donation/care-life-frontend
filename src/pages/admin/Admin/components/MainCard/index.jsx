import React from 'react'
import './style.css'
  
const MainCard = () => {
  return (
    <div className="main-card">
      <div>
        <h3>Olá,&nbsp;<span style={{color: '#00978F'}}>Admin</span></h3>
        <p>Pacientes da instituição cadastrado no site</p>
        <a href='#'>Históricos<img src="/src/assets/admin/arrow-right.svg" /></a>
      </div>
        <img src="/src/assets/admin/main-card.png" />
    </div>
  );
}
  
export default MainCard;