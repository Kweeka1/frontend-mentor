interface IForm {
  name: string;
  email: string;
  phone: string;
  plan: string;
  isYearlyPlan: boolean;
  quality: Quality;
  price: Price;
  addons: {
    [key in CurrentAddons]: Addon;
  };
}

type Quality = "advanced" | "pro" | "arcade";

type CurrentAddons = "onlineService" | "largerStorage" | "customizableProfile";

type Addon = {
  title: string;
  description: string;
  isSelected: boolean;
  price: {
    [key in Frequency]: number;
  }
}

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
