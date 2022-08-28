import React from "react";

export default function GreaterValue(props) {
  // destructuring
  const { inputVal1, inputVal2, setInputVal1, setInputVal2 } = props;

  return (
    <div>
      <h1>Greater Value</h1>
      <input
        type="number"
        onChange={(e) => setInputVal1(e.target.value)}
        value={inputVal1}
      />
      <input
        type="number"
        onChange={(e) => setInputVal2(e.target.value)}
        value={inputVal2}
      />

      <button
        onClick={() => {
          if (inputVal1 > inputVal2) {
            alert("first One");
          } else if (inputVal1 < inputVal2) {
            alert("second One");
          } else {
            alert("both are equal");
          }
        }}
      >
        Click to know
      </button>
    </div>
  );
}
