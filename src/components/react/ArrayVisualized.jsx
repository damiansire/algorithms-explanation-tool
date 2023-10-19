import React, { useState, useEffect } from "react";

const gridContainerStyle = {
  display: "grid",
  gap: "10px", // Espacio entre los elementos del grid
  // Otros estilos personalizados para tu grid
};

function ArrayVisualized() {
  const [elements, setElements] = useState([]);
  const [customElements, setCustomElements] = useState([]);

  useEffect(() => {
    setElements(generateRandomArray(10));
  }, []);

  useEffect(() => {
    setCustomElements(() => {
      new Array(elements.length);
    });
  }, [elements]);

  const displayElements = getArrayFormat(elements);
  const gridColumnSize = `repeat(${displayElements.length}, 1fr)`;

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
        {customElements?.map((element) => (element ? <div>^</div> : null))}
      </div>
      <div
        id="third-row"
        className="grid-container"
        style={{ gridTemplateColumns: gridColumnSize, ...gridContainerStyle }}
      >
        q
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
