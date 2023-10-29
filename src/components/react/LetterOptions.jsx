import React, { useState } from "react";
import OptionButton from "./dummy-components/OptionButton";

const LetterOptions = ({ pointOptions, selectedPointLetter, selectPoint }) => {
  const [isCustomName, setIsCustomName] = useState(false);
  const handleOptionChange = (option) => {
    selectPoint(option);
    if (isCustomName) {
      setIsCustomName(false);
    }
  };

  const setCustomName = (option) => {
    setIsCustomName(true);
    selectPoint(option);
  };

  const plusOption = { letter: "+", subscript: 1 };

  return (
    <form>
      <div className="flex flex-col px-2 mb-2">
        <div className="w-full">
          <h1>Next Mark Point</h1>
          <div className="gap-2 w-full flex flex-col">
            {pointOptions.map((option) => (
              <OptionButton
                option={option}
                isSelected={selectedPointLetter === option.letter}
                handleOptionChange={handleOptionChange}
              ></OptionButton>
            ))}
            <OptionButton
              option={plusOption}
              isSelected={selectedPointLetter === plusOption.letter}
              handleOptionChange={setCustomName}
            ></OptionButton>
          </div>
        </div>
        {isCustomName && (
          <div>
            <label for="text" className="mb-2 font-semibold">
              Custom Name
            </label>
            <input
              type="text"
              onChange={(e) => setPunto(e.target.value)}
              id="text"
              className="w-full max-w-lg rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40"
            />
          </div>
        )}
      </div>
    </form>
  );
};

export default LetterOptions;
