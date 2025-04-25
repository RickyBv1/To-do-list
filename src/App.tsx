import { useState } from "react";
import { Todos } from "./components/Todos";
import { type TodoId } from "./types.d";

const mockTodos = [
  {
    id: "1",
    title: "example todo 1",
    completed: false,
  },
  {
    id: "2",
    title: "example todo 2",
    completed: true,
  },
  {
    id: "3",
    title: "example todo 3",
    completed: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(mockTodos);

  const handleRemove = ({ id }: TodoId) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="todoapp">
      <Todos onRemoveTodo={handleRemove} todos={todos} />
    </div>
  );
};

export default App;
