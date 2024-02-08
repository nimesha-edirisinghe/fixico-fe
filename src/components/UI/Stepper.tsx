import React, { useState } from 'react';

interface StepProps {
  step: string;
  isActive: boolean;
  index: number;
}

const Step: React.FC<StepProps> = ({ step, isActive, index }) => (
  <div className="relative">
    {index !== 0 && (
      <hr className="absolute left-0 w-1/2 border border-gray-300 top-5" />
    )}
    <div
      className={`w-10 h-10 flex items-center justify-center rounded-full ${
        isActive ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
      }`}
    >
      {index + 1}
    </div>
    <div className="absolute w-32 text-sm text-center -bottom-6">{step}</div>
  </div>
);

const Stepper: React.FC<{ steps: string[] }> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;

  const goToStep = (step: number) => setCurrentStep(step);
  const prevStep = () => goToStep(currentStep - 1);
  const nextStep = () => goToStep(currentStep + 1);

  return (
    <div className="flex justify-center max-w-lg mx-auto">
      <div className="flex items-center space-x-4">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <Step step={step} isActive={index === currentStep} index={index} />
            {index !== steps.length - 1 && (
              <hr className="w-2 border border-gray-300" />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="mt-4">
        <button
          onClick={prevStep}
          className={`px-4 py-2 ${
            isFirstStep ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isFirstStep}
        >
          Previous
        </button>
        <button
          onClick={nextStep}
          className={`ml-2 px-4 py-2 ${
            isLastStep ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isLastStep}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Stepper;
