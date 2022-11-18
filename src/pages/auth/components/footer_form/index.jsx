import { Link } from "react-router-dom";

export default function FooterForm(props) {
    return (
        <div className={props.class}>
            <p>{props.text}</p>
            <Link to={props.url} className={props.classFooter}>
                <strong>{props.link}</strong>
            </Link>
      </div>
    );
}