export default function Inputs(props) {
    return (
        <div className={props.class}>
            <label htmlFor={props.htmlFor}>{props.title}</label>
            <input
            type={props.type}
            name={props.name}
            onChange={props.onChange}
            value={props.value}
            id={props.id}
            placeholder={props.placeholder}
            />    
        </div>
    );
}