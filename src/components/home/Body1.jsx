import './Body1.css'

export function Body1(){
    return(
        <div className="body1">
            <div className='word'>
                <h2>Parceiros</h2>
            </div>
            <div id="logoParc">
                <a href='https://spdm.org.br/onde-estamos/hospitais-e-pronto-socorros/hospital-geral-de-guarulhos/' target="_blank"><img src="./src/images/LogoParceiros1.png" width="50%"/></a>
                <a href='https://spdm.org.br/onde-estamos/hospitais-e-pronto-socorros/hospital-geral-de-guarulhos/' target="_blank"><img src="./src/images/LogoParceiros2.png" width="50%"/></a>
                <a href='https://spdm.org.br/onde-estamos/hospitais-e-pronto-socorros/hospital-geral-de-guarulhos/' target="_blank"><img src="./src/images/LogoParceiros3.png" width="50%"/></a>
                <a href='https://spdm.org.br/onde-estamos/hospitais-e-pronto-socorros/hospital-geral-de-guarulhos/' target="_blank"><img src="./src/images/LogoParceiros4.png" width="50%"/></a>
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
                            <img className='img' src='./src/images/CheckBox.png'/>
                    </div>
                    <div className='bnf'>
                            <img className='img' src='./src/images/CheckBox.png'/>
                    </div>
                    <div className='bnf'>
                            <img className='img' src='./src/images/CheckBox.png'/>
                    </div>
                </div>
            </div>       
        </div>
    )
}