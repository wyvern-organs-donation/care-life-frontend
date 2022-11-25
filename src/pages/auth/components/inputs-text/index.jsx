import React from "react";

export default function Inputs({ nameClass, htmlFor, title, type, name, onChange, value, id , placeholder, register }) {

    return (
        <div className={nameClass}>
            <label htmlFor={htmlFor}>{title}</label>
            <input
            type={type}
            name={name}
            onChange={onChange}
            value={value}
            id={id}
            placeholder={placeholder}
            register={register}
            />    
        </div>
    );
}