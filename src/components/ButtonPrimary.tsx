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
    className={`cursor-pointer rounded border border-black bg-black px-4 py-2 font-mono text-white shadow transition-colors duration-150 hover:bg-gray-900 ${disabled ? "cursor-not-allowed border-gray-400 bg-gray-300 text-gray-500 opacity-50" : ""} ${className}`}
    {...props}
    disabled={disabled}
  >
    {children}
  </button>
);

export default ButtonPrimary;
