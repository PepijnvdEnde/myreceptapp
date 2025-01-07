import React, {useState} from 'react';
import {LuScroll} from "react-icons/lu";

const InstructionPanel = ({data}) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [simple, setSimple] = useState(true);

    const nextStep = () => {
        if (currentStep < data.steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const switchMode = () => {
        setSimple(!simple)
    }

    return (
        <div className="w-96 h-min bg-gray-200 rounded-lg p-3 ">
            <div className="flex justify-between">
                <h2 className="text-lg font-bold">Instructies</h2>
                <LuScroll onClick={switchMode} className="cursor-pointer"/>
            </div>
            {simple ? (
                <div className="ml-3 transition ease-in-out delay-150">
                    <div className="my-1">
                        <p className="text-[#5578f0] bg-[#FAF8F6] rounded-full w-8 h-8 flex items-center justify-center mr-3">
                            {currentStep + 1}
                        </p>
                        <p>{data.steps[currentStep]}</p>
                    </div>
                    <div className="flex justify-between mt-4">
                        <button onClick={prevStep}
                            className="px-4 py-2 bg-blue-500 text-[#FAF8F6] rounded-lg disabled:opacity-50"
                            disabled={currentStep === 0}>
                            Vorige
                        </button>
                        <button onClick={nextStep}
                            className="px-4 py-2 bg-blue-500 text-[#FAF8F6] rounded-lg disabled:opacity-50"
                            disabled={currentStep === data.steps.length - 1}>
                            Volgende
                        </button>
                    </div>
                </div>
            ) : (
                <div className="ml-3 w-96 h-min">
                    {data.steps.map((instruction, index) => (
                        <div className="my-1 p-2" key={index}>
                            <p className="text-[#5578f0] bg-[#FAF8F6] rounded-full w-8 h-8 flex items-center justify-center mr-3">
                                {index + 1}
                            </p>
                            <p className="w-11/12">{instruction}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default InstructionPanel;
