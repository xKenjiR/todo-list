import { useEffect, useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(localStorage.theme === "dark");

  useEffect(() => {
    localStorage.theme = darkMode ? "dark" : "light";
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className="grid grid-cols-4 p-3 border-b-1 border-zinc-200 dark:border-zinc-700 transition-colors">
      <h1
        className="
          col-start-2
          col-span-2

          font-bold
          text-xl
          text-center

          text-zinc-700
          dark:text-zinc-200
          
          transition-colors
        "
      >
        Todo
      </h1>
      <label className="inline-flex justify-end items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={(e) => setDarkMode(e.target.checked)}
          checked={darkMode}
        />
        <div
          className="
            relative

            w-9
            h-5
            rounded-full
            
            bg-zinc-200
            dark:bg-zinc-700

            transition-colors

            after:absolute
            after:top-[2px]
            after:start-[2px]

            after:h-4
            after:w-4
            after:rounded-full

            after:border

            after:bg-white
            after:border-gray-300

            peer-checked:after:translate-x-full

            after:transition-all
          "
        ></div>
        <span
          className="
            w-10
            ml-2

            font-medium
            text-sm
            text-center

            text-zinc-900
            dark:text-zinc-300

            transition-colors
          "
        >
          {darkMode ? "Dark" : "Light"}
        </span>
      </label>
    </div>
  );
};

export default Header;
