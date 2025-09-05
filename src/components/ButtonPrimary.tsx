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
  ...props
}) => (
  <button
    className={`cursor-pointer rounded border border-black bg-black px-4 py-2 font-mono text-white shadow transition-colors duration-150 hover:bg-gray-900 ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default ButtonPrimary;
