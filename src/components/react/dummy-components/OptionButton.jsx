import React from "react";

const OptionButton = ({ option, isSelected, handleOptionChange }) => {
  return (
    <div key={option.letter} className="inline-block radio self-center">
      <input
        name="answer"
        type="radio"
        id={`Option${option.letter}`}
        hidden="hidden"
        value={option.letter}
        checked={isSelected}
        onChange={() => handleOptionChange(option.letter)}
        className="opacity-0 w-0 h-0 absolute"
      />
      <label
        htmlFor={`Option${option.letter}`}
        className={`px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14 ${
          isSelected ? "bg-green-500 text-white" : "bg-gray-200 text-gray-600"
        }`}
      >
        {option.subscript != 1 ? `${option.letter}_${option.subscript}` : option.letter}
      </label>
    </div>
  );
};

export default OptionButton;
