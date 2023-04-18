import Field from "../ui/Field";

const PersonalInfo: React.FC<SubFormProps> = ({ form, handleChange }) => {
  const { name, email, phone } = form;

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-ubuntu-bd text-slate-700 tracking-wide">
        Personal info
      </h1>
      <p className="text-gray-400 mt-1">
        Please provide your name, email address, and phone number.
      </p>
      <div className="py-8 flex flex-col gap-5">
        <Field
          required
          errorMessage="This field is required"
          name="name"
          onChange={handleChange}
          label="Name"
          id="name"
          value={name}
        />
        <Field
          required
          errorMessage="This field is required"
          name="email"
          onChange={handleChange}
          label="Email Address"
          id="email"
          value={email}
        />
        <Field
          required
          errorMessage="This field is required"
          name="phone"
          onChange={handleChange}
          label="Phone Number"
          id="phone"
          value={phone}
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
