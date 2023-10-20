import React, { useState, useEffect } from "react";
import ArrayVisualized from "./ArrayVisualized";
import FormControl from "./FormControl";
import CustomElements from "./CustomElements";
import { BsArrowUp } from "react-icons/bs";

const iconsTypes = {
  upArrow: <BsArrowUp />,
};

const ArrayExplanation = () => {
  const [elements, setElements] = useState([]);
  const [customElements, setCustomElements] = useState([]);

  useEffect(() => {
    setElements(generateRandomArray(10));
  }, []);

  useEffect(() => {
    setCustomElements(() => {
      return [
        { icon: iconsTypes.upArrow, index: 1, value: "q" },
        { icon: iconsTypes.upArrow, index: 11, value: "q" },
      ];
    });
  }, [elements]);

  const handleAddData = (newData) => {
    // Realiza alguna acción con los datos, por ejemplo, agrega los nuevos datos al array de elementos
    setElements([...elements, newData]);
  };

  return (
    <div>
      <ArrayVisualized
        elements={elements}
        customElements={customElements}
        client:load
      ></ArrayVisualized>
      <FormControl
        onAddData={handleAddData}
        customElements={customElements}
      ></FormControl>
      <CustomElements customElements={customElements}></CustomElements>
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
