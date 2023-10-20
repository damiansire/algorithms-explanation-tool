import React, { useState, useEffect } from "react";
import { BsArrowUp } from "react-icons/bs";

const gridContainerStyle = {
  display: "grid",
  gap: "10px",
  textAlign: "center",
};

const iconsTypes = {
  upArrow: <BsArrowUp />,
};

function ArrayVisualized({ elements }) {
  const [customElements, setCustomElements] = useState([]);

  const displayElements = getArrayFormat(elements);
  const gridColumnSize = `repeat(${displayElements.length}, 1fr)`;

  useEffect(() => {
    setCustomElements(() => {
      return [
        { icon: iconsTypes.upArrow, index: 1, value: "q" },
        { icon: iconsTypes.upArrow, index: 11, value: "q" },
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
          <div>{element?.icon}</div>
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

export default ArrayVisualized;
