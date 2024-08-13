import { useState } from "react";
import { useToDo } from "../../contexts";

function TodoForm() {
  const [message, setMessage] = useState("");
  const { addTask } = useToDo();

  function addNewTask(e) {
    e.preventDefault();
    if (!message) return;

    addTask({ message, isCompleted: false });
    setMessage("");
  }

  return (
    <form className='flex' onSubmit={addNewTask}>
      <input
        type='text'
        placeholder='Write Task Name/Message...'
        className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type='submit'
        className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0'
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
