import React, { useState, useEffect } from "react";
import ArrayVisualized from "./ArrayVisualized";

const ArrayExplanation = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    setElements(generateRandomArray(10));
  }, []);

  return (
    <div>
      <ArrayVisualized elements={elements} client:load></ArrayVisualized>
    </div>
  );
};

const generateRandomArray = (length) => {
  const array = [];

  for (let i = 0; i < length; i++) {
    const randomElement = Math.floor(Math.random() * 100); // You can adjust the range and values as needed.
    array.push(randomElement);
  }

  return array;
};

export default ArrayExplanation;
