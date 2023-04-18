interface IForm {
  name: string;
  email: string;
  phone: string;
  plan: string;
  frequency: string;
  addons: string[];
}

type StepFieldName = 'name' | 'email' | 'phone' | 'plan' | 'frequency' | 'addons';

interface IStep {
  name: string,
  fields: StepFieldName[],
}