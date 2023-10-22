import React, { useState, useEffect } from "react";
import "./ArrayVisualized.css";
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

  const columnStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${displayElements.length}, 1fr)`,
    gridTemplateRows: "repeat(5, 1fr)",
    gridRowGap: "1rem",
    gridColumnGap: "1rem",
    gridAutoFlow: "column",
  };

  return (
    <div className={` grid-rows-5 gap-4`} style={columnStyle}>
      {displayElements.map((element, index) => (
        <>
          <div>{index % 2 === 1 ? (index - 1) / 2 : ""}</div>
          <div
            key={index}
            className={`cell ${selectedElement === index && "selected"}`}
            onClick={() => {
              handleContextMenu(index);
            }}
            onContextMenu={() => {
              createPoint(index);
            }}
          >
            <span>{element}</span>
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
        </>
      ))}
    </div>
  );
}

function getArrayFormat(elements) {
  let displayElements = [];
  //displayElements.push("[");
  for (let index = 0; index < elements.length; index++) {
    displayElements.push(elements[index]);
    /*if (index < elements.length - 1) {
      displayElements.push(",");
    }*/
  }
  //displayElements.push("]");
  return displayElements;
}

export default ArrayVisualized;
