const Tittle = ({ filter, setFilter }) => {
  return (
    <div>
      <h1 className="text-4xl font-merriweather font-semibold tracking-widest space-x-1 pb-3">
        lista de tareas{" "}
      </h1>

      <div className="flex space-x-5 ">
        <input
          type="checkbox"
          className=" w-7 h-7 rounded-full   cursor-pointer "
          checked={filter.date.active}
          onChange={(e) => {
            setFilter({
              ...filter,
              date: { ...filter.date, active: !filter.date.active },
            });
          }}
        ></input>

        <input
          value={filter.date.value}
          onChange={(e) =>
            setFilter({
              ...filter,
              date: { ...filter.date, value: e.target.value },
            })
          }
          type="date"
          className="bg-gray-700  h-10 w-1/2 p-4 rounded-lg focus:shadow-2xl  focus:shadow-sky-600 outline-none transition-all duration-300 ease-in-out mb-6"
        ></input>
      </div>
    </div>
  );
};

export { Tittle };
