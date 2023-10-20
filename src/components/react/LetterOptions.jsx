import React, { useState } from "react";

const LetterOptions = () => {
  // Define the options and an array to store selected values
  const options = ["B", "C", "D"];
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (option) => {
    setSelectedOptions((prevOptions) => {
      // Toggle the selected option - if it's already selected, remove it; otherwise, add it
      if (prevOptions.includes(option)) {
        return prevOptions.filter((item) => item !== option);
      } else {
        return [...prevOptions, option];
      }
    });
  };

  return (
    <form>
      <div className="px-2 min-h-screen flex justify-center items-center">
        <div className="mb-2">
          <label
            htmlFor="entry"
            className="block text-gray-700 text-sm lg:text-base font-semibold mb-2"
          >
            Next Point:
          </label>
          <div className="w-full">
            <div className="gap-2 w-full flex flex-col">
              {options.map((option) => (
                <div key={option} className="inline-block radio self-center">
                  <input
                    name="answer"
                    type="radio"
                    id={`Option${option}`}
                    hidden="hidden"
                    value={option}
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleOptionChange(option)}
                    className="opacity-0 w-0 h-0 absolute"
                  />
                  <label
                    htmlFor={`Option${option}`}
                    className={`px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14 ${
                      selectedOptions.includes(option)
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LetterOptions;
