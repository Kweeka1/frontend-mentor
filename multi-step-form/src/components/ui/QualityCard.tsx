interface QualityCardProps {
  quality: Quality;
  price: Price;
  frequency: Frequency;
}

const QualityCard: React.FC<QualityCardProps> = ({ quality, price, frequency }) => {
  return (
    <div className="h-[155px] w-[130px] cursor-pointer hover:border-violet-800 duration-150 hover:bg-cyan-50 ease-in flex flex-col justify-between items-start p-4 rounded-md border border-gray-300">
      <div className="w-[40px] h-[40px]">
        <img className="w-full h-full" src={`/images/icon-${quality}.svg`} alt={quality} />
      </div>
      <div>
        <p className="font-ubuntu-bd text-light text-slate-700">{quality[0].toUpperCase() + quality.slice(1)}</p>
        <p className="font-ubuntu-bd text-sm text-gray-400">${price[frequency].values[quality]}/{price[frequency].name}</p>
      </div>
    </div>
  )
}

export default QualityCard;
