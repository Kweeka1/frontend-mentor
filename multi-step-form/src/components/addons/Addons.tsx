import { ChangeEvent } from "react";
import Addon from "../ui/Addon";

interface AddonsProps {
  form: IForm;
  handleChange: (ev: ChangeEvent<HTMLInputElement>) => void;
}

const Addons: React.FC<AddonsProps> = ({ form, handleChange }) => {

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-ubuntu-bd text-slate-700 tracking-wide">
        Pick add-ons
      </h1>
      <p className="text-gray-400 mt-1">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="py-8 flex flex-col gap-5">
        <Addon addonTitle="Online service" addonDescription="Access to multiplayer games" isSelected={true} />
        <Addon addonTitle="Larger storage" addonDescription="Extra 1TB of cloud save" isSelected={false} />
        <Addon addonTitle="Customizable Profile" addonDescription="Custom theme on your profile" isSelected={false} />
      </div>
    </div>
  );
};

export default Addons;
