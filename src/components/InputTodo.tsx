import React from "react";
import "./TodoApp.css";

interface InputTodoProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void; // does not return any th
}

const InputTodo = ({ todo, setTodo, handleAdd }: InputTodoProps) => {
  return (
    <header className="container" id="main-herder">
      <h1>Today Task</h1>
      <form id="todo-form" onSubmit={(e) => handleAdd(e)}>
        <input
          value={todo}
          type="text"
          name="todoItem"
          className="task-name"
          placeholder="do your task"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit"> Add Task </button>
      </form>
    </header>
  );
};
export default InputTodo;
