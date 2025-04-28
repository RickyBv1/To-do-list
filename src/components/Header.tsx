import { type TodoTitle } from "../types.d";
import { CreateTodo } from "./CreateTodo";

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void;
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className="header">
      <h1>
        all
        <img
          style={{ width: "60px", height: "auto" }}
          src="/public/to-do-2.png"
        />
      </h1>

      <CreateTodo saveTodo={onAddTodo} />
    </header>
  );
};
