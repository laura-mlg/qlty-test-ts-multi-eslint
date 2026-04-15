import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, variant = "primary" }) => {
  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <button
      className={`btn btn-${variant}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
