import { Tittle } from "./components/Tittle/Tittle";
import { TodoInput } from "./components/TodoInput/Todoinput";
import { TodoList } from "./components/TodoList/Todolist";
import { useEffect, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { format } from "date-fns";
//import FilterComponent from "./components/Filter/Filter";

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Ir al supermercado',
      completed: false,
      description: "",
      date:  format(new Date(), "yyyy-MM-dd")
    },

  ]);

const addTodo = (title) => {
  const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1; // si hay elementos, agarramos el id del último elemento, si no, el id es 1
  const newTodo = {
   id: lastId + 1,
   title: title,
   completed: false,
   description: "",
   date: format(new Date(), "yyyy-MM-dd")
   
 }
 console.log(newTodo)

  const todoList = [...todos]
 todoList.push(newTodo);
 setTodos(todoList)
 ;
}


// crear estado q sea filter que tenga dos campos, el primero es si esta actuvado o no y el segundo es la fecha, necesito fiultrar  las tareas
//para que al seleccionar la fecha me de las tareas que en date tenga la fecha que le estoy mandando 


const [filter, setFilter] = useState({
  status: 'all',
  date: {
    active: false,
    value: format(new Date(), "yyyy-MM-dd")
  },
  
})





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


const [filteresTodos, setFilteresTodos] = useState(todos); // es para filtrar las tareas




const handleClearComplete = () => { // es para borrar las tareas completadas
  const updateList = todos.filter(todo => !todo.completed);
  setTodos(updateList);
}


const showAllTodos = () => { // es para mostrar todas las tareas
  setFilter({
    ...filter,
    status: 'all',
    
  });
} 


const showActiveTodos = () => { // es para mostrar las tareas activas
  setFilter({
    ...filter,
    status: 'active',
    
  })
}

const showCompletedTodos = () => { // es para mostrar las tareas completadas
  setFilter({
    ...filter,
    status: 'completed',
    
  })
}



useEffect(() => {

  let filteredList = []
 if (filter.status === 'all') {
  filteredList = todos
 }
 else if (filter.status === 'active') {
    filteredList = todos.filter(todo => todo.completed === false)
  } else if (filter.status === 'completed') {
    filteredList = todos.filter(todo => todo.completed === true)
  }

  if (filter.date.active ) {
    filteredList = filteredList.filter(item => item.date === filter.date.value)
  }
  setFilteresTodos(filteredList)
} , [filter, todos]);




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
        <Tittle filter={filter} setFilter={setFilter}></Tittle>
        
        <TodoInput addTodo={addTodo}></TodoInput>
        <TodoList 
        todos={filteresTodos} 
        activeFilter={filter.status}
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