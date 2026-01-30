import { createContext, useContext } from "react";

export const TodoContext = createContext({
  addTodo: () => {},
  removeTodo: () => {},
});

export const TodoProvider = TodoContext.Provider;

export default function useTodo() {
  return useContext(TodoContext);
}
