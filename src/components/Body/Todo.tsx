import { useEffect, useRef, useState } from "react";
import type { TodoItem } from "./Body";

interface Props {
  todo: TodoItem;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  editTodo: (todo: TodoItem) => void;
}

const Todo = ({ todo, toggleTodo, removeTodo, editTodo }: Props) => {
  const [editing, setEditing] = useState(false);
  const editRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editRef.current) {
      editRef.current.value = todo.message;
      editRef.current.focus();
    }
  }, [editing]);

  return (
    <li onClick={() => !editing && toggleTodo(todo.id)} className="todo">
      {editing ? (
        <input
          ref={editRef}
          className="w-full px-2 py-1 rounded-md inset-shadow-sm bg-white dark:bg-zinc-800 outline-none transition-colors"
        />
      ) : (
        <span className={todo.done ? "line-through opacity-50" : ""}>
          {todo.message}
        </span>
      )}
      {editing ? (
        <div className="flex gap-2">
          <button
            onClick={() => {
              setEditing(false);
            }}
            className="red-button"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (editRef.current) {
                editTodo({ ...todo, message: editRef.current.value });
                setEditing(false);
              }
            }}
            className="green-button"
          >
            Save
          </button>
        </div>
      ) : (
        <div className="flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setEditing(!editing);
            }}
            className="blue-button"
          >
            Edit
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              removeTodo(todo.id);
            }}
            className="red-button"
          >
            Remove
          </button>
        </div>
      )}
    </li>
  );
};

export default Todo;
