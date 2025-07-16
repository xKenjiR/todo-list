import Input from "./Input";

const Body = () => {
  return (
    <div className="p-3">
      <Input addTodo={(message) => console.log(message)} />
    </div>
  );
};

export default Body;
