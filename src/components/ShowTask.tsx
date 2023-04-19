import React from "react";

// interface testPros {
//   TaskSubmit: string;
// }
function ShowTask({}) {
  return (
    <section>
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
    </section>
  );
}

export default ShowTask;
