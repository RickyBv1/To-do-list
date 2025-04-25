import { type ListOfTodos } from '../types.d';

interface Props {
  todos: ListOfTodos;
}

export const Todos: React.FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
