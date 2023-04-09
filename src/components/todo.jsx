import React, { useState, useEffect } from "react";
import "./todo.css";

function TodoApp() {
  const [todoList, setTodoList] = useState([]);
  const [remainingTasks, setRemainingTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);

  //add todo in ui
  const addTodo = (todoItem) => {
    if (todoItem.trim() === "") return;
    setTodoList([...todoList, { task: todoItem, completed: false }]);
  };

  useEffect(() => {
    const storedTodoList = JSON.parse(localStorage.getItem("todoList"));
    if (storedTodoList) {
      setTodoList(storedTodoList);
    }
  }, []);

  useEffect(() => {
    const remaining = todoList.filter((item) => !item.completed).length;
    setRemainingTasks(remaining);
    setCompletedTasks(todoList.length - remaining);
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const CompletedTodo = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList[index].completed = !updatedTodoList[index].completed;
    setTodoList(updatedTodoList);
  };

  const removeTodo = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(index, 1);
    setTodoList(updatedTodoList);
    // Save the updated todo list to local storage
    localStorage.setItem("todoList", JSON.stringify(updatedTodoList));
  };

  const editTodo = (index, newTask) => {
    const updatedTodoList = [...todoList];
    updatedTodoList[index].task = newTask;
    setTodoList(updatedTodoList);
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
              <span>Remaining Task</span>
              <span id="remaining-task">{remainingTasks}</span>
            </li>
            <li>
              <span>Completed Task</span>
              <span id="completed-task">{completedTasks}</span>
            </li>
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
                <li key={index} className={item.completed ? "completed" : ""}>
                  <button
                    className="list-button"
                    onClick={() => CompletedTodo(index)}
                  >
                    {item.completed ? "✔" : " "}
                  </button>

                  <input
                    type="text"
                    defaultValue={item.task}
                    onBlur={(e) => editTodo(index, e.target.value)}
                  />

                  <button
                    className="list-button"
                    onClick={() => removeTodo(index)}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
export default TodoApp;
