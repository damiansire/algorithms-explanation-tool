import React, { useState, useEffect } from "react";

function ArrayVisualized({ elements, customElements, createPoint, selectedPoints }) {
  const [selectedElement, setSelectedElement] = useState(null);
  const displayElements = getArrayFormat(elements);

  const customElementsPositions = new Array(displayElements.length).fill(null);
  for (const customElement of customElements) {
    if (customElementsPositions[customElement.index]) {
      customElementsPositions[customElement.index].push(customElement);
    } else {
      customElementsPositions[customElement.index] = [customElement];
    }
  }

  const handleContextMenu = (index) =>
    setSelectedElement(selectedElement === index ? null : index);

  const evaluateDraw = (currentIndex) => {
    const dummyPoint = selectedPoints[0];
    if (currentIndex === dummyPoint.start) {
      return ">";
    } else if (currentIndex === dummyPoint.end) {
      return "<";
    } else if (currentIndex < dummyPoint.end && currentIndex > dummyPoint.start) {
      return "-";
    }
    return null;
  };

  return (
    <div className="flex space-around justify-evenly">
      {displayElements.map((element, index) => (
        <div key={index} className="flex flex-col text-center">
          <div>{index % 2 === 1 ? (index - 1) / 2 : ""}</div>
          <div
            key={index}
            className={`${selectedElement === index && "bg-green-500 text-white"}`}
            onClick={() => {
              handleContextMenu(index);
            }}
            onContextMenu={() => {
              createPoint(index);
            }}
          >
            {element}
          </div>
          <div>{customElementsPositions[index]?.map((element) => element.icon)}</div>
          <div>
            {customElementsPositions[index]?.map((element) => (
              <span>
                {element.subscript != 1
                  ? `${element.value}_${element.subscript}`
                  : element.value}
              </span>
            ))}
          </div>
          <div className="text-red-500">{evaluateDraw(index)}</div>
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
