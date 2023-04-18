import QualityCard from "../ui/QualityCard";

const Plan: React.FC<SubFormProps> = ({ form, handleChange }) => {
  const { frequency, price } = form;

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-ubuntu-bd text-slate-700 tracking-wide">
        Select your plan
      </h1>
      <p className="text-gray-400 mt-1">
        You have the option of monthly or yearly billing
      </p>
      <div className="py-8 flex flex-col gap-5">
        <div className="flex justify-between">
          <QualityCard price={price} frequency={frequency} quality="arcade" />
          <QualityCard price={price} frequency={frequency} quality="advanced" />
          <QualityCard price={price} frequency={frequency} quality="pro" />
        </div>
      </div>
    </div>
  )
}

export default Plan;
