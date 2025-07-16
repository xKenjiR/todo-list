import Body from "./components/Body/Body";
import Header from "./components/Header";

function App() {
  return (
    <div
      className="
        w-full
        md:w-xl
        min-h-[100vh]
        h-full

        translate-x-[-50%]
        ml-[50%]

        bg-white
        dark:bg-zinc-900
        shadow-md

        transition-colors
      "
    >
      <Header />
      <Body />
    </div>
  );
}

export default App;
