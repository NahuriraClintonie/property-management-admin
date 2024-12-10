import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type = 'button', className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-2 px-4 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors ${className}`}>
      {text}
    </button>
  );
};

export default Button;
