import { useState } from "react";

export default function CounterList() {
  const [counters, setCounters] = useState([0, 0, 0]);

  function handleIncrementClick(index) {
    const updatedCounter = counters.map(function (current_value, key_index) {
      if (key_index === index) {
        // Increment the clicked counter
        return current_value + 1;
      } else {
        // The rest haven't changed
        return current_value;
      }
    });
    setCounters(updatedCounter);
  }

  return (
    <ul>
      {counters.map((counter, i) => (
        <li key={i}>
          {counter}
          <button
            onClick={() => {
              handleIncrementClick(i);
            }}
          >
            +1
          </button>
        </li>
      ))}
    </ul>
  );
}
