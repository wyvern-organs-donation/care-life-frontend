export default function Inputs(props) {
    return (
        <div className={props.class}>
            <label htmlFor={props.htmlFor}>{props.title}</label>
            <input
            type={props.type}
            name={props.name}
            ref={props.ref}
            onChange={props.onChange}
            // onChange={(e) => setEmail(e.target.value)}
            value={props.value}
            id={props.id}
            placeholder={props.placeholder}
            />    
        </div>
    );
}