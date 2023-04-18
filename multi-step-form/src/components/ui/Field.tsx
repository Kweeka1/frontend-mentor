interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	id: string;
	errorMessage?: string;
	props?: React.InputHTMLAttributes<HTMLInputElement>
}

const Field: React.FC<FieldProps> = ({ label, errorMessage, id, ...props}) => {
  return (
		<div className="w-full">
			<label htmlFor={id} className="block text-sm font-medium text-gray-700">
				{label}
			</label>
			<div id={id} className="mt-2 relative">
				<input {...props} className="shadow-sm peer pl-3 py-[0.6rem] text-slate-600 font-ubuntu-bd border focus:border-gray-400 focus-visible:ring-gray-400 focus-visible:border-gray-400 block w-full sm:text-sm rounded-md border-gray-300 invalid:border-red-500" />
				<span className="invisible absolute right-0 top-[-28px] peer-invalid:visible text-red-500 font-ubuntu-bd text-sm m-0 p-0">
					{errorMessage}
				</span>
			</div>
		</div>
	)
};

export default Field;
