interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	id: string;
}

const Field: React.FC<FieldProps> = ({ label, id }, ...props) => {
  return (
		<div className="w-full">
			<label htmlFor={id} className="block text-sm font-medium text-gray-700">
				{label}
			</label>
			<div id={id} className="mt-2">
				<input {...props} className="shadow-sm pl-3 py-[0.6rem] text-slate-600 font-ubuntu-bd border focus:border-gray-400 focus-visible:ring-gray-400 focus-visible:border-gray-400 block w-full sm:text-sm border-gray-300 rounded-md invalid:border invalid:border-red-300" />
			</div>
		</div>
	)
};

export default Field;
