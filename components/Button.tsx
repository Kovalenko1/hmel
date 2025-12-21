import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-8 py-3 rounded uppercase font-bold tracking-wider transition-all duration-300 text-sm md:text-base";
  
  const variants = {
    primary: "bg-accent hover:bg-accent-hover text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    outline: "border-2 border-wood-800 text-wood-800 hover:bg-wood-800 hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};