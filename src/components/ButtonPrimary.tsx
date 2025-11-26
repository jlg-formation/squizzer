import React from "react";

interface ButtonPrimaryProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

/**
 * Primary button for main actions
 */
const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  children,
  className = "",
  disabled,
  ...props
}) => (
  <button
    className={`flex items-center justify-center rounded px-4 py-2 font-mono shadow transition-colors duration-150 ${
      disabled
        ? "cursor-not-allowed border border-gray-400 bg-gray-300 text-gray-500 opacity-50 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300"
        : "cursor-pointer border border-gray-900 bg-gray-900 text-white hover:bg-gray-800 dark:border-gray-100 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
    } ${className}`}
    {...props}
    disabled={disabled}
  >
    {children}
  </button>
);

export default ButtonPrimary;
