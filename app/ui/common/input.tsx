interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  helper?: string;
}

function Input({ helper, className, type, ...props }: InputProps) {
  return (
    <div>
      {props.placeholder && (
        <label
          className="mb-3 mt-5 block text-sm font-medium text-gray-900"
          htmlFor={props.placeholder}
        >
          {props.placeholder}{' '}
          <span className="text-xs font-normal text-gray-500">
            {helper && `(${helper})`}
          </span>
        </label>
      )}
      <input
        type={type}
        className={`peer mt-1 block w-full rounded-md border border-gray-200 bg-gray-50 py-2 pl-6 text-sm outline-2 placeholder:p-0 placeholder:text-gray-400 ${className}`}
        {...props}
      />
    </div>
  );
}
export default Input;
