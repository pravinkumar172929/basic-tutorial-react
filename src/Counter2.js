import React, { useState } from "react";

export default function Counter2() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>The value of the count is: {count} </h1>

      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increase
        </button>

        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrease
        </button>
      </div>
    </div>
  );
}
