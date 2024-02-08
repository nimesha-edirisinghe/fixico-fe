import { useEffect, useRef } from 'react';
import { XCircleIcon } from '@heroicons/react/24/outline';

// Define the props for the Modal component
type ModalProps = {
  isOpen: boolean; // Flag to determine whether the modal is open or closed
  onClose: () => void; // Callback function to close the modal
  header?: React.ReactNode; // Optional header content to be displayed in the modal
  footer?: React.ReactNode; // Optional footer content to be displayed in the modal
  children?: React.ReactNode; // The content to be displayed inside the modal
};

// Modal component declaration
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  header,
  footer,
  children,
}) => {
  // Create a ref to the modal container element
  const modalRef = useRef<HTMLDivElement>(null);

  // useEffect hook to handle click events outside the modal and close it
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  // Determine the CSS classes for the modal based on its open state
  const modalClassName = `fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${
    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
  }`;

  // Render the modal component with the appropriate content and styling
  return (
    <div className={modalClassName}>
      {/* Background overlay to dim the background when modal is open */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      {/* Modal content */}
      <div ref={modalRef} className="z-10 p-6 bg-white rounded-[8px]">
        {/* Modal header */}
        <div className="flex justify-between mb-4">
          <div>{header}</div>
          {/* Close button (X icon) */}
          <XCircleIcon onClick={onClose} className="w-6 h-6 cursor-pointer" />
        </div>
        {/* Modal body */}
        <div>{children}</div>
        {/* Modal footer */}
        {footer && (
          <div className="flex flex-row justify-end mt-4 ">{footer}</div>
        )}
      </div>
    </div>
  );
};

export default Modal;
