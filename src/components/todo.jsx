import React, { useState, useEffect } from "react";
import "./todo.css";

function TodoApp() {
  const [todoList, setTodoList] = useState([]);

  //add todo in ui
  const addTodo = (todoItem) => {
    if (todoItem.trim() === "") return;
    setTodoList([...todoList, todoItem]);
    // Save the updated todo list to local storage
    localStorage.setItem("todoList", JSON.stringify([...todoList, todoItem]));
  };

  useEffect(() => {
    const storedTodoList = JSON.parse(localStorage.getItem("todoList"));
    if (storedTodoList) {
      setTodoList(storedTodoList);
    }
  }, []);

  const removeTodo = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(index, 1);
    setTodoList(updatedTodoList);
    // Save the updated todo list to local storage
    localStorage.setItem("todoList", JSON.stringify(updatedTodoList));
  };

  return (
    <>
      <header className="container" id="main-herder">
        <h1>Today Task</h1>
        <form
          id="todo-form"
          onSubmit={(e) => {
            e.preventDefault();
            addTodo(e.target.elements.todoItem.value);

            e.target.reset();
          }}
        >
          {console.log()}
          <input
            type="text"
            name="todoItem"
            className="task-name"
            placeholder="do your task"
          />
          <button type="submit"> Add Task </button>
        </form>
      </header>
      <section>
        <div className="container" id="main-content">
          <ul className="stats">
            <li>
              <span>Total</span>
              <span id="total-task">{todoList.length}</span>
            </li>
          </ul>
          {/* get the total number of items */}
          {todoList.length === 0 ? (
            <p>Your todo list is empty please add some task</p>
          ) : (
            <ul className="todos">
              {todoList.map((item, index) => (
                <li key={index}>
                  {item}
                  <button onClick={() => removeTodo(index)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
          {console.log(todoList)}
        </div>
      </section>
    </>
  );
}
export default TodoApp;
