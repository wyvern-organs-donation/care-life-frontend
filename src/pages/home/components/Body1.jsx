import './Body1.css'
import LogoParceiros1 from '../images/LogoParceiros1.png'
import LogoParceiros2 from '../images/LogoParceiros2.png'
import LogoParceiros3 from '../images/LogoParceiros3.png'
import LogoParceiros4 from '../images/LogoParceiros4.png'
import CheckBox from '../images/Vetor Confirm.svg'

export function Body1(){
    return(
        <div className="body1">
            <div className='word'>
                <h2>Parceiros</h2>
            </div>
            <div id="logoParc">
                <a href='https://spdm.org.br/onde-estamos/hospitais-e-pronto-socorros/hospital-geral-de-guarulhos/' target="_blank"><img src={ LogoParceiros1 } width="50%"/></a>
                <a href='https://spdm.org.br/onde-estamos/hospitais-e-pronto-socorros/hospital-geral-de-guarulhos/' target="_blank"><img src= { LogoParceiros2 } width="50%"/></a>
                <a href='https://spdm.org.br/onde-estamos/hospitais-e-pronto-socorros/hospital-geral-de-guarulhos/' target="_blank"><img src={ LogoParceiros3 } width="50%"/></a>
                <a href='https://spdm.org.br/onde-estamos/hospitais-e-pronto-socorros/hospital-geral-de-guarulhos/' target="_blank"><img src={ LogoParceiros4 } width="50%"/></a>
            </div>
            <div className='textInfo'>
                <div id='tWD'>
                    <p>Por que doar órgãos?</p>
                </div>
                <div id='wD'>
                    <p>A doação de órgãos proporciona o prolongamento da expectativa </p>
                    <p>de vida de pessoas que precisam de um transplante, permitindo o </p>
                    <p>restabelecimento da saúde e, por consequência, a retomada das </p>
                    <p>atividades normais. Devido ao número de partes do corpo que </p>
                    <p>podem ser cedidas, cada doador pode salvar oito vidas ou mais.</p>
                </div>                
            </div>
            <div>
                <div id='beneficios'>
                    <div className='bnf'>
                            <img className='img' src={ CheckBox } />
                            <ul>
                                <span>Benefícios para quem doar!</span>
                                <li>Auxílio Funeral</li>
                                <li>Insenção de taxas e tarifas</li>
                            </ul>
                    </div>
                    <div className='bnf'>
                            <img className='img' src={ CheckBox } />
                            <ul>
                                <span>Benefícios para quem doar!</span>
                                <li>Auxílio Funeral</li>
                                <li>Insenção de taxas e tarifas</li>
                            </ul>
                    </div>
                    <div className='bnf'>
                            <img className='img' src={ CheckBox } />
                            <ul>
                                <span>Benefícios para quem doar!</span>
                                <li>Auxílio Funeral</li>
                                <li>Insenção de taxas e tarifas</li>
                            </ul>
                    </div>
                </div>
            </div>       
        </div>
    )
}