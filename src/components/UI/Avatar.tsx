import React from 'react';

// Define the props for the Avatar component
interface AvatarProps {
  name?: string; // The name to be displayed as initials inside the avatar
  size?: 'small' | 'medium' | 'large'; // The size of the avatar ('small', 'medium', or 'large')
}

// Avatar component declaration
const Avatar: React.FC<AvatarProps> = ({ name, size = 'medium' }) => {
  // Helper function to determine the CSS class based on the 'size' prop
  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'w-8 h-8 text-xs'; // CSS classes for small size avatar
      case 'large':
        return 'w-12 h-12 text-lg'; // CSS classes for large size avatar
      default:
        return 'w-10 h-10 text-sm'; // Default CSS classes for medium size avatar
    }
  };

  return (
    // Avatar container with dynamic CSS classes based on the 'size' prop
    <div
      className={`flex items-center justify-center rounded-full  text-white bg-cyan-700 ${getSizeClass()}`}
    >
      {name && name[0].toUpperCase()} {/* Display the initials of the name */}
    </div>
  );
};

export default Avatar;
