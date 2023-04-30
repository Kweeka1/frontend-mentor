interface AddonsProps extends React.HTMLAttributes<HTMLDivElement> {
  isSelected?: boolean;
  addonTitle: string;
  addonDescription: string;
  frequency: Frequency;
  price: { [key in Frequency]: number };
}

const Addon: React.FC<AddonsProps> = ({ isSelected, addonTitle, addonDescription, price, frequency, ...props }) => {
  const freq = frequency === "yearly" ? 'yr' : 'mo';

  return (
    <div {...props} className={`${isSelected ? 'bg-slate-100' : 'border-gray-300'} cursor-pointer border-[#483eff] border flex justify-between items-center px-4 py-2 rounded-md w-full`}>
      <svg className="checkbox-symbol">
        <symbol id="check" viewBox="0 0 12 10">
          <polyline
            points="1.5 6 4.5 9 10.5 1"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          ></polyline>
        </symbol>
      </svg>
      <div className="flex gap-4 items-center">
        <div className="checkbox-container">
          <input checked={isSelected} className="checkbox-input" id={addonTitle} type="checkbox" />
          <label className="checkbox" htmlFor={addonTitle}>
            <span>
              <svg width="12px" height="10px">
                <use xlinkHref="#check"></use>
              </svg>
            </span>
          </label>
        </div>
        <div className="">
          <p className="font-ubuntu-bd text-sm text-slate-700 py-[2px]">{addonTitle}</p>
          <p className="font-ubuntu text-sm text-gray-400 py-[2px]">{addonDescription}</p>
        </div>
      </div>
      <div>
        <p className="font-ubuntu-md text-sm text-[#483eff] py-[2px]">+${price[frequency]}/{freq}</p>
      </div>
    </div>
  )
}

export default Addon;
