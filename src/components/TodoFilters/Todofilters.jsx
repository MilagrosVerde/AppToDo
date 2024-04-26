import {
  FilterButton,
  FilterButtonContainer,
  FiltersContainer,
  ItemsLeft,
} from "./Filter.components";

const TodoFilters = ({
  total,
  activeFilter,
  showAllTodos,
  showActiveTodos,
  showCompletedTodos,
  handleClearComplete,
  handleSetCompleted,
}) => {
  return (
    <FiltersContainer>
      <ItemsLeft total={total} />
      <FilterButtonContainer>
        <FilterButton
          action={() => showAllTodos()}
          active={activeFilter}
          filter="Todas"
        />
        <FilterButton
          action={() => showActiveTodos()}
          active={activeFilter}
          filter="Pendientes"
        />
        <FilterButton
          action={() => showCompletedTodos()}
          active={activeFilter}
          filter="Realizadas"
        />
      </FilterButtonContainer>

      <button
        onClick={() => handleClearComplete()}
        className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in-out text-md"
      >
        Quitar realizadas
      </button>
    </FiltersContainer>
  );
};

export { TodoFilters };
