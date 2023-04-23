import React, { useState, useEffect } from "react";
import InputTodo from "./components/InputTodo";
import Todo from "./components/model";
import "./components/TodoApp.css";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  // Define the updateTodo function with the correct parameter type
  const updateTodo = (newTodos: Todo[]) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
  };
  //get data from local storage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(storedTodos);
  }, []);

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

  return (
    <>
      <InputTodo todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
