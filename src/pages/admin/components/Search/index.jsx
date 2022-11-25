import React, { useState } from "react";
import "./style.css";

const Search = ({ title, handler, options, onClickRegisterButton }) => {
  const [selected, setSelected] = useState(options[0].accessor);
  return (
    <div className="search">
      <h3>Painel de Controle - {title}</h3>
      <input
        type="text"
        onChange={(event) => handler(event.target.value, selected)}
      ></input>
      <select onChange={(event) => setSelected(event.target.value)}>
        {options.map((column) => {
          return <option value={column.accessor}>{column.label}</option>;
        })}
      </select>
      <input type="date" placeholder="dd/mm/yy" />
      <div style={{ width: "100%" }}>
        <button className="register-button" onClick={onClickRegisterButton}>
          Cadastrar
        </button>
      </div>
    </div>
  );
};

export default Search;
