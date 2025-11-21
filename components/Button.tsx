import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'orange' | 'green' | 'white' | 'outline';
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'orange', 
  fullWidth = false, 
  className = '',
  onClick,
  icon = true
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-300 rounded-full shadow-lg hover:shadow-xl active:scale-95";
  
  const variants = {
    orange: "bg-brand-orange text-white hover:bg-orange-600",
    green: "bg-brand-green text-white hover:bg-green-800",
    white: "bg-white text-brand-green hover:bg-gray-100",
    outline: "border-2 border-white text-white hover:bg-white hover:text-brand-green",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      onClick={onClick}
    >
      <span>{children}</span>
      {icon && <ArrowRight className="ml-2 w-4 h-4" />}
    </button>
  );
};

export default Button;