interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
  helper?: string;
}

function Select({ children, helper, className, ...props }: SelectProps) {
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
      <select
        {...props}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-500 dark:focus:ring-indigo-500"
      >
        <option selected>Seleccione</option>
        {children}
      </select>
    </div>
  );
}
export default Select;
