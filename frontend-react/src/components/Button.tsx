import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export type ButtonType = {
    label : string,
    onClick: any,
    disabled?: boolean,
    className? : string,
    variant? : "primary" |
    "secondary" |
    "danger" |
    "success" |
    "warning" |
    "light" |
    "dark",
    isLoading? : boolean,
    size?: "xs" | "sm" | "md" | "lg" | "xl"
}

function Button({
    label,
  onClick,
  disabled,
  className,
  variant,
  isLoading,
  size
}:ButtonType) {



    const sizeClass = twMerge(
        clsx({
            "px-3 py-2 text-xs" : size === "xs",
            "px-3 py-2 text-sm" : size === "sm",
            "px-5 py-2.5 text-sm" : !size ||size === "md",
            "px-5 py-3 text-base" : size === "lg",
            "px-6 py-3.5 text-base" : size === "xl"
        })
    )

    className = className || twMerge(
        clsx({
            "px-4 py-2 rounded-md": true,
            "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" : !variant || variant === "primary",
            "py-2.5 px-5 me-2 mb-2 font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" : variant === "secondary",
            "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" : variant === "dark",
            "focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" : variant === "success",
            "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" : variant === "danger",
            "focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg me-2 mb-2 dark:focus:ring-yellow-900" : variant === "warning",
            "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" : variant === "light"
        }));

  return (
    <button 
        onClick={onClick}
        disabled={disabled || isLoading}
        className={className + sizeClass}
    >{isLoading ? "loading" : label}</button>
  )
}

export default Button