import React from "react";
import Todo from "./model";
import SingleTodo from "./SingleTodo";

type TodoListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

function TodoList({ todos, setTodos }: TodoListProps) {
  return (
    <div className="container" id="main-content">
      <ul className="todos">
        {todos.map((todoList) => {
          return (
            // <li
            //   key={todoList.id}
            //   className={todoList.isDone ? "completed" : ""}
            // >
            //   {todoList.todo}
            // </li>
            <SingleTodo
              todoList={todoList}
              key={todoList.id}
              todos={todos}
              setTodos={setTodos}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
