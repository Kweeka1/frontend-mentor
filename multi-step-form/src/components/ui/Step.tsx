type StepProps = {
  stepNumber: number;
  stepDescription: string;
  selected?: boolean | false;
}

const Step: React.FC<StepProps> = ({ stepNumber, stepDescription, selected }) => {
  return (
    <div className="w-full relative">
      <div className={`absolute w-[33px] h-[33px] rounded-full flex justify-center items-center top-0 ${selected ? 'bg-cyan-100' : 'bg-none border border-cyan-100 text-white'}`}>{stepNumber}</div>
      <div className="w-full pl-[50px]">
        <p className="text-xs font-ubuntu-md uppercase text-slate-300">step {stepNumber}</p>
        <p className="text-sm font-ubuntu-bd uppercase text-white">{stepDescription}</p>
      </div>
    </div>
  )
};

export default Step;
