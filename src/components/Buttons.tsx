/** @format */
import React from "react";
import { Link } from "react-router-dom";

interface ButtonsProps {
  to: string;
  label: string;
  variant?: "primary" | "secondary" | "light";
}

const Buttons: React.FC<ButtonsProps> = ({
  to,
  label,
  variant = "primary",
}) => {
  const baseClasses =
    "px-6 py-2 rounded-lg transition cursor-pointer font-medium";

  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    secondary: "bg-gray-200 text-gray-700 hover:bg:gray-300",
    light: "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100",
  };
  return (
    <Link to={to} className={`${baseClasses} ${variantClasses[variant]}`}>
      {label}
    </Link>
  );
};
export default Buttons;
