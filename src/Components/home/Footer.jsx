import "./Footer.css"

export function Footer() {
    return(
        <div className="Footer">
            <ul className="container">
            <li className="CA">
                <p>Central de Atendimento</p>
                <p>São Paulo</p>
                <p><img src="./src/images/Phone.png"/>+55 11 0000-0000</p>
                <p><img src="./src/images/Phone.png"/>+55 11 0000-0000</p>
                <p><img src="./src/images/Phone.png"/>+55 11 0000-0000</p>
            </li>
            <li className="CA">
                <p>Fale Conosco</p>
                <p id="img"><img src="./src/images/ChatIcon.png"/></p>
                <p>Trabalhe Conosco</p>
            </li>
            <li className="CA">
                <p>Nossos Canais</p>
                <div id="sM">
                    <img className="sC" src="./src/images/Facebook.png"/>
                    <img className="sC" src="./src/images/Twitter.png"/>
                    <img className="sC" src="./src/images/Instagram.png"/>
                    <img className="sC" src="./src/images/Linkedin.png"/>
                </div>
            </li>
            </ul>
            <div id="copyRight">
                <p>Termos de uso e Politica de Privacidade</p>
                <p>Copyright © 2022 Fundação Care Life. Todos os direitos reservados.</p>
            </div>
        </div>
    )
}