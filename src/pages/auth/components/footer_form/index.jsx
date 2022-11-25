import { Link } from "react-router-dom";

export default function FooterForm({nameClass, text, url, classFooter, link}) {
    return (
        <div className={nameClass}>
            <p>{text}</p>
            <Link to={url} className={classFooter}>
                <strong>{link}</strong>
            </Link>
      </div>
    );
}