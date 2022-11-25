import { BiShowAlt, BiHide } from "react-icons/bi";

export default function InputsPass({ nameClass, htmlFor, title, type, name, onChange, value, id , placeholder }) {
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
            />
            <BiShowAlt className="eye"/>
        </div>
    );
};
