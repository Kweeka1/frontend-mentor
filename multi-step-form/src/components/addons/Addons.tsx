import Addon from "../ui/Addon";

interface AddonsProps {
  form: IForm;
  onAddonSelection: (addonTitle: CurrentAddons) => void;
}

const Addons: React.FC<AddonsProps> = ({ form, onAddonSelection }) => {
  const { addons, isYearlyPlan } = form;

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-ubuntu-bd text-slate-700 tracking-wide">
        Pick add-ons
      </h1>
      <p className="text-gray-400 mt-1">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="py-8 flex flex-col gap-5">
        {
          Object.entries(addons).map(([name, addon]) => (
            <Addon
              key={name}
              addonTitle={addon.title}
              addonDescription={addon.description}
              isSelected={addon.isSelected}
              price={addon.price}
              frequency={isYearlyPlan ? "yearly" : "monthly"}
              onClick={() => onAddonSelection(name as CurrentAddons)}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Addons;
