import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="w-1/2 text-2xl text-center flex flex-col gap-12 m-auto ">
        <h1>Learn About Redux Toolkit</h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
