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

type Quality = "advanced" | "pro" | "arcade";

type Frequency = "monthly" | "yearly";

type FrequencyValue = {
  [key in Quality]: number;
}

type Price = {
  [key in Frequency]: {
    values: FrequencyValue;
    name: "mo" | "yr";
  }
}

type StepFieldName = 'name' | 'email' | 'phone' | 'plan' | 'frequency' | 'addons';

interface IStep {
  name: string,
  fields: StepFieldName[],
}
