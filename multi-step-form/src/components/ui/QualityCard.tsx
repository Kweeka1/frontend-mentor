interface QualityCardProps extends React.HTMLAttributes<HTMLDivElement> {
  quality?: Quality;
  type: Quality;
  price: Price;
  frequency: Frequency;
}

const QualityCard: React.FC<QualityCardProps> = ({ quality, type, price, frequency, ...props }) => {
  const isSelected = type === quality;

  return (
    <div {...props} className={`min-h-[155px] w-[135px] cursor-pointer hover:border-violet-800 duration-150 hover:bg-slate-100 ease-in flex flex-col justify-between items-start pt-4 px-4 pb-3 rounded-md border ${isSelected ? 'border-violet-800 bg-slate-100' : 'border-gray-300'}`}>
      <div className="w-[40px] h-[40px] mb-6">
        <img className="w-full h-full" src={`/images/icon-${type}.svg`} alt={type} />
      </div>
      <div>
        <p className="font-ubuntu-bd text-light text-slate-700 py-[2px]">{type[0].toUpperCase() + type.slice(1)}</p>
        <p className="font-ubuntu-md text-sm text-gray-400 py-[2px]">${price[frequency].values[type]}/{price[frequency].name}</p>
        { frequency === "yearly" && <p className="font-ubuntu text-sm text-slate-700 py-[2px]">2 months free</p> }
      </div>
    </div>
  )
}

export default QualityCard;
