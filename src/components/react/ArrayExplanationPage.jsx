import React, { useState, useEffect } from "react";
import ArrayVisualized from "./ArrayVisualized";
import FormControl from "./FormControl";
import CustomElements from "./CustomElements";
import { BsArrowUp } from "react-icons/bs";
import LetterOptions from "./LetterOptions";
const iconsTypes = {
  upArrow: <BsArrowUp />,
};

const ArrayExplanation = () => {
  const [elements, setElements] = useState([]);
  const [customElements, setCustomElements] = useState([]);
  const [nextsPointLetter, setNextsPointLetter] = useState("q");

  useEffect(() => {
    setElements(generateRandomArray(20));
  }, []);

  useEffect(() => {
    setCustomElements(() => {
      return [
        /* { icon: iconsTypes.upArrow, index: 5, value: "p" },
        { icon: iconsTypes.upArrow, index: 15, value: "q" },
        { icon: iconsTypes.upArrow, index: 29, value: "r" },*/
      ];
    });
  }, [elements]);

  const updateCustomElementsValues = (element, updatedValues) => {
    setCustomElements((prevElements) => {
      return prevElements.map((currentElement) => {
        if (currentElement === element) {
          return { ...element, ...updatedValues };
        } else {
          return currentElement;
        }
      });
    });
  };

  const createCustomElement = (index, value) => {
    const newElement = { icon: iconsTypes.upArrow, index, value };
    setCustomElements((lastState) => {
      return [...lastState, newElement];
    });
  };

  const createPoint = (index) => {
    createCustomElement(index, nextsPointLetter);
  };

  const handleAddData = (newData) => {
    // Realiza alguna acción con los datos, por ejemplo, agrega los nuevos datos al array de elementos
    setElements([...elements, newData]);
  };

  const selectPoint = (newPointLetter) => {
    setNextsPointLetter(() => {
      return newPointLetter;
    });
  };

  return (
    <section className="flex">
      <div className="flex-grow">
        <ArrayVisualized
          elements={elements}
          customElements={customElements}
          createPoint={createPoint}
          client:load
        ></ArrayVisualized>
        <div className="flex">
          <FormControl
            onAddData={handleAddData}
            customElements={customElements}
          ></FormControl>
          <CustomElements
            customElements={customElements}
            updateValues={updateCustomElementsValues}
          ></CustomElements>
        </div>
      </div>
      <div>
        <LetterOptions
          nextsPointLetter={nextsPointLetter}
          selectPoint={selectPoint}
        ></LetterOptions>
      </div>
    </section>
  );
};

const generateRandomArray = (length) => {
  const array = [];

  for (let i = 0; i < length; i++) {
    const randomElement = Math.floor(Math.random() * 10); // You can adjust the range and values as needed.
    array.push(randomElement);
  }

  return array;
};

export default ArrayExplanation;
