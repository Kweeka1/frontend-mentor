import { useState } from "react";

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	id: string;
	errorMessage?: string;
}

const Field: React.FC<FieldProps> = ({ label, errorMessage, id, ...props}) => {
	const [error, setError] = useState(false);

	const showError = () => {
		setError(true);
	}

	const hideError = () => {
		setError(false);
	}

  return (
		<div className="w-full">
			<div className="flex justify-between">
				<label htmlFor={id} className="block text-sm font-medium text-gray-700">
					{label}
				</label>
				<span className={`${error ? 'block' : 'hidden' } text-red-500 font-ubuntu-bd text-sm m-0 p-0`}>
					{errorMessage}
				</span>
			</div>
			<div id={id} className="mt-2 relative">
				<input {...props} onInput={hideError} onInvalid={showError} className={`shadow-sm peer pl-3 py-[0.6rem] text-slate-600 font-ubuntu-bd border focus-visible:border-[#483EFF] outline-none block w-full sm:text-sm rounded-md ${error ? 'border-red-500' : 'border-gray-300'}`} />
			</div>
		</div>
	)
};

export default Field;
