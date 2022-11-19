import React from 'react'
import './style.css'
  
const MainCard = () => {
  return (
    <div className="section">
      <div>
        <h3>Olá, Admin</h3>
        <p>Pacientes da instituição cadastrado no site</p>
        <a href='#'>Histórico</a>
      </div>
        <img src="/src/assets/admin/main-card.png" />
    </div>
  );
}
  
export default MainCard;