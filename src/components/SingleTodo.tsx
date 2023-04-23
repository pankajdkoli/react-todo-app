import React, { useState, useEffect } from "react";
import Todo from "./model";
import "./TodoApp.css";
import ShowTask from "./ShowTask";

type todoListProps = {
  todoList: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todoList, todos, setTodos }: todoListProps) => {
  const [remainingTasks, setRemainingTasks] = useState<number>(0);
  const [completedTasks, setCompletedTasks] = useState<number>(0);

  // const handleRemoveTodo = () => {
  //   const filteredTodos = todos.filter((todo) => todo.id !== todoList.id);
  //   setTodos(filteredTodos);

  //   localStorage.setItem("todos", JSON.stringify(filteredTodos)); // save updated list in
  // };

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
    // setRemainingTasks(updatedTodos.filter((todo) => !todo.isDone).length);
    // setCompletedTasks(updatedTodos.filter((todo) => todo.isDone).length);
    // localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  useEffect(() => {
    let remaining = todos.filter((item) => !item.isDone).length;
    setRemainingTasks(remaining);
    setCompletedTasks(todos.length - remaining);
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  // const handleRemoveTodo = () => {
  //   const updatedTodoList = [...todos];
  //   updatedTodoList.splice(0, 1);
  //   setTodos(updatedTodoList);
  //   localStorage.setItem("todoList", JSON.stringify(updatedTodoList));
  // };

  const handleRemoveTodo = () => {
    const filteredTodos = todos.filter((todo) => todo.id !== todoList.id);
    setTodos(filteredTodos);
    setRemainingTasks(filteredTodos.filter((todo) => !todo.isDone).length);
    setCompletedTasks(filteredTodos.filter((todo) => todo.isDone).length);

    localStorage.setItem("todos", JSON.stringify(filteredTodos));
  };

  return (
    <>
      <>
        <ShowTask
          remainingTasks={remainingTasks}
          completedTasks={completedTasks}
          todos={todos}
        />
      </>

      {todos.length === 0 ? (
        <p>Your todo list is empty please add some task</p>
      ) : (
        <div className="container" id="main-content">
          <ul className="todos">
            <li key={todoList.id} className={todoList.isDone ? "comleted" : ""}>
              {todoList.todo}
              <button className="list-button" onClick={handleToggleDone}>
                {todoList.isDone ? "✔" : " "}
              </button>
              <button className="list-button" onClick={handleRemoveTodo}>
                X
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default SingleTodo;
