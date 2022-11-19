import { useContext } from "react"
import { StepperContext } from "../../contexts/StepperContext"
import { DateTimePicker } from "../../form/DateTimePicker";


const FirstForm = () => {

    const { userData, setUserData } = useContext(StepperContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };


    return (
        <div className="flex flex-col">

            <div className="w-full mx-2 flex-1">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Nome Completo
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 roudend">
                    <input onChange={handleChange} value={userData['name'] || ""}
                        name="name" placeholder="Nome" className="p-1 px-2 apperance-none outline-none w-full
                    text-gray-800" />
                </div>
            </div>

            <div className="w-full mx-2 flex-1">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Contato
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 roudend">
                    <input onChange={handleChange} value={userData['phone'] || ""}
                        name="phone" placeholder="Contato" className="p-1 px-2 apperance-none outline-none w-full
                    text-gray-800" />
                </div>
            </div>



            <div className="flex space-x-4 w-full mx-2 flex-1">

                <div className="w-full mx-2 flex-1">
                    <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                        Contato
                    </div>
                    <div className="bg-white my-2 p-1 flex border border-gray-200 roudend">
                        <input onChange={handleChange} value={userData['phone'] || ""}
                            name="phone" placeholder="Contato" className="p-1 px-2 apperance-none outline-none w-full
                    text-gray-800" />
                    </div>
                </div>

                <div className="w-full mx-2 flex-1">
                    <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                        CPF
                    </div>
                    <div className="bg-white my-2 p-1 flex border border-gray-200 roudend">
                        <input onChange={handleChange} value={userData['phone'] || ""}
                            name="phone" placeholder="Digite seu cpf" className="p-1 px-2 apperance-none outline-none w-full
                    text-gray-800" />
                    </div>
                </div>

            </div>

            <div className="flex space-x-4 w-full mx-2 flex-1">

                <div className="w-full mx-2 flex-1">
                    <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                        Sexo
                    </div>

                    <div class="flex justify-center">
                        <div class="mb-3 xl:w-96">
                            <select className="bg-white my-2 p-1 flex border border-gray-200 roudend">
                                <option selected>Escolha seu genero</option>
                                <option value="1">Masculino</option>
                                <option value="2">Feminino</option>
                                <option value="3">Indefinido</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div>
                    <div className=" font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                        Data de Nascimento
                    </div>
                    <DateTimePicker />
                </div>

            </div>

        </div>
    )

}

export default FirstForm