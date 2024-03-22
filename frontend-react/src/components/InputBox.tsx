import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export type InputType = {
  value: string,
  onChange: (value: string) => void,
  disabled?: boolean,
  className?: string,
  variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "light" | "dark",
  type?: "text" | "email" | "password",
  name?: string
}



function InputBox({
    value,
    onChange,
    disabled,
    className,
    variant,
    type = "text",
    name
}:InputType) {

  

  className = className || twMerge(
    clsx({
      "p-2 rounded-md w-full": true,
      "bg-gray-100 focus:outline-none border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-blue-400 dark:focus:ring-blue-400": !variant || variant === "primary",
      "bg-white focus:outline-none border border-gray-300 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-gray-400 dark:focus:ring-gray-400": variant === "secondary",
      "bg-green-100 focus:outline-none border border-green-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 dark:bg-green-700 dark:border-green-600 dark:focus:border-green-400 dark:focus:ring-green-400": variant === "success",
      "bg-red-100 focus:outline-none border border-red-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 dark:bg-red-700 dark:border-red-600 dark:focus:border-red-400 dark:focus:ring-red-400": variant === "danger",
      "bg-yellow-100 focus:outline-none border border-yellow-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 dark:bg-yellow-600 dark:border-yellow-600 dark:focus:border-yellow-400 dark:focus:ring-yellow-400": variant === "warning",
      "bg-gray-300 focus:outline-none border border-gray-400 focus:border-gray-600 focus:ring-1 focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-gray-500 dark:focus:ring-gray-500": variant === "light",
      "bg-gray-900 text-white focus:outline-none border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:border-blue-400 dark:focus:ring-blue-400": variant === "dark",
    })
  );

  return (
    <input
    name={name}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      className={className}
    />
  );
}

export default InputBox;
