import React, { useState } from "react";
import Counter from "./Counter";
const FormControl = ({ onAddData }) => {
  const [indice, setIndice] = useState("");
  const [punto, setPunto] = useState("");

  const handleAddData = () => {
    // Aquí puedes realizar cualquier validación necesaria antes de enviar los datos
    if (indice.trim() === "" || punto.trim() === "") {
      // Realiza una validación de entrada aquí y muestra un mensaje de error si es necesario
      return;
    }

    // Crea un objeto con los datos
    const newData = {
      indice: indice,
      punto: punto,
    };

    // Llama a la función proporcionada por el componente padre para enviar los datos
    onAddData(newData);

    // Limpia los campos de entrada después de enviar los datos
    setIndice("");
    setPunto("");
  };

  return (
    <div>
      <form>
        <div class="flex flex-col">
          <label for="text" class="mb-2 font-semibold">
            Indice
          </label>
          <input
            type="number"
            onChange={(e) => setIndice(e.target.value)}
            id="text"
            class="w-full max-w-lg rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40"
          />
        </div>
        <div class="flex flex-col">
          <label for="text" class="mb-2 font-semibold">
            Punto
          </label>
          <input
            type="text"
            onChange={(e) => setPunto(e.target.value)}
            id="text"
            class="w-full max-w-lg rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40"
          />
        </div>
        <button onClick={handleAddData}>Añadir</button>
      </form>
    </div>
  );
};

export default FormControl;
