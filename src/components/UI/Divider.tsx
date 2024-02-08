import React from 'react';

// Define the props for the Divider component
interface DividerProps {
  direction: 'vertical' | 'horizontal'; // The direction of the divider ('vertical' or 'horizontal')
}

// Divider component declaration
const Divider: React.FC<DividerProps> = ({ direction }) => {
  // Define CSS classes for vertical and horizontal dividers
  const verticalClasses = 'border border-gray-300 h-full mx-2';
  const horizontalClasses = 'border-t border-gray-300 my-4';

  // Determine the CSS classes based on the 'direction' prop
  const dividerClasses =
    direction === 'vertical' ? verticalClasses : horizontalClasses;

  // Render the divider element with the appropriate CSS classes
  return <div className={dividerClasses} />;
};

export default Divider;
