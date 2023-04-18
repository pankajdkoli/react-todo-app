import React, { useState } from "react";
import "./App.css";
import InputTodo from "./components/InputTodo";
// import TodoApp from "./components/TodoApp";

const App = () => {
  const [todo, setTodo] = useState<string>("");

  const [Todos, setTodos] = useState([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <InputTodo todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </>
  );
};

export default App;
