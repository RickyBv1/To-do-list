import { useState } from "react";
import { Todos } from "./components/Todos";

const mockTodos = [
  {
    id: "1",
    title: "to do 1",
    completed: false,
  },
  {
    id: "2",
    title: "to do 2",
    completed: false,
  },
  {
    id: "3",
    title: "to do 3",
    completed: false,
  },
];

const App = () => {
  const [todos] = useState(mockTodos);

  return (
    <>
      <Todos todos={todos} />
    </>
  );
};

export default App;
