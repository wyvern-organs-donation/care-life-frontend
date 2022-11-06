import OTPBox from './OtpInput'
import './secondForm.css'

function SecondForm() {
    return (
        <div className="FormContent">
            <h3>Bem-vindo</h3>
            <h4>Doe orgãos, doe vida</h4>
            <form>
                <label className="SubTitle">termo de autorização de doação de órgãos e tecidos</label>
                <div className="NumbersFormPosition">
                    <div className="NumbersForm">
                        <div className="NumbersFormContent">
                            <div className="NumbersFormCircle">
                                <span className="BigNumber">7<span className="SmallNumber">/15</span></span>
                            </div>
                            <div className="NumbersFormCircleBlue">
                                <span className="BigNumberBlue">8<span className="SmallNumberBlue">/15</span></span>
                            </div>
                            <div className="NumbersFormCircleBlue">
                                <span className="BigNumberBlue">9<span className="SmallNumberBlue">/15</span></span>
                            </div>
                            <div className="NumbersFormCircle">
                                <span className="BigNumber">10<span className="SmallNumber">/15</span></span>
                            </div>
                            <div className="NumbersFormCircle">
                                <span className="BigNumber">11<span className="SmallNumber">/15</span></span>
                            </div>
                            <div className="NumbersFormCircle">
                                <span className="BigNumber">12<span className="SmallNumber">/15</span></span>
                            </div>
                            <div className="NumbersFormCircle">
                                <span className="BigNumber">13<span className="SmallNumber">/15</span></span>
                            </div>
                            <div className="NumbersFormCircle">
                                <span className="BigNumber">14<span className="SmallNumber">/15</span></span>
                            </div>
                            <div className="NumbersFormCircle">
                                <span className="BigNumber">15<span className="SmallNumber">/15</span></span>
                            </div>
                        </div>
                        <div className="NumbersFormInformation">
                            <span>Respónsavel pela doação</span>
                            <span>RG</span>
                            <span>CPF</span>
                            <span>Sexo</span>
                            <span>Endereço</span>
                            <span>Autorização Judicial confirmação</span>
                            <span>Telefone</span>
                            <span>Email</span>
                            <span>Autorização de consentimento</span>
                        </div>
                        <div className="NumbersFormData">
                            <div className="SelectStyle">
                                <select>
                                    <option value="0">Escolha uma opção</option>
                                    <option value="1">Mãe</option>
                                    <option value="2">Pai</option>
                                </select>
                            </div>
                            <div className="userInput">
                               <OTPBox/>
                            </div>
                            <div>
                                <select>
                                    <option value="">Escolha uma opção</option>
                                </select>
                            </div>
                            <div>
                                <select>
                                    <option value="">Escolha uma opçãoffkfkfffkf</option>
                                </select>
                            </div>
                            <div>
                                <select>
                                    <option value="">Escolha uma opção</option>
                                </select>
                            </div>
                            <div>
                                <select>
                                    <option value="">Escolha uma opçãoffkfkfffkf</option>
                                </select>
                            </div>
                            <div>
                                <select>
                                    <option value="">Escolha uma opção</option>
                                </select>
                            </div>
                            <div>
                                <select>
                                    <option value="">Escolha uma opçãoffkfkfffkf</option>
                                </select>
                            </div>
                            <div>
                                <select>
                                    <option value="">Escolha uma opçãoffkfkfffkf</option>
                                </select>
                            </div>
                        </div>


                    </div>
                </div>
            </form>
        </div>
    )
}

export default SecondForm