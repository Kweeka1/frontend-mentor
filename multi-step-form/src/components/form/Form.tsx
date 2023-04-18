import { ChangeEvent, SyntheticEvent, useRef, useState } from "react";
import PersonalInfo from "../personalInfo/PersonalInfo";
import Step from "../ui/Step";
import "./form.css"

const Form = () => {
  const [form, setForm] = useState<IForm>({
    name: '',
    email: '',
    phone: '',
    plan: '',
    frequency: '',
    addons: [],
  });

  const [currentStep, setCurrentStep] = useState<number>(1);

  const steps: IStep[] = [
    {
      name: "your info",
      fields: ['name', 'email', 'phone']
    },
    {
      name: "select plan",
      fields: ['plan', 'frequency']
    },
    {
      name: "add-ons",
      fields: ['addons']
    },
    {
      name: "summary",
      fields: []
    },
  ];

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleFormSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    console.log(form);
  }

  const validateStep = () => {
    if (formRef.current) {
      const formEl = formRef.current;

      if (formEl.reportValidity()) {
        setCurrentStep(currentStep + 1);
      }
    }
  }

  const handleInput = (ev: ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [ev.target.name]: ev.target.value });

  return (
    <div className="p-4 flex rounded-lg h-[550px] gap-8 shadow-lg bg-slate-50">
      <div className="background rounded-md w-[220px] h-full p-8 flex flex-col gap-6">
        {
          steps.map((step, index) => (
            <Step
              key={step.name}
              stepNumber={index + 1}
              stepDescription={step.name}
              selected={currentStep === index + 1}
            />
          ))
        }
      </div>
      <div className="pt-2 px-4 h-full">
        <form ref={formRef} className="p-4 h-full flex flex-col justify-between">
          { currentStep === 1 && <PersonalInfo form={form} handleChange={handleInput} /> }
          { currentStep === 2 && <PersonalInfo form={form} handleChange={handleInput} /> }
          { currentStep === 3 && <PersonalInfo form={form} handleChange={handleInput} /> }
          { currentStep === 4 && <PersonalInfo form={form} handleChange={handleInput} /> }
          <div className={`flex ${currentStep === 1 ? 'justify-end' : 'justify-between'} items-center`}>
            {
              currentStep !== 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="pr-4 pl-1 py-1 text-slate-600 hover:text-slate-700 font-ubuntu-md"
                >
                  Go back
                </button>
              )
            }
            {
              currentStep !== steps.length ? (
                <button
                  type="button"
                  onClick={validateStep}
                  className="px-4 py-2 text-sm text-white bg-blue-800 hover:bg-blue-900 rounded-md"
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleFormSubmit}
                  className="px-4 py-2 text-sm text-white bg-blue-800 hover:bg-blue-900 rounded-md"
                >
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
