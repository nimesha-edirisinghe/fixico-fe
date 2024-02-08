import { useEffect } from 'react';

const useOnClickOutside = (
  ref: React.RefObject<HTMLElement>,
  handler: () => void
) => {
  useEffect(() => {
    // This function will be called when a click event occurs anywhere on the document.
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the referenced element exists (ref.current is not null) and if the clicked target is not a child of the referenced element.
      if (ref.current && !ref.current.contains(event.target as Node)) {
        // If the above condition is true, it means the click occurred outside the referenced element, so we call the provided handler function.
        handler();
      }
    };

    // Add a 'mousedown' event listener to the document, which will trigger the handleClickOutside function.
    document.addEventListener('mousedown', handleClickOutside);

    // The useEffect hook returns a cleanup function, which will remove the event listener when the component unmounts.
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
