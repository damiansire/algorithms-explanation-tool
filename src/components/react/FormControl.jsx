import React, { useState } from "react";

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
        <div>
          <label>Indice</label>
          <input value={indice} onChange={(e) => setIndice(e.target.value)}></input>
        </div>
        <div>
          <label>Punto</label>
          <input value={punto} onChange={(e) => setPunto(e.target.value)}></input>
        </div>
        <button onClick={handleAddData}>Añadir</button>
      </form>
    </div>
  );
};

export default FormControl;
