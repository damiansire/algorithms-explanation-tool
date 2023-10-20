import React, { useState, useEffect } from "react";

function ArrayVisualized({ elements, customElements }) {
  const displayElements = getArrayFormat(elements);
  const gridColumnSize = `repeat(${displayElements.length}, 1fr)`;

  const customElementsPositions = new Array(displayElements.length).fill(null);
  for (const customElement of customElements) {
    customElementsPositions[customElement.index] = customElement;
  }

  return (
    <div className="flex space-around justify-evenly">
      {displayElements.map((element, index) => (
        <div key={index} className="text-center">
          <div className="inline-block">{index % 2 === 1 ? (index - 1) / 2 : ""}</div>
          <div key={index} className="flex-grow">
            {element}
          </div>
          <div class="flex justify-center">{customElementsPositions[index]?.icon}</div>
          <div>{customElementsPositions[index]?.value}</div>
        </div>
      ))}
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
