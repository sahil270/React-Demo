import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { TodoProvider } from "../../contexts";

function TodoMain() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks((old) => [{ id: Date.now(), ...task }, ...old]);
  };

  const updateTask = (id, task) => {
    setTasks((old) => tasks.map((x) => (x.id === id ? task : x)));
  };

  const deleteTask = (id) => {
    setTasks((old) => old.filter((x) => x.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks((old) =>
      tasks.map((x) =>
        x.id === id ? { ...x, isCompleted: !x.isCompleted } : x
      )
    );
  };

  useEffect(() => {
    let taskArr = JSON.parse(localStorage.getItem("tasks"));
    if (taskArr && taskArr.lengtt > 0) {
      setTasks(() => taskArr);
    }
  }, []);

  useEffect(() => {
    tasks &&
      tasks.length > 0 &&
      localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TodoProvider
      value={{ tasks, addTask, updateTask, deleteTask, toggleComplete }}
    >
      <div className='min-h-screen py-8'>
        <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
          <h1 className='text-2xl font-bold text-center mb-8 mt-2'>
            Manage Your Tasks
          </h1>
          <div className='mb-4'>
            <TodoForm />
          </div>
          <div className='flex flex-wrap gap-y-3'>
            {
              /*Loop and Add TodoItem here */
              tasks.map((x) => (
                <TodoItem key={x.id} task={x} />
              ))
            }
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default TodoMain;
