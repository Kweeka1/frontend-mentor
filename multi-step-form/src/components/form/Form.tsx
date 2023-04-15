import { ChangeEvent, SyntheticEvent, useState } from "react";
import PersonalInfo from "../personalInfo/PersonalInfo";
import Step from "../ui/Step";
import "./form.css"

const Form = () => {
  const [form, setForm] = useState({});
  const [currentStep, setCurrentStep] = useState<number>(1);
  const steps = ["your info", "select plan", "add-ons", "summary"];

  const handleFormSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    console.log(form);
  }

  const validateForm = (ev) => {
    
  }

  const handleInput = (ev: ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [ev.target.name]: ev.target.value });

  return (
    <div className="p-4 flex rounded-lg h-[550px] gap-8 shadow-lg bg-slate-50">
      <div className="background rounded-md w-[220px] h-full p-8 flex flex-col gap-6">
        {
          steps.map((step, index) => (
            <Step
              key={step}
              stepNumber={index + 1}
              stepDescription={step}
              selected={currentStep === index + 1}
            />
          ))
        }
      </div>
      <div className="pt-2 px-4 h-full">
        <form className="p-4 h-full flex flex-col justify-between">
          { true 
            ? <PersonalInfo handleChange={handleInput} />
            : <PersonalInfo handleChange={handleInput} />
          }
          <div className={`flex ${currentStep === 1 ? 'justify-end' : 'justify-between'} items-center`}>
            {
              currentStep !== 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="pr-4 pl-1 py-1 text-slate-600 hover:text-slate-700 font-ubuntu-md">
                  Go back
                </button>
              )
            }
            {
              currentStep !== steps.length ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="px-4 py-2 text-sm text-white bg-blue-800 hover:bg-blue-900 rounded-md">
                  Next Step
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleFormSubmit}
                  className="px-4 py-2 text-sm text-white bg-blue-800 hover:bg-blue-900 rounded-md">
                  Submit
                </button>
              )
            }
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
