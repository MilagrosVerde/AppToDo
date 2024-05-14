import { useState } from "react";
import addTodo from "../../App";

const TodoInput = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const handleTodo = (e) => {
    if (e.key.toLowerCase() === "enter") {
      addTodo(title);
      setTitle("");
    }
  };
  // esta funcion es para que al presionar enter se ejecute la función que agrega el todo. osea para q pueda identificar si se presiono enter
  return (
    <div>
      <div className="mt-6 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="border border-gray-500 border-solid p-3 rounded-full"></span>
        </div>
        <input
          type="text"
          className="focus:shadow-lg font-inter focus:shadow-sky-600 pl-12 w-full py-4 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
          placeholder="no te olvides de..."
          value={title}
          onChange={(e) => setTitle(e.target.value)} // aca le asigno un nuevo valor al title cada evz que se actualiza el input con el evento
          // esto es para ir actualizando el valor del title con cada cambio del input

          onKeyDown={(e) => handleTodo(e)} // esto es para que al presionar una tecla enter se ejecute la función porque se crea un evento
        />
      </div>
    </div>
  );
};

export { TodoInput };
