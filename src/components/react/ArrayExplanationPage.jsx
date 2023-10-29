import React, { useState, useEffect } from "react";
import ArrayVisualized from "./ArrayVisualized";
import CustomElements from "./CustomElements";
import { BsArrowUp } from "react-icons/bs";
import LetterOptions from "./LetterOptions";
import AddNewElementForm from "./dummy-components/AddNewElementForm";

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
  const [selectedPoints, setSelectedPoints] = useState([
    { start: 3, end: 6, text: "aca" },
  ]);

  useEffect(() => {
    setElements(generateRandomArray(7));
  }, []);

  useEffect(() => {
    setCustomElements(() => {
      return [
        /*
        { icon: iconsTypes.upArrow, index: 3, value: "p", subscript: 1 },
        { icon: iconsTypes.upArrow, index: 4, value: "p", subscript: 2 },
        { icon: iconsTypes.upArrow, index: 5, value: "p", subscript: 3 },
        { icon: iconsTypes.upArrow, index: 1, value: "q", subscript: 1 },
        { icon: iconsTypes.upArrow, index: 2, value: "r", subscript: 1 },
        */
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

  const selectPoint = (newPointLetter) => {
    setNextsPointLetter(() => {
      return newPointLetter;
    });
  };

  const addNewNumber = (numberType, customNumber) => {
    let newNumber = null;
    if (numberType === "random") {
      newNumber = generateRandomNumber();
    } else if (numberType === "custom") {
      newNumber = customNumber;
    }
    setElements((lastState) => {
      const newState = lastState.slice();
      newState.push(newNumber);
      return newState;
    });
  };

  return (
    <section className="flex p-4">
      <div className="flex">
        <CustomElements
          customElements={customElements}
          updateValues={updateCustomElementsValues}
        ></CustomElements>
      </div>
      <div className="flex-grow px-4">
        <ArrayVisualized
          elements={elements}
          customElements={customElements}
          createPoint={createPoint}
          selectedPoints={selectedPoints}
          client:load
        ></ArrayVisualized>
      </div>
      <div>
        <LetterOptions
          pointOptions={pointOptions}
          nextsPointLetter={nextsPointLetter}
          selectPoint={selectPoint}
        ></LetterOptions>
        <AddNewElementForm addNewNumber={addNewNumber}></AddNewElementForm>
      </div>
    </section>
  );
};

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100);
};

const generateRandomArray = (length) => {
  const array = [];

  for (let i = 0; i < length; i++) {
    const randomElement = generateRandomNumber();
    array.push(randomElement);
  }

  return array;
};

export default ArrayExplanation;
