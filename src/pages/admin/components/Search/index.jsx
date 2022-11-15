import React from 'react';
import './style.css';
  
const Search = () => {
  return (
    <div className='buscar'>
        <h3>Painel de Controle</h3>
        <input type="text"></input>
        <input type="date" placeholder='dd/mm/yy'></input>
    </div>
  );
};
  
export default Search;