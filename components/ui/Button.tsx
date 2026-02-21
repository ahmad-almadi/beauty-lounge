"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        primary: "bg-gradient-to-r from-primary-500 to-lilac-500 text-white hover:shadow-2xl",
        secondary: "glass-effect hover:shadow-lg",
        outline: "border-2 border-primary-500 text-primary-500 hover:bg-primary-50",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  variant,
  size,
  icon,
  className,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={clsx(buttonVariants({ variant, size }), className)}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </motion.button>
  );
}
