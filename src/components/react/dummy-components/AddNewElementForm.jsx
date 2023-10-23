import React, { useState } from "react";

const AddNewElementForm = ({ addNewNumber }) => {
  const [numberType, setNumberType] = useState("aleatorio");
  const [customNumber, setCustomNumber] = useState("");

  const handleNumberTypeChange = (e) => {
    setNumberType(e.target.value);
  };

  const handleCustomNumberChange = (e) => {
    setCustomNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewNumber(numberType, customNumber);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Agregar elemento</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          <input
            type="radio"
            value="random"
            checked={numberType === "random"}
            onChange={handleNumberTypeChange}
          />
          Número Aleatorio
        </label>
        <label className="block mb-2">
          <input
            type="radio"
            value="custom"
            checked={numberType === "custom"}
            onChange={handleNumberTypeChange}
          />
          Elegir el numero
        </label>
        {numberType === "custom" && (
          <label className="block mb-2">
            Ingresa un número:
            <input
              type="number"
              value={customNumber}
              onChange={handleCustomNumberChange}
              className="border p-1"
              required
            />
          </label>
        )}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default AddNewElementForm;
