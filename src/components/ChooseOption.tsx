import React, { useState } from 'react';

interface ChooseOptionProps {
  label: string;
  options: string[];
  onChange?: (value: string) => void;
}

const ChooseOption: React.FC<ChooseOptionProps> = ({ label, options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectedOption(newValue);
    if (onChange) onChange(newValue); // Optional callback for parent component
  };

  return (
    <div className="relative flex flex-row justify-between items-center">
      <label className="flex text-sm font-medium text-gray-700">{label}</label>
      <select
        value={selectedOption}
        onChange={handleChange}
        className="flex mt-1 w-[100%] px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ChooseOption;