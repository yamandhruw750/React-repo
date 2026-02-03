import { useState } from "react";
import useTodo from "../context/TodoContext";

function TodoElement({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updatedTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    if (isTodoEditable) {
      updatedTodo(todo.id, { ...todo, todo: todoMsg });
    }
    setIsTodoEditable(!isTodoEditable);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <>
      <li className="flex flex-row mt-2 w-full h-auto text-gray-700">
        <div
          className={`flex gap-2 w-4/6 text-center p-2 shadow-md border border-gray-200 focus:ring-2 focus:outline-none rounded-l-md ${todo.completed ? "bg-amber-200" : "bg-amber-50"}`}
        >
          <input
            type="checkbox"
            className="cursor-pointer"
            checked={todo.completed}
            onChange={toggleCompleted}
          />
          <input type="text" className={`border-none w-full ${isTodoEditable ? "border-black/25 1px" : "border-transparent"} ${todo.completed ? "line-through" : " "}`} value={todoMsg} onChange={(e) => setTodoMsg(e.target.value)} readOnly={!isTodoEditable} />
        </div>
        <button className={`w-2/6 py-2  bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition rounded-md `} onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);

        }}
          disabled={todo.completed}
        >
          {isTodoEditable ? "Save" : "Edit"}
        </button>
        <button className="w-2/6 py-2  bg-red-600 text-white font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition rounded-md" onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </li>
    </>
  );
}

export default TodoElement;
