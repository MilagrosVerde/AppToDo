import { Tittle } from "./components/Tittle/Tittle";
import { TodoInput } from "./components/TodoInput/Todoinput";
import { TodoList } from "./components/TodoList/Todolist";
import { useEffect, useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Ir al supermercado',
      completed: false,
    },
    {
      id: 2,
      title: 'Hacer actividad fisica',
     completed: false,
    },
    {
      id: 3,
      title: 'Pasear al perro',
      completed: false,
    },
    {
      id: 4,
      title: 'Estudiar por 4 horas',
      completed: false,
    }
  ]);

const addTodo = (title) => {
  const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1; // si hay elementos, agarramos el id del último elemento, si no, el id es 1
  const newTodo = {
   id: lastId + 1,
   title: title,
   completed: false,
   description: "",
 }

  const todoList = [...todos]
 todoList.push(newTodo);
 setTodos(todoList)
 ;
}

//esta funcion es para q me muestre como completada la tarea
// la funcion recorre la lista y si el id es igual al id de la tarea que se esta pasando, la tarea se marca como completada y se cambia el estado
const handleSetCompleted = (id) => {
  const updateList = todos.map((todo) => { // la updateList es la lista actualizada
    if (todo.id === id) {
      
      return {
        ...todo,
        completed: !todo.completed,
        
      };
    } 


      return todo;
    
  })
  setTodos(updateList)
 
};

const handleEdit = (value) => {
  const index = todos.findIndex(todo => todo.id === value.id)
  let newTodos = todos
  newTodos[index] = value
  setTodos(newTodos)
 
};




// esta es para borrar tareas

const handleDelete = (id) => {
  const updateList = todos.filter((todo) => todo.id !== id);
  setTodos(updateList);
} 


const [activeFilter, setActiveFilter] = useState('all'); // es para saber cual de los filtros esta activo
const [filteresTodos, setFilteresTodos] = useState(todos); // es para filtrar las tareas



const handleClearComplete = () => { // es para borrar las tareas completadas
  const updateList = todos.filter(todo => !todo.completed);
  setTodos(updateList);
}


const showAllTodos = () => { // es para mostrar todas las tareas
  setActiveFilter('all');
} 


const showActiveTodos = () => { // es para mostrar las tareas activas
   setActiveFilter('active')
}

const showCompletedTodos = () => { // es para mostrar las tareas completadas
  setActiveFilter('completed')
}



useEffect(() => {
  if (activeFilter === 'all') {
    setFilteresTodos(todos);
  } else if (activeFilter === 'active') {
    const activeTodos = todos.filter(todo => todo.completed === false)
    setFilteresTodos(activeTodos);
  } else if (activeFilter === 'completed') {
    const completedTodos = todos.filter(todo => todo.completed === true)
    setFilteresTodos(completedTodos);
  }
} , [activeFilter, todos]);


function allCompleted(todos) {
  const todasCompletadas = todos.every(todo => todo.completed === true);
  if (todasCompletadas) {
    console.log('Has completado todas las tareas');
    alert('Has completado todas las tareas');
}
}
  return (
    <div className="bg-gray-800 min-h-screen h-full font-inter text-gray-100 flex items-center justify-center py-20 px-5 ">
      <div className="container flex flex-col max-w-xl">
        <Tittle></Tittle>
        <TodoInput addTodo={addTodo}></TodoInput>
        <TodoList 
        todos={filteresTodos} 
        activeFilter={activeFilter}
        handleSetCompleted={handleSetCompleted} 
        handleDelete={handleDelete}
        showActiveTodos={showActiveTodos}
        showAllTodos={showAllTodos}
        showCompletedTodos={showCompletedTodos}
        handleClearComplete={handleClearComplete}
        allCompleted={allCompleted(todos)}
        handleEdit={handleEdit}

        />

      </div>
    </div>
  );
}

export default App;