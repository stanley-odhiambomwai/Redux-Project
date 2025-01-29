import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask } from "../Redux/RodoSlice";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleEdit = () => {
    dispatch(editTask({ id: task.id, newDescription }));
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center p-2 border rounded mb-2">
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleTask(task.id))}
        className="mr-2"
      />
      {isEditing ? (
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          className="border p-1"
        />
      ) : (
        <span className={task.isDone ? "line-through text-gray-500" : ""}>
          {task.description}
        </span>
      )}

      {isEditing ? (
        <button onClick={handleEdit} className="bg-green-500 text-white p-1 ml-2 rounded">Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white p-1 ml-2 rounded">Edit</button>
      )}
    </div>
  );
};

export default Task;
