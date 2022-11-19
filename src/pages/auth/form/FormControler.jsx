import React, {useState} from 'react'

import FirstForm from '../components/formComponents/firstForm';
import SecondForm from '../components/formComponents/secondForm';
import ThirdForm from '../components/formComponents/thirdForm';

import Stepper from '../components/formComponents/Stepper'
import StepperControll from '../components/formComponents/StepperControll'
import { StepperContext } from '../contexts/StepperContext';


const FormControler = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState('');
    const [finalData, setFinalData] = useState([]);

    const steps = [
        'Account Information',
        'Personal Details',
        'Complete'
    ];

    const displaySteps = (step) => {
        switch(step) {
            case 1:
                return <FirstForm/>

            case 2:
                return <SecondForm/>

            case 3:
                return <ThirdForm/>
            
            default:
        }
    }

    const handleClick = (direction) => {
        let newStep = currentStep;

        direction === 'next' ? newStep++ : newStep--;

        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    }

    return (

        <div className='md: w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
            
            <div className='container horizontal mt-5'>
                <Stepper  steps={steps} currentStep={currentStep}/>

                <div className='my-10 p-10'>
                    <StepperContext.Provider value={{
                        userData,
                        setUserData,
                        finalData,
                        setFinalData
                    }}>
                        {displaySteps(currentStep)}
                    </StepperContext.Provider>
                </div>
            </div>

            <StepperControll handleClick = {handleClick} currentStep= {currentStep} steps= {steps}/>
        </div>
    )
}

export default FormControler