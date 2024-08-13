import { useState } from "react";
import { useToDo } from "../../contexts";

function TodoItem({ task }) {
  const [isEditable, setIsEditable] = useState(false);
  const [message, setMessage] = useState(task.message);
  const { updateTask, deleteTask, toggleComplete } = useToDo();

  const editTask = () => {
    updateTask(task.id, { ...task, message });
    setIsEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(task.id);
  };
  return (
    <div
      className={`w-[100%] flex border
         border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
           task.isCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
         }`}
    >
      <input
        type='checkbox'
        className='cursor-pointer'
        checked={task.isCompleted}
        onChange={toggleCompleted}
      />
      <input
        type='text'
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isEditable ? "border-black/10 px-2" : "border-transparent"
        } ${task.isCompleted ? "line-through" : ""}`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        readOnly={!isEditable}
      />
      {/* Edit, Save Button */}
      <button
        className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'
        onClick={() => {
          if (task.isCompleted) return;

          if (isEditable) {
            editTask();
          } else setIsEditable((prev) => !prev);
        }}
        disabled={task.isCompleted}
      >
        {isEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0'
        onClick={() => deleteTask(task.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
