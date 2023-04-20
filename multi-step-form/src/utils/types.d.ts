interface IForm {
  name: string;
  email: string;
  phone: string;
  plan: string;
  isYearlyPlan: boolean;
  quality: Quality;
  price: Price;
  addons: string[];
}

type Frequency = "monthly" | "yearly";

type QualityTypes = "advanced" | "pro" | "arcade";

type Quality = QualityTypes;

type Price = {
  monthly: {
    values: {
      advanced: number,
      pro: number,
      arcade: number,
    },
    name: "mo",
  };
  yearly: {
    values: {
      advanced: number,
      pro: number,
      arcade: number,
    },
    name: "yr",
  };
}

type StepFieldName = 'name' | 'email' | 'phone' | 'plan' | 'frequency' | 'addons';

interface IStep {
  name: string,
  fields: StepFieldName[],
}

type SubFormProps = {
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onSwitchChange?: () => void,
  onPlanChange?: (quality: QualityTypes) => void,
  form: IForm,
}
