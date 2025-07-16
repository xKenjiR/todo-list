import { useState } from "react";
import Input from "./Input";
import List from "./List";

export interface TodoItem {
  id: number;
  message: string;
  done: boolean;
}

const oldTodos = localStorage.todos;

const Body = () => {
  const [todos, setTodos] = useState<TodoItem[]>(
    oldTodos ? JSON.parse(oldTodos) : []
  );

  const updateTodos = (newTodos: TodoItem[]) => {
    setTodos(newTodos);
    localStorage.todos = JSON.stringify(newTodos);
  };

  const addTodo = (message: string) => {
    const newTodos = [
      ...todos,
      {
        id: todos.length + 1,
        message: message,
        done: false,
      },
    ];
    updateTodos(newTodos);
  };

  const toggleTodo = (id: number) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    updateTodos(newTodos);
  };

  const editTodo = (todo: TodoItem) => {
    const newTodos = todos.map((to) => (to.id === todo.id ? todo : to));
    updateTodos(newTodos);
  };

  const removeTodo = (id: number) => {
    let newId: number = 1;
    const newTodos: TodoItem[] = [];
    todos.forEach((todo) => {
      if (todo.id !== id) {
        newTodos.push({ ...todo, id: newId });
        newId++;
      }
    });
    updateTodos(newTodos);
  };

  return (
    <div className="p-3">
      <Input addTodo={addTodo} />
      <List
        todos={todos}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
        editTodo={editTodo}
      />
    </div>
  );
};

export default Body;
