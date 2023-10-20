import React, { useState } from "react";

const Counter = ({ count }) => {
  const handleClick = (event) => {
    event.preventDefault();
    const action = event.currentTarget.getAttribute("data-action");
    setCount((count) => {
      if (action === "increment") {
        return count + 1;
      } else if (action === "decrement") {
        return count - 1;
      }
    });
  };
  return (
    <div class="custom-number-input h-10 w-32">
      <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button
          data-action="decrement"
          class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
          onClick={handleClick}
        >
          <span class="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
          value={count}
        ></input>
        <button
          data-action="increment"
          class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
          onClick={handleClick}
        >
          <span class="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
};

export default Counter;
