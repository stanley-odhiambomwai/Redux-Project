import AddTask from "./Components/AddTask";
import ListTask from "./Components/ListTask";

function App() {
  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
