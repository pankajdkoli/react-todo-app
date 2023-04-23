import TodoList from "./TodoList";

function ShowTask({ remainingTasks, completedTasks, todos }: any) {
  return (
    <form>
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
            <span id="total-task">{todos.length}</span>
          </li>
        </ul>
      </div>
    </form>
  );
}

export default ShowTask;
