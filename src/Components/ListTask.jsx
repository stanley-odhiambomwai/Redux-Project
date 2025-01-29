import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../Redux/TodoSlice";
import Task from "./Task";

const ListTask = () => {
  const { tasks, filter } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === "done") return task.isDone;
    if (filter === "notDone") return !task.isDone;
    return true;
  });

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4">
        <button onClick={() => dispatch(setFilter("all"))} className="p-2 border rounded">All</button>
        <button onClick={() => dispatch(setFilter("done"))} className="p-2 border rounded">Done</button>
        <button onClick={() => dispatch(setFilter("notDone"))} className="p-2 border rounded">Not Done</button>
      </div>

      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => <Task key={task.id} task={task} />)
      ) : (
        <p className="text-gray-500">No tasks found.</p>
      )}
    </div>
  );
};

export default ListTask;
