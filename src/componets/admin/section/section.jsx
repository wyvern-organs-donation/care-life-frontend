import React from 'react'
import './section.css'
  
const Section = () => {
  return (
    <div className='section'>
        <h3> Olá, Admin</h3>
        <p> Pacientes da instituição cadastrado no site</p>
        <a href='#'>Historico</a>
        <img src="/src/assets/admin/removebg.svg" alt="grafico" />
    </div>
  );
}
  
export default Section