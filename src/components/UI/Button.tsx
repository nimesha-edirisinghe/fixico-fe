import React, { ButtonHTMLAttributes, ReactNode } from 'react';

// Define the props for the Button component
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'danger'; // The variant of the button ('primary', 'secondary', or 'danger')
  icon?: ReactNode; // An optional icon element to be displayed before the button text
  children?: ReactNode; // The content to be displayed inside the button (button text)
  disabled?: boolean; // An optional flag to disable the button
}

// Button component declaration
const Button: React.FC<ButtonProps> = ({
  variant,
  icon,
  children,
  disabled,
  ...props
}) => {
  // Generate the button classes based on the 'variant' prop
  let buttonClasses = 'px-4 py-2 rounded-md flex items-center';

  switch (variant) {
    case 'primary':
      buttonClasses += ' bg-blue-500 text-white'; // Add classes for primary variant
      break;
    case 'secondary':
      buttonClasses += ' bg-gray-500 text-white'; // Add classes for secondary variant
      break;
    case 'danger':
      buttonClasses += ' bg-red-500 text-white'; // Add classes for danger variant
      break;
    default:
      break;
  }

  // Add styles for a disabled button
  if (disabled) {
    buttonClasses += ` bg-gray-300 text-gray-500 cursor-not-allowed`;
  }

  // Render the button with the determined classes, disabled state, and additional props
  return (
    <button className={buttonClasses} disabled={disabled} {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {children} {/* Render the button text (children) */}
    </button>
  );
};

export default Button;
