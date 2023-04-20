interface QualityCardProps extends React.HTMLAttributes<HTMLDivElement> {
  quality?: QualityTypes;
  type: QualityTypes;
  price: Price;
  frequency: Frequency;
}

const QualityCard: React.FC<QualityCardProps> = ({ quality, type, price, frequency, ...props }) => {
  const isSelected = type === quality;

  return (
    <div {...props} className={`h-[155px] w-[130px] cursor-pointer hover:border-violet-800 duration-150 hover:bg-slate-100 ease-in flex flex-col justify-between items-start p-4 rounded-md border ${isSelected ? 'border-violet-800 bg-slate-100' : 'border-gray-300'}`}>
      <div className="w-[40px] h-[40px]">
        <img className="w-full h-full" src={`/images/icon-${type}.svg`} alt={type} />
      </div>
      <div>
        <p className="font-ubuntu-bd text-light text-slate-700">{type[0].toUpperCase() + type.slice(1)}</p>
        <p className="font-ubuntu-md text-sm text-gray-400">${price[frequency].values[type]}/{price[frequency].name}</p>
      </div>
    </div>
  )
}

export default QualityCard;
