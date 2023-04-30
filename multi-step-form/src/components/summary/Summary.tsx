interface SummaryProps {
  form: IForm;
}

const Summary: React.FC<SummaryProps> = ({ form }) => {
  const { quality, isYearlyPlan, addons, price } = form;
  const frequency: Frequency = isYearlyPlan ? "yearly" : "monthly";
  const freq = isYearlyPlan ? "yr" : "mo";
  const addonsSelected = Object.values(addons).filter((addon) => addon.isSelected)
  const addonsCost = addonsSelected.reduce((acc, addon) => acc + addon.price[frequency], 0);
  const planCost = price[frequency].values[quality];

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-ubuntu-bd text-slate-700 tracking-wide">
        Finishing up
      </h1>
      <p className="text-gray-400 mt-1">
        Double-check everything looks OK before confirming.
      </p>
      <div className="py-8">
        <div className="bg-slate-100 px-6 py-4 flex flex-col rounded-md gap-5">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-ubuntu-bd text-light text-slate-600">{quality[0].toUpperCase() + quality.slice(1)} ({frequency[0].toUpperCase() + frequency.slice(1)})</h3>
              <a href="#" className="text-light font-ubuntu text-violet-600">Change</a>
            </div>
            <p className="font-ubuntu-bd text-light text-slate-700">${planCost}/{freq}</p>
          </div>
          <hr />
          <div className="flex flex-col gap-4">
            {
              addonsSelected.map((addon) => (
                <div className="flex justify-between">
                  <h3 className="font-ubuntu text-sm text-gray-400">{addon.title}</h3>
                  <p className="font-ubuntu text-sm text-slate-800">+${addon.price[frequency]}/{freq}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className="px-6 py-6 flex justify-between items-center">
          <p className="font-ubuntu text-sm text-gray-400">Total (per {frequency.slice(0, -2)})</p>
          <p className="font-ubuntu-bd text-lg text-[#483EFF]">+${addonsCost + planCost}/{freq}</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;