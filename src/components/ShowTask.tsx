import React from "react";

interface ShowTaskProps {
  TaskSubmit: string;
}
// const [remainingTasks, setRemainingTasks] = useState<number>(0);
// const [completedTasks, setCompletedTasks] = useState<number>(0);

function ShowTask() {
  return (
    <form>
      <div className="container" id="main-content">
        <ul className="stats">
          <li>
            <span>Remaining Task</span>
            <span id="remaining-task">0</span>
          </li>
          <li>
            <span>Completed Task</span>
            <span id="completed-task">0</span>
          </li>
          <li>
            <span>Total</span>
            <span id="total-task">0</span>
          </li>
        </ul>
      </div>
    </form>
  );
}

export default ShowTask;
