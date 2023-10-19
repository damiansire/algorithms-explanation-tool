import React, { useState, useEffect } from "react";
import { BsArrowUp } from "react-icons/bs";

const gridContainerStyle = {
  display: "grid",
  gap: "10px", // Espacio entre los elementos del grid
  // Otros estilos personalizados para tu grid
};

const IconComponent = ({ iconName }) => {
  // Usa una declaración switch o if para determinar qué icono renderizar
  switch (iconName) {
    case "upArrow":
      return <BsArrowUp />;
    default:
      return null;
  }
};

function ArrayVisualized() {
  const [elements, setElements] = useState([]);
  const [customElements, setCustomElements] = useState([]);

  useEffect(() => {
    setElements(generateRandomArray(10));
  }, []);

  const displayElements = getArrayFormat(elements);
  const gridColumnSize = `repeat(${displayElements.length}, 1fr)`;

  useEffect(() => {
    setCustomElements(() => {
      return [
        { icon: "upArrow", index: 1, value: "q" },
        { icon: "upArrow", index: 11, value: "q" },
      ];
    });
  }, [elements]);

  const customElementsPositions = new Array(displayElements.length).fill(null);
  for (const customElement of customElements) {
    customElementsPositions[customElement.index] = customElement;
  }

  return (
    <div>
      <div
        id="first-row"
        className="grid-container"
        style={{ gridTemplateColumns: gridColumnSize, ...gridContainerStyle }}
      >
        {displayElements.map((element, index) => (
          <div key={index}>{element}</div>
        ))}
      </div>
      <div
        id="second-row"
        className="grid-container"
        style={{ gridTemplateColumns: gridColumnSize, ...gridContainerStyle }}
      >
        {customElementsPositions.map((element) => (
          <div>
            <IconComponent iconName={element?.icon}></IconComponent>
          </div>
        ))}
      </div>
      <div
        id="third-row"
        className="grid-container"
        style={{ gridTemplateColumns: gridColumnSize, ...gridContainerStyle }}
      >
        {customElementsPositions.map((element) => (
          <div> {element?.value}</div>
        ))}
      </div>
    </div>
  );
}

function getArrayFormat(elements) {
  let displayElements = [];
  displayElements.push("[");
  for (let index = 0; index < elements.length; index++) {
    displayElements.push(elements[index]);
    if (index < elements.length - 1) {
      displayElements.push(",");
    }
  }
  displayElements.push("]");
  return displayElements;
}

function generateRandomArray(length) {
  const array = [];

  for (let i = 0; i < length; i++) {
    const randomElement = Math.floor(Math.random() * 100); // You can adjust the range and values as needed.
    array.push(randomElement);
  }

  return array;
}

export default ArrayVisualized;
