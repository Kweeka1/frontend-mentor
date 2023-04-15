import { useState } from "react";
import PersonalInfo from "../personalInfo/PersonalInfo";
import Step from "../ui/Step";
import "./form.css"

const Form = () => {
  const [isFirstStep, setIsFirstStep] = useState<boolean>(true);
  const [isLastStep, setIsLastStep] = useState<boolean>(true);

  return (
    <div className="p-4 flex rounded-lg h-[550px] gap-8 shadow-lg bg-slate-50">
      <div className="background rounded-md w-[220px] h-full p-8 flex flex-col gap-6">
        <Step stepNumber={1} stepDescription="your info" selected={true} />
        <Step stepNumber={2} stepDescription="select plan" />
        <Step stepNumber={3} stepDescription="add-ons" />
        <Step stepNumber={4} stepDescription="summary" />
      </div>
      <div className="pt-2 px-4 h-full">
        <form className="p-4 h-full flex flex-col justify-between">
          <PersonalInfo />
          <div className="flex justify-between items-center">
            {isFirstStep && (
              <button className="pr-4 pl-1 py-2 text-slate-600 hover:text-slate-700 font-ubuntu-md">
                Go back
              </button>
            )}
            {isLastStep ? (
              <button className="px-4 py-2 text-sm text-white bg-blue-800 hover:bg-blue-900 rounded-md">
                Next Step
              </button>
            ) : (
              <button className="px-4 py-2 text-sm text-white bg-blue-800 hover:bg-blue-900 rounded-md">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
