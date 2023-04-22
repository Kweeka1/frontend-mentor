import QualityCard from "../ui/QualityCard";
import Switch from "../ui/Switch";

interface PlanProps {
  form: IForm;
  onSwitchChange: () => void;
  onPlanChange: (type: Quality) => void;
}

const Plan: React.FC<PlanProps> = ({
  form,
  onSwitchChange,
  onPlanChange,
}) => {
  const { isYearlyPlan, quality, price } = form;
  const frequency: Frequency = isYearlyPlan ? "yearly" : "monthly";

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
          <QualityCard
            type="arcade"
            onClick={() => onPlanChange("arcade")}
            price={price}
            frequency={frequency}
            quality={quality}
          />
          <QualityCard
            type="advanced"
            onClick={() => onPlanChange("advanced")}
            price={price}
            frequency={frequency}
            quality={quality}
          />
          <QualityCard
            type="pro"
            onClick={() => onPlanChange("pro")}
            price={price}
            frequency={frequency}
            quality={quality}
          />
        </div>
        <div className="flex gap-4 justify-center items-center p-4 bg-gray-100 rounded-md">
          <p
            className={`${
              isYearlyPlan ? "text-slate-400" : "text-slate-700"
            } font-ubuntu-md`}
          >
            Monthly
          </p>
          <Switch checked={isYearlyPlan} onCheckedChange={onSwitchChange} />
          <p
            className={`${
              isYearlyPlan ? "text-slate-700" : "text-slate-400"
            } font-ubuntu-md`}
          >
            Yearly
          </p>
        </div>
      </div>
    </div>
  );
};

export default Plan;
