'use client';
import { useState } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

function CheckBox({ className, id, ...props }: InputProps) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="mt-9 flex items-center">
      <label className="ms-2 pr-4 text-sm font-medium" htmlFor={id}>
        {props.placeholder}
      </label>
      <input
        id={id}
        value=""
        type={'checkbox'}
        checked={isChecked}
        onChange={toggleCheckbox}
        className={`my-6 h-4 w-4 rounded border-gray-300 bg-gray-100 text-indigo-600 focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-indigo-600 ${className}`}
        {...props}
      />
    </div>
  );
}
export default CheckBox;
