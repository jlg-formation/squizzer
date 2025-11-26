import React from "react";

interface ButtonSecondaryProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  children,
  className = "",
  disabled,
  ...props
}) => {
  return (
    <button
      className={`flex items-center justify-center border-none bg-transparent px-2 py-1 font-semibold transition-colors duration-150 ${
        disabled
          ? "cursor-not-allowed text-gray-300 dark:text-gray-600"
          : "cursor-pointer text-gray-700 hover:text-black dark:text-gray-200 dark:hover:text-white"
      } ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;
