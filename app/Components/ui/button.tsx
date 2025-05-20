// app/components/ui/button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  children: React.ReactNode;
}

export const Button = ({ variant = "default", children, className = "", ...props }: ButtonProps) => {
  const baseClasses = "font-semibold rounded-full px-6 py-3 transition duration-300";
  const variants = {
    default: "bg-pink-600 hover:bg-pink-700 text-white",
    outline: "border border-white text-white hover:bg-white hover:text-black",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
