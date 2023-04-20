import React from "react";
import Todo from "./model";
import "./TodoApp.css";

type todoListProps = {
  todoList: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todoList, todos, setTodos }: todoListProps) => {
  const handleRemoveTodo = () => {
    const filteredTodos = todos.filter((todo) => todo.id !== todoList.id);
    setTodos(filteredTodos);

    localStorage.setItem("todos", JSON.stringify(filteredTodos)); // save updated list in
  };

  const handleToggleDone = () => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoList.id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <div className="container" id="main-content">
      <ul className="todos">
        <li key={todoList.id} className={todoList.isDone ? "completed" : ""}>
          {todoList.todo}
          {/* <button className="list-button">{todoList.isDone ? "✔" : " " }> </button> */}
          <button className="list-button" onClick={handleToggleDone}>
            {todoList.isDone ? "✔" : " "}
          </button>

          <button className="list-button" onClick={handleRemoveTodo}>
            X
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SingleTodo;
