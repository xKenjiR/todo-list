import type { TodoItem } from "./Body";

interface Props {
  todos: TodoItem[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const List = ({ todos, toggleTodo, removeTodo }: Props) => {
  const newTodos: TodoItem[] = [];
  const doneTodos: TodoItem[] = [];

  todos.forEach((todo) =>
    todo.done ? doneTodos.push(todo) : newTodos.push(todo)
  );

  return (
    <ul className="mt-2 flex flex-col gap-2">
      {newTodos.map((todo) => (
        <li onClick={() => toggleTodo(todo.id)} key={todo.id} className="todo">
          <span>{todo.message}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              removeTodo(todo.id);
            }}
            className="todo-button"
          >
            Remove
          </button>
        </li>
      ))}
      {doneTodos.map((todo) => (
        <li onClick={() => toggleTodo(todo.id)} key={todo.id} className="todo">
          <span className="line-through opacity-50">{todo.message}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              removeTodo(todo.id);
            }}
            className="todo-button"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
