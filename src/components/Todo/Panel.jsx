import React from "react";
import { useState } from "react";

export const Panel = ({ open, setOpen, todo, setTodo }) => {
  const [localToDo, setLocalToDo] = useState(todo);
  const handleSave = () => {
    setTodo(localToDo);
    setOpen(false);
  };
  return (
    <>
      {open && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/10 z-10"
          onClick={() => setOpen(false)}
        ></div>
      )}
      <div
        className={`bg-slate-800 transition-all duration-300  fixed z-50 top-0 right-0  h-full overflow-hidden    ${
          open ? "w-full md:w-80" : "w-0 "
        }`}
      >
        <div className="w-full h-full flex flex-col  bg-gray-700 rounded-xl ">
          {/**bloque de edicion  */}
          <div className="p-4 flex-1 w-full">
            <p className="text-xl font-medium  mb-10 truncate ">
              {" "}
              {localToDo.title}{" "}
            </p>

            <input
              type="date"
              className="bg-slate-600 w-full p-4 rounded-md focus:shadow-2xl  focus:shadow-sky-600 outline-none transition-all duration-300 ease-in-out mb-6"
              value={localToDo.date}
              defaultValue={localToDo.date}
              onChange={(e) => {
                setLocalToDo({ ...localToDo, date: e.target.value });
                console.log(e.target.value);
              }}
            ></input>
            <textarea
              rows={10}
              placeholder="Notas..."
              className="bg-slate-600 w-full p-4 rounded-md focus:shadow-2xl  focus:shadow-sky-600 outline-none transition-all duration-300 ease-in-out  "
              value={localToDo.description}
              onChange={(e) =>
                setLocalToDo({ ...localToDo, description: e.target.value })
              }
            ></textarea>
          </div>
          {/**bloque de acciones  */}
          <div className="flex items-center space-x-2 h-16 w-full px-4  justify-between">
            <button
              className="bg-sky-600 rounded-full h-12 px-5  "
              onClick={handleSave}
            >
              Guardar
            </button>
            <button
              onClick={() => setOpen(false)}
              className="bg-gray-600 rounded-full h-12 px-5 "
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
