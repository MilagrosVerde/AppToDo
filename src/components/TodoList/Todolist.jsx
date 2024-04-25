import { Todo } from "../Todo";
import { TodoFilters } from "../TodoFilters";

const TodoList = ({
  todos,
  handleSetCompleted,
  handleDelete,
  activeFilter,
  showActiveTodos,
  showAllTodos,
  showCompletedTodos,
  handleClearComplete,
}) => {
  return (
    <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleSetCompleted={handleSetCompleted}
          handleDelete={handleDelete}
        />
      ))}
      <TodoFilters
        activeFilter={activeFilter}
        total={todos.length}
        showActiveTodos={showActiveTodos}
        showAllTodos={showAllTodos}
        showCompletedTodos={showCompletedTodos}
        handleClearComplete={handleClearComplete}
      />
    </div>
  );
};

export { TodoList };
