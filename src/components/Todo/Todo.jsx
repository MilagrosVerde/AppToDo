import {
  ArrowLeftStartOnRectangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Panel } from "./Panel";

const Todo = ({ todo, handleSetCompleted, handleDelete, setTodo }) => {
  const { id, title, completed, description } = todo; // aca DESESTRUCTURO TODO
  const [showPanel, setShowPanel] = useState(false);

  //  la parte izquierda del estado es el ESTADO ACTUAL, y la segunda parte
  // con el primero accedo al VALOR DEL ESTADO y con el otro lo modifico
  return (
    <>
      <div className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600 ">
        <div className="flex items-center">
          {completed ? (
            <div
              onClick={() => handleSetCompleted(id)}
              className="bg-green-500 p-1 rounded-full cursor-pointer"
            >
              <img
                className="h-4 w-4 "
                src="/check-icon.svg"
                alt="Check Icon"
              />
            </div>
          ) : (
            <span
              onClick={() => handleSetCompleted(id)}
              className={`border border-gray-500 border-solid p-3 rounded-full cursor-pointer`}
            ></span>
          )}

          <p className={"pl-3 " + (completed && "line-through")}>{title}</p>
        </div>

        <div className="flex ">
          <button
            className="h-5 w-5 mr-3 cursor-pointer transition-all duration-300 ease-in"
            src="/arrow-icon.svg"
            alt="arrow Icon"
            onClick={() => setShowPanel(true)}
          >
            <ArrowLeftStartOnRectangleIcon></ArrowLeftStartOnRectangleIcon>
          </button>

          <button
            onClick={() => handleDelete(id)}
            className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in"
            src="/close-icon.svg"
            alt="Close Icon"
          >
            <XMarkIcon></XMarkIcon>
          </button>
        </div>
      </div>
      <Panel
        open={showPanel}
        setOpen={setShowPanel}
        todo={todo}
        setTodo={setTodo}
      ></Panel>
    </>
  );
};

export { Todo };
// hacer practica de bases de javascript y de bases de react
