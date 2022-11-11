import OTPBox from './OtpInput'
import DatePick from './DatePicker'
import './secondForm.css'

function SecondForm() {
    return (
        <div className="FormContent">
            <h3>Bem-vindo</h3>
            <h4>Doe órgãos, doe vida</h4>
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
                            <span>Responsável pela doação</span>
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
                            <div className="UserInput">
                                <OTPBox />
                                <div className="CheckBox">
                                    <input type="checkbox" className="CheckBoxStyle" name="rg" />
                                    <label>Marque essa opção se o doador não possuir RG ou seja estrangeiro</label>
                                </div>
                            </div>
                            <div className="UserInput">
                                <OTPBox />
                                <div className="CheckBox">
                                    <input type="checkbox" className="CheckBoxStyle" name="cpf" />
                                    <label>Marque essa opção se o doador não possuir CPF ou seja estrangeiro</label>
                                </div>
                            </div>
                            <div className="BirthDateContent">
                                <div className="SelectStyle">
                                    <select>
                                        <option value="0">Escolha uma opção</option>
                                        <option value="1">Mãe</option>
                                        <option value="2">Pai</option>
                                    </select>
                                </div>
                                <div className="BirthDate">
                                    <label>Data de Nascimento</label>
                                    <DatePick/>
                                </div>
                            </div>
                            <div className="AdressContent">
                                <input type="text" name="name" className="AddressInput" />
                                <div className="SelectStyle">
                                    <select>
                                        <option value="0">Cidade</option>
                                        <option value="1">Fortaleza</option>
                                        <option value="2">Fortaleza</option>
                                    </select>
                                </div>
                            </div>
                            <div className="JudicialInput">
                                <div className="CheckBox">
                                    <input type="checkbox" className="CheckBoxStyle" name="judicial" />
                                    <ul>
                                        <li>
                                            Autorizo conforme a <a href="http://www.planalto.gov.br/ccivil_03/leis/leis_2001/l10211.htm">LEI n° 10.211</a> de Março de 2001<br />
                                            e <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/decreto/d9175.htm">Decreto 9175 de Outubro 2017</a>.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="Telephone">
                                <OTPBox />
                            </div>
                            <div className="Email">
                                <input type="text" name="name" className="EmailInput" />
                            </div>
                            <div className="ConsentAuthorization">
                                <input type="checkbox" className="CheckBoxStyle" name="authorization" />
                                <ul>
                                    <li>
                                        Autorização consetida por familares de até 2° grau conforme<br />
                                        o <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/decreto/d9175.htm">Decreto N° 9175 de Outubro 2017</a>.
                                    </li>
                                </ul>
                            </div>                         
                        </div>
                    </div>                   
                </div>
                <hr/>           
            </form>
        </div>
    )
}

export default SecondForm