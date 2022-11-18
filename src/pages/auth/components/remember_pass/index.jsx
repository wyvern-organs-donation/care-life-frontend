import { Link } from "react-router-dom";

export default function RememberPass(props) {
    return (
        <div className={props.class}>
            <Link to={props.link} className={props.classLink}>
                <strong>{props.forgot}</strong>
            </Link>
            <div className={props.classRemember}>
                <p>
                    <strong>{props.remember}</strong>
                </p>
                <input type="checkbox" name="checkbox" id="checkbox" />
            </div>
        </div>
    );
};