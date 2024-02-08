import React from 'react';

// Define the props for the TextAreaWithLabel component
interface TextAreaWithLabelProps {
  label: string; // The label text for the textarea
  value: string; // The current value of the textarea
  onChange: (value: string) => void; // Callback function to handle textarea value change
}

// TextAreaWithLabel component declaration
const TextAreaWithLabel: React.FC<TextAreaWithLabelProps> = ({
  label,
  value,
  onChange,
}) => {
  // Render the TextAreaWithLabel component
  return (
    <div className="space-y-3 font-medium">
      {/* Render the label */}
      <label>{label}</label>
      {/* Render the textarea element */}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)} // Handle textarea value change
        rows={4}
        cols={50}
        className="px-3 py-2 font-normal border rounded focus:outline-none"
        placeholder="Enter Damage description"
        id="description"
      />
    </div>
  );
};

export default TextAreaWithLabel;
