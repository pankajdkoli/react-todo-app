import React from "react";
import Todo from "./model";

type TodoListProps = {
  todos: Todo[];
};

function TodoList({ todos }: TodoListProps) {
  return (
    <div>
      <div className="container" id="main-content">
        <ul className="todos">
          Todo List inside logic
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
      </div>
    </div>
  );
}

export default TodoList;
