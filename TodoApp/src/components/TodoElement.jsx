import React from "react";

function TodoElement() {
  return (
    <>
      <ul>
        <li className="flex flex-row mt-2 w-full h-auto text-gray-700">
          <span className="w-4/6 text-center p-2 shadow-md border border-gray-200 focus:ring-2 focus:outline-none rounded-l-md">
            this is demo text
          </span>
          <button className="w-2/6 py-2  bg-red-600 text-white font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition rounded-r-md">
            Delete
          </button>
        </li>
      </ul>
    </>
  );
}

export default TodoElement;
