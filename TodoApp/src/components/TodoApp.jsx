import React, { useEffect, useState } from "react";
import { TodoProvider } from "../context/TodoContext";
import TodoElement from "./TodoElement";
import TodoForm from "./TodoForm";

function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updatedTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)),
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo,
      ),
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updatedTodo, deleteTodo, toggleComplete }}
    >
      <div className="flex flex-wrap flex-col items-center min-h-screen justify-center bg-gray-400 text-white">
        <div className="min-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl my-5 text-gray-500 text-center">TODO APP</h1>
          <TodoForm />
          <div>
            {todos.map((todo) => (
              <TodoElement key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default TodoApp;
