import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

// Define the shape of a single option in the select menu
export type Option = {
  id: number; // Unique identifier for the option
  name: string; // The name or label of the option
  models?: Option[]; // Optional nested options (sub-options) for hierarchical select menus
};

// Define the props for the SelectMenu component
type SelectMenuProps = {
  id: string; // The ID attribute for the select element
  options: Option[]; // The array of options to be displayed in the select menu
  selectHandler: (option: Option | undefined) => void; // Callback function to handle option selection
};

// Default option value for the select menu
const defaultOptionValue = 'option1';

// SelectMenu component declaration
const SelectMenu: React.FC<SelectMenuProps> = ({
  id,
  options = [{ id: 1, name: '' }],
  selectHandler,
}) => {
  // State to keep track of the selected option and its value
  // const [selectedOption, setSelectedOption] = useState<Option | any>([]);
  const [selectedValue, setSelectedValue] = useState(defaultOptionValue);

  // Handler function to update the selected option when the select value changes
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selectedOption = options.find(
      (option) => option.name === selectedValue
    );
    selectHandler(selectedOption);
    // setSelectedOption(selectedOption);
    setSelectedValue(selectedValue);
  };

  // Render the SelectMenu component
  return (
    <div className="relative w-full">
      <select
        id={id}
        value={selectedValue}
        onChange={handleSelectChange}
        className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-300 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
      >
        {/* Default option to prompt the user to select an option */}
        <option value={defaultOptionValue} disabled>
          Select an option
        </option>
        {/* Render all the options in the select menu */}
        {options?.map((option) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
      {/* Dropdown icon (chevron-down) */}
      <div className="absolute px-2 text-gray-700 pointer-events-none inset-y-[10px] right-1">
        <ChevronDownIcon className="w-4 h-4" />
      </div>
    </div>
  );
};

export default SelectMenu;
