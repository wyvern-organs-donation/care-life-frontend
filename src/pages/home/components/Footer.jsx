import Phone from '../images/Phone.png'
import Facebook from '../images/Facebook.png'
import Twitter from '../images/Twitter.png'
import Instagram from '../images/Instagram.png'
import Linkedin from '../images/Linkedin.png'
import ChatIcon from '../images/ChatIcon.png'
import "./Footer.css"

export function Footer() {
    return(
        <div className="Footer">
            <ul className="container">
            <li className="CA">
                <p>Central de Atendimento</p>
                <p>São Paulo</p>
                <p><img src={ Phone } />+55 11 0000-0000</p>
                <p><img src={ Phone } />+55 11 0000-0000</p>
                <p><img src={ Phone } />+55 11 0000-0000</p>
            </li>
            <li className="CA">
                <p>Fale Conosco</p>
                <p id="img"><img src={ChatIcon} /></p>
                <p>Trabalhe Conosco</p>
            </li>
            <li className="CA">
                <p>Nossos Canais</p>
                <div id="sM">
                    <img className="sC" src={Facebook} />
                    <img className="sC" src={Twitter} />
                    <img className="sC" src={Instagram} />
                    <img className="sC" src={Linkedin} />
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