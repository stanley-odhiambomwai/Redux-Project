import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/TodoSlice";

const AddTask = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() === "") return;
    dispatch(addTask(task));
    setTask("");
  };

  return (
    <div className="p-4 flex gap-2">
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border p-2 w-full rounded"
      />
      <button onClick={handleAddTask} className="bg-blue-500 text-white p-2 rounded">
        Add
      </button>
    </div>
  );
};

export default AddTask;
