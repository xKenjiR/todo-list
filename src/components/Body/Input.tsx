import { useRef } from "react";

interface Props {
  addTodo: (message: string) => void;
}

const Input = ({ addTodo }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="flex justify-center"
      onSubmit={(e) => {
        e.preventDefault();
        if (inputRef.current && inputRef.current.value) {
          addTodo(inputRef.current.value);
          inputRef.current.value = "";
        }
      }}
    >
      <input
        ref={inputRef}
        placeholder="Things to do..."
        className="
          px-3
          py-1.5
          w-md
          rounded-md

          bg-zinc-50
          dark:bg-zinc-700

          dark:text-white

          inset-shadow-sm
          
          outline-none

          transition-colors
        "
      />
      <button
        type="submit"
        className="
          px-2
          py-1
          ml-2
          rounded-md

          bg-blue-400
          hover:bg-blue-500

          dark:bg-blue-800
          dark:hover:bg-blue-700

          font-medium
          text-white
          
          cursor-pointer

          transition-colors
        "
      >
        Add
      </button>
    </form>
  );
};

export default Input;
