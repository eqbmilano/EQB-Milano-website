import React from "react";
import "./CTAButton.css";

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "dark" | "light";
  className?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  href,
  onClick,
  variant = "dark",
  className = "",
}) => {
  const baseClasses = `cta-button cta-button--${variant} ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
};
