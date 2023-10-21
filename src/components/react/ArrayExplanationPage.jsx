import React, { useState, useEffect } from "react";
import ArrayVisualized from "./ArrayVisualized";
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
  const [pointOptions, setPointOptions] = useState([
    { letter: "p", subscript: 1 },
    { letter: "q", subscript: 1 },
    { letter: "r", subscript: 1 },
    { letter: "s", subscript: 1 },
    { letter: "t", subscript: 1 },
  ]);

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

  const createCustomElement = (index, value, subscript) => {
    const newElement = { icon: iconsTypes.upArrow, index, value, subscript };
    setCustomElements((lastState) => {
      return [...lastState, newElement];
    });
  };

  const createPoint = (index) => {
    const subscript = pointOptions.find((point) => point.letter === nextsPointLetter);
    createCustomElement(index, nextsPointLetter, subscript.subscript);
    setPointOptions((lastState) => {
      const newState = [...lastState];
      const optionIndex = newState.findIndex((option) => {
        return option.letter === nextsPointLetter;
      });
      newState[optionIndex].subscript++;

      return newState;
    });
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
          <CustomElements
            customElements={customElements}
            updateValues={updateCustomElementsValues}
          ></CustomElements>
        </div>
      </div>
      <div>
        <LetterOptions
          pointOptions={pointOptions}
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
