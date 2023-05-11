import { ChangeEvent, SyntheticEvent, useRef, useState } from "react";
import PersonalInfo from "../personalInfo/PersonalInfo";
import Plan from "../plan/Plan";
import Step from "../ui/Step";
import formData from "../../data/form.json";
import steps from "../../data/steps.json";
import "./form.css";
import Addons from "../addons/Addons";
import Summary from "../summary/Summary";
import SubscriptionSuccess from './../SubscriptionSuccess/SubscriptionSuccess';

const Form = () => {
  const [form, setForm] = useState<IForm>(formData as IForm);
  const [currentStep, setCurrentStep] = useState<number>(1);

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleFormSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    console.log(form);
    setCurrentStep(currentStep + 1);
  };

  const handleSwitchChange = () => {
    setForm({ ...form, isYearlyPlan: !form.isYearlyPlan });
  };

  const handlePlanSelection = (quality: Quality) => {
    setForm({ ...form, quality });
  };

  const validateStep = () => {
    if (formRef.current) {
      const formEl = formRef.current;

      if (formEl.reportValidity()) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handleAddonSelection = (addonTitle: CurrentAddons) => {
    setForm({
      ...form,
      addons: {
        ...form.addons,
        [addonTitle]: {
          ...form.addons[addonTitle],
          isSelected: !form.addons[addonTitle].isSelected,
        },
      },
    });
  };

  const handleInput = (ev: ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [ev.target.name]: ev.target.value });

  return (
    <div className="p-4 flex rounded-lg h-[550px] gap-8 shadow-lg bg-slate-50">
      <div className="background rounded-md w-[220px] h-full p-8 flex flex-col gap-6">
        {steps.map((step, index) => (
          <Step
            key={step.name}
            stepNumber={index + 1}
            stepDescription={step.name}
            selected={currentStep === index + 1}
          />
        ))}
      </div>
      <div className="pt-2 px-4 h-full w-[507px]">
        {currentStep === 5 ? (
          <SubscriptionSuccess />
        ) : (
          <form ref={formRef} className="p-4 h-full flex flex-col justify-between">
            {currentStep === 1 && (
              <PersonalInfo form={form} handleChange={handleInput} />
            )}
            {currentStep === 2 && (
              <Plan form={form} onSwitchChange={handleSwitchChange} onPlanChange={handlePlanSelection} />
            )}
            {currentStep === 3 && (<Addons form={form} onAddonSelection={handleAddonSelection} />)}
            {currentStep === 4 && <Summary form={form} />}
            <div className={`flex ${currentStep === 1 ? "justify-end" : "justify-between"} items-center`}>
              {currentStep !== 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="pr-4 pl-1 py-1 text-slate-600 hover:text-slate-700 font-ubuntu-md"
                >
                  Go back
                </button>
              )}
              {currentStep !== steps.length ? (
                <button
                  type="button"
                  onClick={validateStep}
                  className="px-6 py-3 text-sm text-white bg-blue-800 hover:bg-blue-900 rounded-md"
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleFormSubmit}
                  className="px-6 py-3 text-light font-ubuntu-md text-white bg-[#483EFF] hover:opacity-80 rounded-md duration-150 ease-in"
                >
                  Confirm
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Form;
