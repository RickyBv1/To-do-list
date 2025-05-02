import { CreateTodo } from "./CreateTodo";

interface Props {
  saveTodo: (title: string) => void;
}

export const Header: React.FC<Props> = ({ saveTodo }) => {
  return (
    <header className="header">
      <h1>
        To do
        <img
          style={{ width: "60px", height: "auto", marginLeft: "15px" }}
          src="/public/to-do-2.png"
        />
      </h1>

      <CreateTodo saveTodo={saveTodo} />
    </header>
  );
};
