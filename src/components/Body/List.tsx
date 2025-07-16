import type { TodoItem } from "./Body";
import Todo from "./Todo";

interface Props {
  todos: TodoItem[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  editTodo: (todo: TodoItem) => void;
}

const List = ({ todos, toggleTodo, removeTodo, editTodo }: Props) => {
  const newTodos: TodoItem[] = [];
  const doneTodos: TodoItem[] = [];

  todos.forEach((todo) =>
    todo.done ? doneTodos.push(todo) : newTodos.push(todo)
  );

  return (
    <ul className="mt-2 flex flex-col gap-2">
      {newTodos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ))}
      {doneTodos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default List;
