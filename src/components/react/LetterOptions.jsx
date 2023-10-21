import React, { useState } from "react";

const LetterOptions = ({ pointOptions, nextsPointLetter, selectPoint }) => {
  const handleOptionChange = (option) => {
    selectPoint(option);
  };

  return (
    <form>
      <div className="px-2 min-h-screen flex justify-center items-center">
        <div className="mb-2">
          <div class="flex flex-col">
            <label for="text" class="mb-2 font-semibold">
              Next Point
            </label>
          </div>
          <div className="w-full">
            <div className="gap-2 w-full flex flex-col">
              <div>
                <input
                  type="text"
                  onChange={(e) => setPunto(e.target.value)}
                  id="text"
                  class="w-full max-w-lg rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40"
                />
              </div>
              {pointOptions.map((option) => (
                <div key={option.letter} className="inline-block radio self-center">
                  <input
                    name="answer"
                    type="radio"
                    id={`Option${option.letter}`}
                    hidden="hidden"
                    value={option.letter}
                    checked={nextsPointLetter === option.letter}
                    onChange={() => handleOptionChange(option.letter)}
                    className="opacity-0 w-0 h-0 absolute"
                  />
                  <label
                    htmlFor={`Option${option.letter}`}
                    className={`px-2 py-1 rounded-lg flex justify-center items-center text-3xl lg:text-5xl font-bold w-10 h-10 lg:w-14 lg:h-14 ${
                      nextsPointLetter === option.letter
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {option.subscript != 1
                      ? `${option.letter}_${option.subscript}`
                      : option.letter}
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
