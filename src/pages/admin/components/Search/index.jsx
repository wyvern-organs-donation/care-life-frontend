import React, {useState} from 'react';
import './style.css';

const Search = ({title, handler, options}) => {
  const [selected, setSelected] = useState(options[0].accessor);
  return (
    <div className='search'>
        <h3>Painel de Controle - {title}</h3>
        <input type="text" onChange={event => handler(event.target.value, selected)}></input>
        <select onChange={event => setSelected(event.target.value)}>
        {options.map(column => {
            return (
              <option value={column.accessor}>
                {column.label}
              </option>
            )
          })}
        </select>
        <input type="date" placeholder='dd/mm/yy'></input>
    </div>
  );
};

export default Search;
