import Field from "../ui/Field";

type PersonalInfoProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ handleChange }) => {
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
          name="name"
          onChange={handleChange}
          label="Name"
          id="name"
        />
        <Field
          required
          name="email"
          onChange={handleChange}
          label="Email Address"
          id="email"
        />
        <Field
          required
          name="phone"
          onChange={handleChange}
          label="Phone Number"
          id="phone"
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
