import React, { useState } from "react";
import "./App.css";
import InputTodo from "./components/InputTodo";
import { Todo } from "./components/model";
import "./components/TodoApp.css";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  // Define the updateTodo function with the correct parameter type
  const updateTodo = (newTodo: Todo[]) => {
    localStorage.setItem("todos", JSON.stringify(newTodo));
    setTodos(newTodo);
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    // have something in todo then goe next to setTodos
    if (todo) {
      // Get the form input value and create a new Todo object get from todo model id todo isdone these are
      const newTodo: Todo = {
        id: Date.now(),
        todo: todo,
        isDone: false,
      };
      // Update the todos state variable with the newTodo object
      updateTodo([...todos, newTodo]);

      // Clear the form input form field
      setTodo("");
    }
  };

  console.log(todos);
  return (
    <>
      <InputTodo todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <li className="todolist">{/* <span>{todo}</span> */}</li>

      {/* {todos.map((todoList) => {
        return <li key={todoList.id}>{todoList.todo}</li>;
      })} */}
      <div className="container" id="main-content">
        <ul className="todos">
          Todo List
          {todos.map((todoList) => {
            return (
              <li
                key={todoList.id}
                className={todoList.isDone ? "completed" : ""}
              >
                {todoList.todo}
              </li>
            );
          })}
        </ul>

        <button className="list-button">check</button>
      </div>
    </>
  );
}

export default App;
