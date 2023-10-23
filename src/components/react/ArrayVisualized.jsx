import React, { useState, useEffect } from "react";
import NumberWithIndex from "./dummy-components/NumberWithIndex";
import "./ArrayVisualized.css";
function ArrayVisualized({ elements, customElements, createPoint, selectedPoints }) {
  const [selectedElement, setSelectedElement] = useState(null);
  const displayElements = getArrayFormat(elements);
  const showArrayStructure = false;

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
    gridTemplateRows: "repeat(4, auto)",
    gridRowGap: "1rem",
    gridColumnGap: "1rem",
    gridAutoFlow: "column",
  };

  return (
    <div style={columnStyle} className="select-none">
      {displayElements.map((element, index) => {
        let elementIndex;
        if (showArrayStructure) {
          elementIndex = index % 2 === 1 ? (index - 1) / 2 : "";
        } else {
          elementIndex = index;
        }
        return (
          <>
            <div
              key={index}
              className={`cell ${selectedElement === index && "selected"} relative`}
              onClick={() => {
                handleContextMenu(index);
              }}
              onContextMenu={() => {
                createPoint(index);
              }}
            >
              <span>{element}</span>
              <span class="absolute bottom-0 right-0 text-base array-index">
                {elementIndex}
              </span>
            </div>
            <div>
              {
                <div>
                  {customElementsPositions[index]
                    ?.filter((element, index, array) => {
                      // Only show unique icon
                      return array.findIndex((e) => e.icon === element.icon) === index;
                    })
                    .map((element) => element.icon)}
                </div>
              }
            </div>
            <div class="flex flex-wrap gap-4">
              {customElementsPositions[index]?.map((element) => (
                <div>
                  {element.subscript != 1 ? (
                    <NumberWithIndex
                      number={element.value}
                      subIndex={element.subscript}
                    ></NumberWithIndex>
                  ) : (
                    element.value
                  )}
                </div>
              ))}
            </div>
            <div className="text-red-500">{evaluateDraw(index)}</div>
          </>
        );
      })}
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
