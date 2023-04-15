import Field from "../ui/Field";

const PersonalInfo = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-ubuntu-bd text-slate-700 tracking-wide">
        Personal info
      </h1>
      <p className="text-gray-400 mt-1">
        Please provide your name, email address, and phone number.
      </p>
      <div className="py-8 flex flex-col gap-5">
        <Field label="Name" id="name" />
        <Field label="Email Address" id="email" />
        <Field label="Phone Number" id="phone" />
      </div>
    </div>
  );
};

export default PersonalInfo;
