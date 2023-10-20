import React, { useState, useEffect } from "react";

const gridContainerStyle = {
  display: "grid",
  gap: "10px",
  textAlign: "center",
};

function ArrayVisualized({ elements, customElements }) {
  const displayElements = getArrayFormat(elements);
  const gridColumnSize = `repeat(${displayElements.length}, 1fr)`;

  const customElementsPositions = new Array(displayElements.length).fill(null);
  for (const customElement of customElements) {
    customElementsPositions[customElement.index] = customElement;
  }

  return (
    <div>
      <div
        id="first-row"
        style={{ gridTemplateColumns: gridColumnSize, ...gridContainerStyle }}
      >
        {displayElements.map((element, index) => (
          <div key={index}>{element}</div>
        ))}
      </div>
      <div
        id="second-row"
        style={{ gridTemplateColumns: gridColumnSize, ...gridContainerStyle }}
      >
        {customElementsPositions.map((element) => (
          <div>{element?.icon}</div>
        ))}
      </div>
      <div
        id="third-row"
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
