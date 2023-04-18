import React, { useState } from "react";
import "./App.css";
import InputTodo from "./components/InputTodo";
import { Todo } from "./components/model";

const App = () => {
  const [todo, setTodo] = useState<string>("");

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    // have something in todo then goe next to setTodos
    if (todo) {
      //get from todo model id todo isdone these are
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      // after done submit input file input filds goe empty
      setTodo("");
    }
  };

  console.log(todos);
  return (
    <>
      <InputTodo todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <li className="todolist">
        <span>{todo}</span>
      </li>

      {todos.map((todoList) => {
        return <li key={todoList.id}>{todoList.todo}</li>;
      })}
    </>
  );
};

export default App;
