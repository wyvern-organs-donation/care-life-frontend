import { useContext } from "react"
import { StepperContext } from "../../contexts/StepperContext"

const SecondForm = () => {
  const { userData, setUserData } = useContext(StepperContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

  return (
    <div className="flex flex-col">

            <div className="w-full mx-2 flex-1">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Endereço
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 roudend">
                    <input onChange={handleChange} value={userData['adress'] || ""}
                        name="adress" placeholder="Endereço" className="p-1 px-2 apperance-none outline-none w-full
                    text-gray-800" />
                </div>
            </div>

            <div className="flex space-x-4 w-full mx-2 flex-1">
            <div className="w-full mx-2 flex-1">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Cidade
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 roudend">
                    <input onChange={handleChange} value={userData['city'] || ""}
                        name="city" placeholder="Cidade" className="p-1 px-2 apperance-none outline-none w-full
                    text-gray-800" />
                </div>
            </div>

            <div className="w-full mx-2 flex-1">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Estado
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 roudend">
                    <input onChange={handleChange} value={userData['state'] || ""}
                        name="state" placeholder="Estado" className="p-1 px-2 apperance-none outline-none w-full
                    text-gray-800" />
                </div>
            </div>
            </div>

            <div className="flex space-x-4 w-full mx-2 flex-1">
            <div className="w-full mx-2 flex-1">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Pais
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 roudend">
                    <input onChange={handleChange} value={userData['country'] || ""}
                        name="country" placeholder="Pais" className="p-1 px-2 apperance-none outline-none w-full
                    text-gray-800" />
                </div>
            </div>

            <div className="w-full mx-2 flex-1">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    CEP
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 roudend">
                    <input onChange={handleChange} value={userData['cep'] || ""}
                        name="cep" placeholder="CEP" className="p-1 px-2 apperance-none outline-none w-full
                    text-gray-800" />
                </div>
            </div>
            </div>

            



        </div>
  )
}

export default SecondForm