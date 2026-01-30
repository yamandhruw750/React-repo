import React, { useState } from "react";
import { TodoProvider } from "../context/TodoContext";
import TodoElement from "./TodoElement";

function TodoApp() {
  const [inputValue, setInputValue] = useState(" ");

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  return (
    <>
      <div className="flex flex-wrap flex-col items-center min-h-screen justify-center bg-gray-400 text-white">
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl my-5 text-gray-500 text-center">TODO APP</h1>
          <form className="flex flex-row mb-6">
            <input
              type="text"
              id="inputTodo"
              className="w-4/6 px-4 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-black shadow-md"
              placeholder="Type something..."
              autoComplete="off"
              value={inputValue}
              onChange={(e) => handleInputChange(e.target.value)}
            />
            <button
              type="submit"
              className="w-2/6 py-2  bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition rounded-r-md"
            >
              Save
            </button>
          </form>
          <TodoElement />
        </div>
      </div>
    </>
  );
}

export default TodoApp;
