import React, { ReactNode } from 'react';

interface DisabledOverlayProps {
  isDisabled: boolean;
  children: ReactNode;
}

const DisabledOverlay: React.FC<DisabledOverlayProps> = ({
  isDisabled,
  children,
}) => {
  return (
    <div className={`relative ${isDisabled ? 'cursor-not-allowed' : ''}`}>
      {children}
      {isDisabled && (
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-gray-500 rounded-md opacity-50"></div>
      )}
    </div>
  );
};

export default DisabledOverlay;
