import React from 'react';
import './style.css';
  
const Search = ({title}) => {
  return (
    <div className='search'>
        <h3>Painel de Controle - {title}</h3>
        <input type="text"></input>
        <input type="date" placeholder='dd/mm/yy'></input>
    </div>
  );
};
  
export default Search;