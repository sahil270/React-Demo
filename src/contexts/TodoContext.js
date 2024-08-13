import { useContext, createContext } from "react";

export const TodoContext = createContext({
  tasks: [
    {
      id: 1,
      message: "Todo Message",
      isCompleted: false,
    },
  ],
  addTask: (task) => {},
  updateTask: (id, task) => {},
  deleteTask: (id) => {},
  toggleComplete: (id) => {},
});
export const TodoProvider = TodoContext.Provider;
export const useToDo = () => useContext(TodoContext);
