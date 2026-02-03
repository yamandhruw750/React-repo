import React, { useState } from "react";
import useTodo from "../context/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form className="flex flex-row mb-6" onSubmit={add}>
      <input
        type="text"
        id="inputTodo"
        className="w-4/6 px-4 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-black shadow-md"
        placeholder="Type something..."
        autoComplete="off"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="w-2/6 py-2  bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition rounded-r-md"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
