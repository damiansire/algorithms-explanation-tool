import React, { useState, useRef } from "react";
import OptionButton from "./dummy-components/OptionButton";

const LetterOptions = ({
  pointOptions,
  selectedPointLetter,
  selectPoint,
  createNewPointOption,
}) => {
  const inputRef = useRef(null);
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

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Evita que la página se recargue
    const text = inputRef.current.value;
    // Ejecuta la función createCustomPoint con el valor del campo de entrada
    createCustomPoint(text);
  };

  const createCustomPoint = (text) => {
    createNewPointOption(text);
  };

  const plusOption = { letter: "+", subscript: 1 };

  return (
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
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="text" className="mb-2 font-semibold">
              Custom Name
            </label>
            <input
              type="text"
              id="text"
              ref={inputRef}
              className="w-full max-w-lg rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40"
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
};

export default LetterOptions;
